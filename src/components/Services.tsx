'use client'

import { services } from '@/constants/data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Services() {
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
            Our Services
          </h2>
          <p
            ref={addToRefs}
            className='text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed'
          >
            Comprehensive construction solutions designed to bring your vision
            to life with excellence and precision
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <div
              key={service.id}
              ref={addToRefs}
              className='group relative bg-[var(--dark-blue)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2'
            >
              {/* Image container with overlay */}
              <div className='relative h-48 overflow-hidden'>
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[var(--dark-blue)]/80' />
              </div>

              {/* Content container */}
              <div className='p-8 relative'>
                {/* Hover effect overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                <div className='relative z-10'>
                  <h3 className='text-xl font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors duration-300'>
                    {service.title}
                  </h3>
                  <p className='text-gray-300 leading-relaxed group-hover:text-white/90 transition-colors duration-300'>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
