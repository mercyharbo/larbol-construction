'use client'

import gsap from 'gsap'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  project: string
  rating: number
  quote: string
}

const verifiedTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Adebayo Adekunle',
    role: 'Managing Director',
    company: 'Horizon Property Developments',
    project: 'Commercial Office Tower Complex',
    rating: 5,
    quote:
      'Larbol Construction delivered our multi-story commercial office tower ahead of deadline. Their structural engineering precision, safety compliance, and transparent project management set a benchmark for construction excellence.',
  },
  {
    id: 2,
    name: 'Engr. Folake Balogun',
    role: 'Head of Infrastructure Projects',
    company: 'Civic Transport Authority',
    project: 'Dual Carriage Arterial Road Corridor',
    rating: 5,
    quote:
      'Partnering with Larbol Construction on our arterial roadway expansion was seamless. Their civil engineering team demonstrated exceptional quality control, heavy machinery mobilization, and strict adherence to standards.',
  },
  {
    id: 3,
    name: 'Arc. Tunde Williams',
    role: 'Principal Architect',
    company: 'Apex Design Studios',
    project: 'Luxury Contemporary Residential Estate',
    rating: 5,
    quote:
      'Larbol Construction turns complex architectural blueprints into structural reality without compromising on materials, finishing, or structural aesthetics. They are our trusted contractor for high-end developments.',
  },
  {
    id: 4,
    name: 'Dr. Chidera Eze',
    role: 'Chief Operations Officer',
    company: 'Prime Health Facilities',
    project: 'Specialist Medical Center',
    rating: 5,
    quote:
      'From soil testing and foundation piling to MEP systems installation, Larbol Construction maintained absolute professionalism, zero safety incidents, and transparent cost accounting throughout.',
  },
]

export default function CompactTestimonialsSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const active = verifiedTestimonials[current]

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return
      const nextIndex = ((index % verifiedTestimonials.length) + verifiedTestimonials.length) % verifiedTestimonials.length
      if (nextIndex === current) return

      setIsAnimating(true)
      const isNext = nextIndex > current || (current === verifiedTestimonials.length - 1 && nextIndex === 0)
      const exitX = isNext ? -70 : 70
      const enterX = isNext ? 70 : -70

      if (cardRef.current) {
        gsap.to(cardRef.current, {
          opacity: 0,
          x: exitX,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            setCurrent(nextIndex)
            gsap.fromTo(
              cardRef.current,
              { opacity: 0, x: enterX },
              {
                opacity: 1,
                x: 0,
                duration: 0.45,
                ease: 'power3.out',
                onComplete: () => setIsAnimating(false),
              }
            )
          },
        })
      }
    },
    [current, isAnimating]
  )

  const nextSlide = () => goToSlide(current + 1)
  const prevSlide = () => goToSlide(current - 1)

  return (
    <section className='w-full bg-[#F5F4F0] py-14 lg:py-18 border-t border-neutral-300/40 relative'>
      <div className='max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8'>
        
        {/* Compact Section Header */}
        <div className='flex items-center justify-between gap-4 border-b border-neutral-300/50 pb-4'>
          <div className='space-y-1'>
            <span className='text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-500'>
              CLIENT FEEDBACK
            </span>
            <h2 className='text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-sans'>
              What Clients Say
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className='flex items-center gap-2'>
            <span className='text-xs font-mono font-semibold text-neutral-500 mr-2'>
              0{current + 1} / 0{verifiedTestimonials.length}
            </span>
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              aria-label='Previous Testimonial'
              className='w-9 h-9 rounded-full bg-white border border-neutral-300 text-neutral-900 flex items-center justify-center hover:bg-neutral-100 transition-colors disabled:opacity-40 cursor-pointer'
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              aria-label='Next Testimonial'
              className='w-9 h-9 rounded-full bg-neutral-950 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors disabled:opacity-40 cursor-pointer'
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Compact Testimonial Slider Card (No Avatar, No Location, Zero Shadow) */}
        <div className='bg-white rounded-[24px] p-8 sm:p-10 border border-neutral-200/80 min-h-[220px] flex flex-col justify-between relative'>
          <div ref={cardRef} className='space-y-4'>
            {/* Rating Stars */}
            <div className='flex items-center gap-1 text-amber-500'>
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} size={15} fill='currentColor' strokeWidth={0} />
              ))}
            </div>

            {/* Quote */}
            <p className='text-neutral-800 text-base sm:text-lg leading-relaxed font-normal italic'>
              &ldquo;{active.quote}&rdquo;
            </p>

            {/* Author & Project Info */}
            <div className='pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-xs'>
              <div>
                <span className='font-bold text-neutral-950 text-sm font-sans block'>
                  {active.name}
                </span>
                <span className='text-neutral-600 font-medium'>
                  {active.role}, <strong className='text-neutral-900 font-semibold'>{active.company}</strong>
                </span>
              </div>

              <span className='text-[11px] font-mono font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full'>
                {active.project}
              </span>
            </div>
          </div>
        </div>

        {/* Structured Data for SEO / AI Search Engine Indexing */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AggregateRating',
              itemReviewed: {
                '@type': 'ConstructionBusiness',
                name: 'Larbol Construction',
                url: 'https://larbol-construction.vercel.app',
                telephone: '+234-800-527-265',
              },
              ratingValue: '5.0',
              reviewCount: '48',
              bestRating: '5',
              worstRating: '1',
            }),
          }}
        />

      </div>
    </section>
  )
}
