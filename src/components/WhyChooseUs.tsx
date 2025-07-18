'use client'

import type React from 'react'

import { whyChooseUs } from '@/constants/data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Award,
  Building,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  Heart,
  Recycle,
  Shield,
  Zap,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const iconComponents: { [key: string]: React.ElementType } = {
  LuBuilding: Building,
  RiShieldCheckLine: Shield,
  FiClock: Clock,
  FcCurrencyExchange: DollarSign,
  FaRegFaceGrinHearts: Heart,
  MdOutlineRecycling: Recycle,
}

// Enhanced data with statistics
const enhancedWhyChooseUs = [
  {
    ...whyChooseUs[0],
    stat: { number: 500, suffix: '+', label: 'Projects Completed' },
    details:
      "From residential complexes to commercial skyscrapers, we've successfully delivered projects of all scales with unmatched precision and quality.",
  },
  {
    ...whyChooseUs[1],
    stat: { number: 15, suffix: ' Years', label: 'Experience' },
    details:
      "Our quarter-century of experience has taught us that quality isn't just about materials—it's about attention to every detail.",
  },
  {
    ...whyChooseUs[2],
    stat: { number: 98, suffix: '%', label: 'On-Time Delivery' },
    details:
      'We understand that time is money. Our proven project management ensures your project is completed when promised.',
  },
  {
    ...whyChooseUs[3],
    stat: { number: 30, suffix: '%', label: 'Cost Savings' },
    details:
      'Through efficient processes and smart resource management, we consistently deliver projects under budget without compromising quality.',
  },
  {
    ...whyChooseUs[4],
    stat: { number: 1000, suffix: '+', label: 'Happy Clients' },
    details:
      'Our commitment to excellence has earned us the trust and satisfaction of over a thousand clients across various industries.',
  },
  {
    ...whyChooseUs[5],
    stat: { number: 85, suffix: '%', label: 'Sustainable Materials' },
    details:
      "We're committed to environmental responsibility, using sustainable materials and eco-friendly practices in all our projects.",
  },
]

interface CounterProps {
  end: number
  suffix: string
  duration?: number
  delay?: number
}

function AnimatedCounter({
  end,
  suffix,
  duration = 2,
  delay = 0,
}: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const counter = { value: 0 }

    gsap.to(counter, {
      value: end,
      duration,
      delay,
      ease: 'power2.out',
      onUpdate: () => {
        setCount(Math.floor(counter.value))
      },
      scrollTrigger: {
        trigger: countRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none none',
      },
    })
  }, [end, duration, delay])

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  )
}

export default function EnhancedWhyChooseUs() {
  const container = useRef<HTMLElement>(null)
  const revealRefs = useRef<Array<HTMLElement>>([])
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [animationsPaused, setAnimationsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useGSAP(() => {
    // Header animations
    const headerElements = revealRefs.current.slice(0, 2)
    gsap.fromTo(
      headerElements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerElements[0],
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Card animations with variety
    const cardElements = revealRefs.current.slice(2)
    cardElements.forEach((el, index) => {
      const direction = index % 2 === 0 ? -100 : 100
      const rotation = index % 3 === 0 ? 5 : index % 3 === 1 ? -5 : 0

      gsap.fromTo(
        el,
        {
          x: direction,
          y: 50,
          opacity: 0,
          rotation: rotation,
          scale: 0.8,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top center+=50',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Floating animation for icons
    cardElements.forEach((el) => {
      const icon = el.querySelector('.floating-icon')
      if (icon) {
        gsap.to(icon, {
          y: -10,
          duration: 2,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          delay: Math.random() * 2,
        })
      }
    })

    // Background parallax effect
    gsap.to('.bg-pattern', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  const toggleCardExpansion = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const toggleAnimations = () => {
    setAnimationsPaused(!animationsPaused)
    if (animationsPaused) {
      ScrollTrigger.refresh()
    }
  }

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (container.current) {
      observer.observe(container.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={container}
      className='bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden py-20 px-5 lg:px-10'
    >
      <div className='bg-pattern absolute inset-0 opacity-10'>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-20" />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10' />
      </div>

      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute w-2 h-2 bg-white/20 rounded-full animate-pulse'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className='container mx-auto relative z-10 flex flex-col gap-[5rem]'>
        <div className='text-center flex flex-col gap-5'>
          <div className='flex items-center gap-2 w-auto mx-auto bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'>
            <Award className='text-yellow-400' size={20} />
            <span className='text-sm font-medium'>Industry Leaders</span>
          </div>

          <h2
            ref={addToRefs}
            className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent'
          >
            Why Choose Us
          </h2>

          <p
            ref={addToRefs}
            className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'
          >
            Discover the Larbol difference in construction excellence. Our
            commitment to quality, innovation, and customer satisfaction sets us
            apart in the industry.
          </p>

          {/* Statistics overview */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'>
            <div className='text-center space-y-3'>
              <div className='text-3xl font-bold text-blue-400'>
                <AnimatedCounter end={500} suffix='+' />
              </div>
              <div className='text-sm text-gray-400'>Projects</div>
            </div>
            <div className='text-center space-y-3'>
              <div className='text-3xl font-bold text-green-400'>
                <AnimatedCounter end={25} suffix=' Years' />
              </div>
              <div className='text-sm text-gray-400'>Experience</div>
            </div>
            <div className='text-center space-y-3'>
              <div className='text-3xl font-bold text-purple-400'>
                <AnimatedCounter end={1000} suffix='+' />
              </div>
              <div className='text-sm text-gray-400'>Happy Clients</div>
            </div>
            <div className='text-center space-y-3'>
              <div className='text-3xl font-bold text-yellow-400'>
                <AnimatedCounter end={98} suffix='%' />
              </div>
              <div className='text-sm text-gray-400'>Success Rate</div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {enhancedWhyChooseUs.map((item, index) => {
            const Icon = iconComponents[item.icon] || Building
            const isExpanded = expandedCard === index

            return (
              <div
                key={index}
                ref={addToRefs}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20 ${
                  isExpanded ? 'lg:col-span-2 xl:col-span-1' : ''
                }`}
              >
                <div className='absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                <div
                  className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse'
                  style={{ padding: '1px' }}
                >
                  <div className='w-full h-full bg-slate-900/90 rounded-2xl' />
                </div>

                <div className='relative z-10 p-8'>
                  <div className='flex items-start justify-between mb-6'>
                    <div className='floating-icon w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      <Icon className='text-2xl text-white' />
                    </div>

                    <div className='text-right'>
                      <div className='text-2xl font-bold text-blue-400'>
                        <AnimatedCounter
                          end={item.stat.number}
                          suffix={item.stat.suffix}
                          delay={index * 0.1}
                        />
                      </div>
                      <div className='text-xs text-gray-400'>
                        {item.stat.label}
                      </div>
                    </div>
                  </div>

                  <h3 className='text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300'>
                    {item.title}
                  </h3>

                  <p className='text-gray-300 leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300'>
                    {item.description}
                  </p>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className='border-t border-white/10 pt-4 mt-4'>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {item.details}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleCardExpansion(index)}
                    className='flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium mt-4'
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? 'Show less' : 'Show more'}
                  >
                    {isExpanded ? (
                      <>
                        Show Less <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        Learn More <ChevronDown size={16} />
                      </>
                    )}
                  </button>

                  <div className='absolute bottom-0 left-0 w-full h-1 bg-white/10'>
                    <div
                      className='h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 group-hover:w-full'
                      style={{
                        width: isVisible
                          ? `${(item.stat.number / 1000) * 100}%`
                          : '0%',
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl'>
          <div className='flex items-center gap-2'>
            <Zap className='text-yellow-400' size={24} />
            <span className='text-lg font-semibold'>Ready to get started?</span>
          </div>
          <button className='bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors'>
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  )
}
