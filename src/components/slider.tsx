'use client'

import gsap from 'gsap'
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

export interface SlideData {
  id: number
  imageUrl: string
  title: string
  description?: string
  category?: string
  highlightNumber?: string
  highlightLabel?: string
  badgeText?: string
  videoUrl?: string
}

interface SliderProps {
  slides: SlideData[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function PremiumHeroSlider({
  slides,
  autoPlay = true,
  autoPlayInterval = 7500,
}: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const progressTweenRef = useRef<gsap.core.Tween | null>(null)

  const activeSlide = slides[currentSlide] || slides[0]

  // Progress Bar Animation
  const startProgress = useCallback(() => {
    if (!autoPlay || isPaused || !progressRef.current) return

    if (progressTweenRef.current) {
      progressTweenRef.current.kill()
    }

    gsap.set(progressRef.current, { width: '0%' })
    progressTweenRef.current = gsap.to(progressRef.current, {
      width: '100%',
      duration: autoPlayInterval / 1000,
      ease: 'none',
      onComplete: () => {
        if (!isPaused && autoPlay) {
          nextSlide()
        }
      },
    })
  }, [autoPlay, isPaused, autoPlayInterval])

  const stopProgress = useCallback(() => {
    if (progressTweenRef.current) {
      progressTweenRef.current.kill()
    }
    if (progressRef.current) {
      gsap.set(progressRef.current, { width: '0%' })
    }
  }, [])

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return
      const nextIndex = ((index % slides.length) + slides.length) % slides.length
      if (nextIndex === currentSlide) return

      setIsAnimating(true)
      stopProgress()

      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false)
          startProgress()
        },
      })

      // Step 1: Smooth fade out of image and text
      if (imageRef.current && contentRef.current) {
        tl.to(imageRef.current, {
          opacity: 0.15,
          scale: 1.05,
          duration: 0.45,
          ease: 'power2.inOut',
        })
        .to(
          contentRef.current,
          {
            opacity: 0,
            y: -10,
            duration: 0.4,
            ease: 'power2.inOut',
          },
          0
        )
        // Step 2: Switch slide state at the midpoint
        .add(() => {
          setCurrentSlide(nextIndex)
        })
        // Step 3: Slow luxury bloom effect on new slide
        .to(imageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
        })
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out',
          },
          '-=0.9'
        )
      }
    },
    [currentSlide, isAnimating, slides.length, startProgress, stopProgress]
  )

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1)
  }, [currentSlide, goToSlide])

  const togglePlayPause = () => {
    setIsPaused((prev) => !prev)
  }

  // Handle Autoplay lifecycle
  useEffect(() => {
    if (!autoPlay || isPaused || isAnimating) return
    startProgress()

    return () => {
      stopProgress()
    }
  }, [currentSlide, autoPlay, isPaused, isAnimating, startProgress, stopProgress])

  return (
    <>
      <section className='w-full bg-[#F5F4F0] pt-24 pb-12 lg:pt-28 lg:pb-16 min-h-[calc(100vh-4rem)] flex items-center'>
        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full'>
          {/* Spaciaz-inspired Split Hero Layout */}
          <div
            className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left Card: Vertical Architectural Image Card */}
            <div className='lg:col-span-5 xl:col-span-5 relative rounded-[32px] overflow-hidden bg-neutral-900 min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] shadow-sm group'>
              <div ref={imageRef} className='relative w-full h-full min-h-[460px] sm:min-h-[540px] lg:min-h-[620px]'>
                <Image
                  src={activeSlide.imageUrl}
                  alt={activeSlide.title}
                  fill
                  priority
                  sizes='(max-width: 1024px) 100vw, 45vw'
                  className='object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10' />
              </div>

              {/* Progress Line Bar at Bottom of Image */}
              {autoPlay && (
                <div className='absolute bottom-0 left-0 w-full h-1.5 bg-white/20 z-30'>
                  <div ref={progressRef} className='h-full bg-[#D4F639]' style={{ width: '0%' }} />
                </div>
              )}
            </div>

            {/* Right Card: Warm Light Architectural Content Panel */}
            <div className='lg:col-span-7 xl:col-span-7 bg-[#EFECE6] rounded-[32px] p-8 sm:p-12 lg:p-14 flex flex-col justify-between min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] border border-neutral-300/40 shadow-xs relative'>
              
              {/* Upper Content Area */}
              <div ref={contentRef} className='space-y-6 max-w-2xl'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.12] font-sans'>
                  {activeSlide.title}
                </h1>

                <p className='text-neutral-600 text-base sm:text-lg font-normal leading-relaxed max-w-xl'>
                  {activeSlide.description}
                </p>

                <div className='pt-2'>
                  <Link
                    href='/services'
                    className='inline-flex items-center gap-3.5 bg-white hover:bg-neutral-50 text-neutral-950 font-semibold text-base px-7 py-3.5 rounded-full shadow-xs border border-neutral-200/80 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group'
                  >
                    <span>View All Services</span>
                    <div className='w-9 h-9 rounded-full bg-[#D4F639] text-neutral-950 flex items-center justify-center font-bold group-hover:scale-105 transition-transform'>
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Bottom Metric & Interactive Controller Bar */}
              <div className='pt-8 border-t border-neutral-300/60 mt-8 flex flex-wrap items-center justify-between gap-6'>
                {/* Metric Callout (e.g. 40 years of experiences) */}
                <div className='flex items-center gap-4'>
                  <span className='text-5xl sm:text-6xl font-black text-neutral-950 tracking-tight font-sans'>
                    {activeSlide.highlightNumber || '40'}
                  </span>
                  <span className='text-xs font-bold text-neutral-700 uppercase tracking-wider leading-tight max-w-[90px] block'>
                    {activeSlide.highlightLabel || 'years of experiences'}
                  </span>
                </div>

                {/* Video Showreel & Navigation Pill Controls */}
                <div className='flex items-center gap-3'>
                  {/* Watch Video Showreel Pill */}
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className='bg-neutral-950 hover:bg-neutral-900 text-white rounded-full px-5 py-3 flex items-center gap-3 transition-all duration-200 shadow-md cursor-pointer group'
                  >
                    <div className='relative w-9 h-6 rounded-md overflow-hidden bg-neutral-800 flex items-center justify-center'>
                      <Image
                        src={activeSlide.imageUrl}
                        alt='Video preview'
                        fill
                        className='object-cover opacity-60 group-hover:opacity-80 transition-opacity'
                      />
                      <Play size={12} className='text-white relative z-10 fill-white ml-0.5' />
                    </div>
                    <span className='text-xs font-semibold tracking-wide pr-1'>Watch</span>
                  </button>

                  {/* Slider Controls Container */}
                  <div className='flex items-center gap-1.5 bg-white/80 backdrop-blur-xs p-1.5 rounded-full border border-neutral-300/60 shadow-xs'>
                    <button
                      onClick={togglePlayPause}
                      aria-label={isPaused ? 'Resume' : 'Pause'}
                      className='w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 flex items-center justify-center transition-colors'
                    >
                      {isPaused ? <Play size={14} /> : <Pause size={14} />}
                    </button>
                    <button
                      onClick={prevSlide}
                      disabled={isAnimating}
                      aria-label='Previous Slide'
                      className='w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 flex items-center justify-center transition-colors disabled:opacity-40'
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className='text-xs font-mono font-bold text-neutral-800 px-2'>
                      0{currentSlide + 1}
                    </span>
                    <button
                      onClick={nextSlide}
                      disabled={isAnimating}
                      aria-label='Next Slide'
                      className='w-9 h-9 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white flex items-center justify-center transition-colors disabled:opacity-40'
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Interactive Video Modal */}
      {isVideoOpen && (
        <div className='fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8'>
          <div className='relative w-full max-w-4xl bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800'>
            <div className='flex items-center justify-between p-4 border-b border-neutral-800 bg-neutral-900'>
              <h3 className='text-white font-semibold text-base sm:text-lg'>
                Larbol Construction — {activeSlide.title}
              </h3>
              <button
                onClick={() => setIsVideoOpen(false)}
                className='p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors'
              >
                <X size={20} />
              </button>
            </div>
            <div className='relative aspect-video w-full bg-black flex items-center justify-center'>
              <iframe
                src='https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1'
                title='Larbol Construction Overview Video'
                className='w-full h-full border-0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
