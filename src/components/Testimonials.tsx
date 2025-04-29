'use client'

import { testimonials } from '@/constants/data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Testimonials() {
  const container = useRef(null)
  const revealRefs = useRef<Array<HTMLElement>>([])

  useGSAP(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: -50, autoAlpha: 0 },
        {
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          autoAlpha: 1,
          stagger: 0.2,
          delay: 0.2,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=20',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [revealRefs])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <section
      ref={container}
      className='bg-[var(--primary)] text-white relative overflow-hidden'
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <h2
            ref={addToRefs}
            className='text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'
          >
            What Our Clients Say
          </h2>
          <p
            ref={addToRefs}
            className='text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed'
          >
            Discover why our clients trust Larbol Construction for their
            projects. Read firsthand experiences from satisfied customers who
            have witnessed our commitment to quality, reliability, and
            exceptional service.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={addToRefs}
              className='group relative bg-[var(--dark-blue)] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2'
            >
              {/* Hover effect overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

              {/* Testimonial content */}
              <div className='relative z-10 flex flex-col gap-4'>
                <p className='text-gray-300 leading-relaxed group-hover:text-white/90 transition-colors duration-300 italic'>
                  "{testimonial.text}"
                </p>
                <p className='font-semibold text-[var(--accent)] group-hover:text-white transition-colors duration-300'>
                  - {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
