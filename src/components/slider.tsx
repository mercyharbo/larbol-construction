'use client'

import type React from 'react'

import { cn } from '@/utils'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

interface SlideData {
  id: number
  imageUrl: string
  title: string
  caption?: string
}

interface SliderProps {
  slides: SlideData[]
  height?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  showCounter?: boolean
  showProgressBar?: boolean
  enableFullscreen?: boolean
}

export default function EnhancedSlider({
  slides,
  height = '500px',
  autoPlay = true,
  autoPlayInterval = 5000,
  showCounter = true,
  showProgressBar = true,
  enableFullscreen = false,
}: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const progressRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    new Array(slides.length).fill(false)
  )
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressAnimationRef = useRef<gsap.core.Tween | null>(null)

  // Minimum swipe distance
  const minSwipeDistance = 50

  // Initialize slider
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.set(slideRefs.current, {
        opacity: 0,
        scale: 1.1,
        visibility: 'hidden',
      })
      gsap.set(slideRefs.current[0], {
        opacity: 1,
        scale: 1,
        visibility: 'visible',
      })
    }, sliderRef)

    return () => context.revert()
  }, [])

  // Progress bar animation
  const startProgressAnimation = useCallback(() => {
    if (!showProgressBar || !progressRef.current || isPaused || !autoPlay)
      return

    progressAnimationRef.current = gsap.to(progressRef.current, {
      width: '100%',
      duration: autoPlayInterval / 1000,
      ease: 'none',
      onComplete: () => {
        if (!isPaused && autoPlay) {
          nextSlide()
        }
      },
    })
  }, [isPaused, autoPlay, autoPlayInterval])

  const resetProgressAnimation = useCallback(() => {
    if (progressAnimationRef.current) {
      progressAnimationRef.current.kill()
    }
    if (progressRef.current) {
      gsap.set(progressRef.current, { width: '0%' })
    }
  }, [])

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return
      const nextIndex =
        ((index % slides.length) + slides.length) % slides.length
      if (nextIndex === currentSlide) return

      setIsAnimating(true)
      resetProgressAnimation()

      const isNext =
        nextIndex > currentSlide ||
        (currentSlide === slides.length - 1 && nextIndex === 0)

      gsap.set(slideRefs.current[nextIndex], {
        visibility: 'visible',
        opacity: 0,
        x: isNext ? '100%' : '-100%',
        scale: 1,
      })

      const timeline = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false)
          slides.forEach((_, i) => {
            if (i !== nextIndex) {
              gsap.set(slideRefs.current[i], { visibility: 'hidden' })
            }
          })
          startProgressAnimation()
        },
      })

      timeline.to(slideRefs.current[currentSlide], {
        opacity: 0,
        x: isNext ? '-100%' : '100%',
        duration: 0.7,
        ease: 'power2.inOut',
      })

      timeline.to(
        slideRefs.current[nextIndex],
        {
          opacity: 1,
          x: '0%',
          duration: 0.7,
          ease: 'power2.inOut',
        },
        '-=0.5'
      )

      setCurrentSlide(nextIndex)
    },
    [
      currentSlide,
      isAnimating,
      slides.length,
      startProgressAnimation,
      resetProgressAnimation,
    ]
  )

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1)
  }, [currentSlide, goToSlide])

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          prevSlide()
          break
        case 'ArrowRight':
        case ' ':
          e.preventDefault()
          nextSlide()
          break
        case 'Home':
          e.preventDefault()
          goToSlide(0)
          break
        case 'End':
          e.preventDefault()
          goToSlide(slides.length - 1)
          break
        case 'Escape':
          if (isFullscreen) {
            setIsFullscreen(false)
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [
    isAnimating,
    nextSlide,
    prevSlide,
    goToSlide,
    slides.length,
    isFullscreen,
  ])

  // Auto-play with pause on hover
  useEffect(() => {
    if (!autoPlay || isPaused || isAnimating || slides.length <= 1) return

    startProgressAnimation()

    return () => {
      resetProgressAnimation()
    }
  }, [
    currentSlide,
    isPaused,
    isAnimating,
    slides.length,
    autoPlay,
    startProgressAnimation,
    resetProgressAnimation,
  ])

  // Pause/resume handlers
  const handleMouseEnter = () => {
    if (autoPlay) {
      setIsPaused(true)
      resetProgressAnimation()
    }
  }

  const handleMouseLeave = () => {
    if (autoPlay) {
      setIsPaused(false)
    }
  }

  const togglePlayPause = () => {
    setIsPaused(!isPaused)
  }

  // Image load handler
  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
  }

  // Fullscreen toggle
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div
      ref={sliderRef}
      className={cn(
        'w-full relative overflow-hidden bg-gray-900',
        isFullscreen ? 'fixed inset-0 z-50' : 'h-[calc(100vh-3.5rem)]',
        height && !isFullscreen && height
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      role='region'
      aria-label='Image carousel'
      aria-live='polite'
    >
      {/* Progress Bar */}
      {showProgressBar && autoPlay && (
        <div className='absolute top-0 left-0 w-full h-1 bg-white/20 z-40'>
          <div
            ref={progressRef}
            className='h-full bg-white transition-colors'
            style={{ width: '0%' }}
          />
        </div>
      )}

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => {
            slideRefs.current[index] = el
          }}
          className='absolute top-0 left-0 w-full h-full overflow-hidden'
          aria-hidden={currentSlide !== index}
        >
          <div className='absolute inset-0 z-10 bg-black/60' />

          {/* Loading placeholder */}
          {!imagesLoaded[index] && (
            <div className='absolute inset-0 z-5 bg-gray-800 flex items-center justify-center'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white'></div>
            </div>
          )}

          <Image
            src={slide.imageUrl || '/placeholder.svg'}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover w-full transition-transform duration-700'
            onLoad={() => handleImageLoad(index)}
          />

          <div className='absolute inset-0 z-20 flex items-center justify-center p-8'>
            <div className='flex flex-col items-center text-center gap-7 font-normal text-white w-full lg:w-[65%] max-sm:gap-5 max-xs:gap-3'>
              <h1 className='lg:text-4xl/snug md:text-[3rem] max-sm:text-2xl/relaxed'>
                {slide.title ||
                  "Building Tomorrow's Legacy: Where Innovation Meets Infrastructure Excellence"}
              </h1>
              <p className='lg:text-lg md:text-2xl max-sm:text-base max-xs:text-base max-w-3xl text-gray-300'>
                {slide.caption ||
                  "From groundbreaking road networks to iconic structures, we build the foundation of tomorrow. With cutting-edge technology and decades of expertise, we're shaping the future of construction, one project at a time."}
              </p>
              <Link
                href='/services'
                className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              >
                Explore Our Services →
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className='absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/20 lg:block hidden hover:bg-white/30 p-3 rounded-full transition-all duration-200 z-30 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-white/50'
        aria-label='Previous slide'
      >
        <ChevronLeft size={24} color='white' />
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className='absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/20 lg:block hidden hover:bg-white/30 p-3 rounded-full transition-all duration-200 z-30 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-white/50'
        aria-label='Next slide'
      >
        <ChevronRight size={24} color='white' />
      </button>

      {/* Mobile Navigation Arrows */}
      <div className='lg:hidden absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4 z-30'>
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className='bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-200 disabled:opacity-50'
          aria-label='Previous slide'
        >
          <ChevronLeft size={20} color='white' />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className='bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-200 disabled:opacity-50'
          aria-label='Next slide'
        >
          <ChevronRight size={20} color='white' />
        </button>
      </div>

      {/* Controls */}
      <div className='absolute top-4 right-4 flex gap-2 z-30'>
        {autoPlay && (
          <button
            onClick={togglePlayPause}
            className='bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50'
            aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
          >
            {isPaused ? (
              <Play size={20} color='white' />
            ) : (
              <Pause size={20} color='white' />
            )}
          </button>
        )}

        {enableFullscreen && (
          <button
            onClick={toggleFullscreen}
            className='bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50'
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            <Maximize2 size={20} color='white' />
          </button>
        )}
      </div>

      {/* Slide Counter */}
      {showCounter && (
        <div className='absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-30'>
          {currentSlide + 1} / {slides.length}
        </div>
      )}

      {/* Dots Navigation */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={cn(
              'h-3 cursor-pointer rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50',
              currentSlide === index
                ? 'bg-white w-6'
                : 'bg-white/50 w-3 hover:bg-white/70'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
