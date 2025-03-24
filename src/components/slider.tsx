import { cn } from '@/utils'
import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface SlideData {
  id: number
  imageUrl: string
  title: string
}

interface SliderProps {
  slides: SlideData[]
  height?: string
}

export default function SliderComp({ slides, height = '500px' }: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  /* The `useEffect` hook you provided is responsible for initializing the slider component using GSAP
(GreenSock Animation Platform) when the component mounts. Here's a breakdown of what it does: */
  useEffect(() => {
    const context = gsap.context(() => {
      // Hide all slides except the first one
      gsap.set(slideRefs.current, {
        opacity: 0,
        scale: 1.1,
        visibility: 'hidden',
      })

      // Show the first slide
      gsap.set(slideRefs.current[0], {
        opacity: 1,
        scale: 1,
        visibility: 'visible',
      })
    }, sliderRef)

    return () => context.revert()
  }, [])

  /**
   * The `goToSlide` function in TypeScript React handles animating transitions between slides with
   * GreenSock Animation Platform (GSAP) while preventing animation overlap.
   * @param {number} index - The `index` parameter in the `goToSlide` function represents the index of
   * the slide you want to navigate to within the `slides` array. This function handles the animation to
   * transition from the current slide to the slide at the specified index.
   * @returns The `goToSlide` function returns `undefined` since there is no explicit return statement in
   * the function. The function is primarily used to perform animations and update the state within the
   * function itself.
   */
  const goToSlide = (index: number) => {
    if (isAnimating) return // Prevent animation overlap

    const nextIndex = ((index % slides.length) + slides.length) % slides.length
    if (nextIndex === currentSlide) return // Don't animate if it's the same slide

    setIsAnimating(true)

    // Make sure the next slide is visible but with opacity 0
    gsap.set(slideRefs.current[nextIndex], {
      visibility: 'visible',
      opacity: 0,
      scale: nextIndex > currentSlide ? 1.1 : 0.9, // Scale based on direction
    })

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false)
        // Hide previous slides completely
        slides.forEach((_, i) => {
          if (i !== nextIndex) {
            gsap.set(slideRefs.current[i], { visibility: 'hidden' })
          }
        })
      },
    })

    // Current slide animation
    timeline.to(slideRefs.current[currentSlide], {
      opacity: 0,
      scale: nextIndex > currentSlide ? 0.9 : 1.1, // Scale based on direction
      duration: 0.7,
      ease: 'power2.inOut',
    })

    // Next slide animation (slightly overlapped)
    timeline.to(
      slideRefs.current[nextIndex],
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'power2.inOut',
      },
      '-=0.5'
    ) // Overlap with previous animation

    setCurrentSlide(nextIndex)
  }

  /**
   * The above functions `nextSlide` and `prevSlide` are used to navigate to the next and previous slides
   * respectively in a slideshow.
   */
  const nextSlide = () => {
    goToSlide(currentSlide + 1)
  }

  const prevSlide = () => {
    goToSlide(currentSlide - 1)
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && slides.length > 1) {
        nextSlide()
      }
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentSlide, isAnimating, slides.length])

  return (
    <div
      ref={sliderRef}
      className={cn(
        'w-full relative overflow-hidden h-[80vh]',
        height && height
      )}
      //   style={{ height }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => {
            slideRefs.current[index] = el
          }}
          className='absolute top-0 left-0 w-full h-full overflow-hidden'
        >
          <div className='absolute inset-0 z-10 bg-black/70' />
          <Image
            src={slide.imageUrl}
            alt={`slide ${index + 1}`}
            fill
            priority
            className='object-cover w-full transition-transform duration-700'
          />
          <div className='absolute inset-0 z-20 flex items-center justify-center p-8'>
            <div className='flex flex-col items-center text-center gap-7 font-normal text-white w-full lg:w-[65%]'>
              <h1 className='lg:text-[3rem] md:text-[3rem] max-sm:text-[1.8rem]'>
                Build Your World with Larbol: Where Construction Meets
                Excellence
              </h1>
              <p className='lg:text-lg md:text-2xl max-sm:text-lg max-xs:text-lg'>
                At Larbol, we specialize in crafting roads, bridges, buildings,
                drainage systems, and beyond. With a commitment to precision and
                innovation, we transform visions into remarkable infrastructure
                that stands the test of time.
              </p>
              <button
                type='button'
                className='bg-[var(--accent)] text-black px-6 py-2 cursor-pointer hover:opacity-80'
              >
                Explore More &rarr;
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className='absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full hidden lg:block transition-colors z-30 disabled:opacity-50'
      >
        <IoIosArrowBack size={24} color='white' />
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className='absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full hidden lg:block transition-colors z-30 disabled:opacity-50'
      >
        <IoIosArrowForward size={24} color='white' />
      </button>

      {/* Dots Navigation */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-[var(--accent)] w-6'
                : 'bg-[var(--gray)]/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
