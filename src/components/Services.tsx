'use client'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const metrics = [
  { value: '48+', label: 'completed projects' },
  { value: '52+', label: 'projects in development' },
  { value: '2.3b+', label: 'total projects cost' },
  { value: '18m+', label: 'square feet of property' },
]

const servicesList = [
  {
    id: 1,
    title: 'Commercial Construction',
    category: 'Commercial',
    description:
      'We engineer and construct high-rise towers, corporate headquarters, and retail complexes built to redefine urban skylines.',
    image: '/images/slides/slide-1.jpg',
  },
  {
    id: 2,
    title: 'Civil Infrastructure & Highways',
    category: 'Infrastructure',
    description:
      'Designing and executing resilient highway networks, bridges, and municipal transit corridors built for long-term growth.',
    image: '/images/slides/slide-2.jpg',
  },
  {
    id: 3,
    title: 'Bespoke Luxury Residential',
    category: 'Residential',
    description:
      'Crafting high-end private estates and sustainable residential developments with precision architectural craftsmanship.',
    image: '/images/slides/slide-3.jpg',
  },
  {
    id: 4,
    title: 'Eco-Conscious Green Building',
    category: 'Sustainable',
    description:
      'Integrating smart thermal envelope systems, renewable energy, and eco-certified materials to minimize carbon footprint.',
    image: '/images/slides/slide-4.jpg',
  },
]

export default function SpaciazServicesAndStatsSection() {
  return (
    <>
      {/* Dark Cityscape Metrics Banner (Matching Reference UI Spaciaz Section 3) */}
      <section className='w-full bg-neutral-950 text-white py-20 lg:py-28 relative overflow-hidden'>
        {/* Cityscape Background Image */}
        <div className='absolute inset-0 z-0 opacity-20'>
          <Image
            src='/images/slides/slide-5.jpg'
            alt='Cityscape skyline background'
            fill
            className='object-cover'
          />
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950 z-0' />

        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 lg:space-y-16 text-center'>
          {/* Header Link / Tag */}
          <div>
            <span className='text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#D4F639]'>
              www.larbolconstruction.com
            </span>
          </div>

          {/* 4 Large Numeric Metrics */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-start justify-center'>
            {metrics.map((metric, idx) => (
              <div key={idx} className='space-y-2 text-center'>
                <div className='text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans'>
                  {metric.value}
                </div>
                <div className='text-xs sm:text-sm font-medium text-neutral-400 uppercase tracking-wider leading-snug max-w-[160px] mx-auto'>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section on Index Page */}
      <section className='w-full bg-[#F5F4F0] py-16 lg:py-24 border-t border-neutral-300/40'>
        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
          <div className='flex flex-col md:flex-row md:items-end justify-between gap-6'>
            <div className='space-y-3 max-w-xl'>
              <span className='text-xs font-bold uppercase tracking-widest text-neutral-600 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/60 inline-block'>
                EXPERT CAPABILITIES
              </span>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-sans'>
                Our Premier Services
              </h2>
            </div>
            <Link
              href='/services'
              className='inline-flex items-center gap-2.5 bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-sm px-6 py-3 rounded-full border border-neutral-300 transition-all self-start md:self-auto'
            >
              <span>View All Services</span>
              <div className='w-6 h-6 rounded-full bg-[#D4F639] text-neutral-950 flex items-center justify-center font-bold text-xs'>
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </div>
            </Link>
          </div>

          {/* Services Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {servicesList.map((service) => (
              <div
                key={service.id}
                className='bg-white rounded-xl p-3 flex flex-col justify-between border border-neutral-200/80 transition-all group'
              >
                <div className='space-y-4'>
                  <div className='relative w-full h-44 rounded-xl overflow-hidden bg-neutral-100'>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                  </div>
                  <span className='text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-md inline-block'>
                    {service.category}
                  </span>
                  <h3 className='text-xl font-bold text-neutral-950 tracking-tight font-sans'>
                    {service.title}
                  </h3>
                  <p className='text-neutral-600 text-sm leading-relaxed line-clamp-3'>
                    {service.description}
                  </p>
                </div>

                <div className='pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between'>
                  <Link
                    href='/services'
                    className='text-xs font-bold text-neutral-900 uppercase tracking-wider hover:text-neutral-600 transition-colors'
                  >
                    Learn More
                  </Link>
                  <Link
                    href='/services'
                    aria-label={`Learn more about ${service.title}`}
                    className='w-9 h-9 rounded-full bg-neutral-950 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors'
                  >
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
