'use client'

import { whyChooseUs } from '@/constants/data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { FaRegFaceGrinHearts } from 'react-icons/fa6'
import { FcCurrencyExchange } from 'react-icons/fc'
import { FiClock } from 'react-icons/fi'
import { LuBuilding } from 'react-icons/lu'
import { MdOutlineRecycling } from 'react-icons/md'
import { RiShieldCheckLine } from 'react-icons/ri'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const iconComponents: { [key: string]: React.ElementType } = {
  LuBuilding,
  RiShieldCheckLine,
  FiClock,
  FcCurrencyExchange,
  FaRegFaceGrinHearts,
  MdOutlineRecycling,
}

export default function WhyChooseUs() {
  const container = useRef(null)
  const revealRefs = useRef<Array<HTMLElement>>([])

  useGSAP(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: -100, autoAlpha: 0 },
        {
          y: 0,
          duration: 1,
          ease: 'power2.out',
          autoAlpha: 1,
          stagger: 0.5,
          delay: 0.5,
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
            Why Choose Us
          </h2>
          <p
            ref={addToRefs}
            className='text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed'
          >
            Discover the Larbol difference in construction excellence. Our
            commitment to quality, innovation, and customer satisfaction sets us
            apart in the industry.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {whyChooseUs.map((item, index) => {
            const Icon = iconComponents[item.icon]
            return (
              <div
                key={index}
                ref={addToRefs}
                className='group relative bg-[var(--dark-blue)] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden'
              >
                {/* Hover effect overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                {/* Icon container */}
                <div className='relative z-10'>
                  <div className='w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                    <Icon className='text-3xl text-[var(--accent)]' />
                  </div>

                  <h3 className='text-xl font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors duration-300'>
                    {item.title}
                  </h3>

                  <p className='text-gray-300 leading-relaxed group-hover:text-white/90 transition-colors duration-300'>
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
