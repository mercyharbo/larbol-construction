'use client'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const pillsData = [
  { label: 'Humanitarian Community', image: '/images/slides/slide-3.jpg' },
  { label: 'Comprehensive Amenities', image: '/images/slides/slide-1.jpg' },
  { label: 'Professional Services', image: '/images/slides/slide-2.jpg' },
  { label: 'Sustainable Infrastructure', image: '/images/slides/slide-4.jpg' },
]

export default function SpaciazFeatureCardsSection() {
  return (
    <section className='w-full bg-[#F5F4F0] py-16 lg:py-24'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16'>
        
        {/* Header Title & Tag */}
        <div className='text-center space-y-4 max-w-3xl mx-auto'>
          <div className='inline-block'>
            <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/70'>
              Who We Are
            </span>
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.15] font-sans'>
            We developed landmark real estate & infrastructure projects
          </h2>
        </div>

        {/* 3 Showcase Feature Cards Grid (Matching Reference UI Spaciaz Section 2) */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch'>
          
          {/* Card 1: Dark Slate Card (01. What we do) */}
          <div className='bg-[#121417] text-white rounded-[28px] p-8 lg:p-10 flex flex-col justify-between min-h-[380px] relative overflow-hidden group transition-all'>
            <div className='space-y-6 relative z-10'>
              <span className='text-xs font-mono font-bold tracking-widest text-neutral-400 border-b border-neutral-800 pb-2 block w-full'>
                01.
              </span>
              <h3 className='text-2xl lg:text-3xl font-bold tracking-tight text-white font-sans'>
                What we do
              </h3>
              <p className='text-neutral-400 text-sm lg:text-base leading-relaxed'>
                We maintain this by ensuring transparency and professional conduct in every aspect of structural engineering and urban development.
              </p>
            </div>

            <div className='pt-6 relative z-10 flex items-center justify-between'>
              <Link
                href='/services'
                className='text-xs font-bold text-white uppercase tracking-wider underline underline-offset-4 hover:text-lime-accent transition-colors'
              >
                Our Solutions
              </Link>
              <Link
                href='/services'
                aria-label='Our Solutions'
                className='w-11 h-11 rounded-full bg-[#D4F639] text-neutral-950 flex items-center justify-center font-bold hover:scale-110 transition-transform'
              >
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Card 2: Vibrant Lime Green Card (02. Our impact) */}
          <div className='bg-[#D4F639] text-neutral-950 rounded-[28px] p-8 lg:p-10 flex flex-col justify-between min-h-[380px] relative overflow-hidden group transition-all'>
            <div className='space-y-4 relative z-10'>
              <span className='text-xs font-mono font-bold tracking-widest text-neutral-900 border-b border-neutral-950/20 pb-2 block w-full'>
                02.
              </span>
              <h3 className='text-2xl lg:text-3xl font-bold tracking-tight text-neutral-950 font-sans'>
                Our impact
              </h3>
              <p className='text-neutral-900/80 text-sm lg:text-base leading-relaxed max-w-xs'>
                We work with both investors and developers to create landmarks that make an impact across modern communities.
              </p>
            </div>

            {/* Inset Building Image Graphic */}
            <div className='relative w-full h-28 my-2 rounded-xl overflow-hidden'>
              <Image
                src='/images/slides/slide-1.jpg'
                alt='Our impact architectural showcase'
                fill
                className='object-cover'
              />
            </div>

            <div className='pt-4 relative z-10 flex items-center justify-between'>
              <Link
                href='/projects'
                className='text-xs font-bold text-neutral-950 uppercase tracking-wider underline underline-offset-4 hover:opacity-80 transition-opacity'
              >
                See Projects
              </Link>
              <Link
                href='/projects'
                aria-label='See Projects'
                className='w-11 h-11 rounded-full bg-neutral-950 text-white flex items-center justify-center font-bold hover:scale-110 transition-transform'
              >
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Card 3: Architectural Photo Card (03. Core values) */}
          <div className='bg-[#1A1D1F] text-white rounded-[28px] p-8 lg:p-10 flex flex-col justify-between min-h-[380px] relative overflow-hidden group transition-all'>
            <div className='absolute inset-0 z-0 opacity-25 group-hover:opacity-35 transition-opacity duration-700'>
              <Image
                src='/images/slides/slide-3.jpg'
                alt='Core values background'
                fill
                className='object-cover'
              />
            </div>
            <div className='absolute inset-0 bg-gradient-to-t from-[#1A1D1F] via-[#1A1D1F]/80 to-transparent z-0' />

            <div className='space-y-6 relative z-10'>
              <span className='text-xs font-mono font-bold tracking-widest text-neutral-400 border-b border-neutral-800 pb-2 block w-full'>
                03.
              </span>
              <h3 className='text-2xl lg:text-3xl font-bold tracking-tight text-white font-sans'>
                Core values
              </h3>
              <p className='text-neutral-300 text-sm lg:text-base leading-relaxed'>
                To empower businesses with cutting-edge web and structural solutions that enhance their physical presence and drive long-term value.
              </p>
            </div>

            <div className='pt-6 relative z-10 flex items-center justify-between'>
              <Link
                href='/about'
                className='text-xs font-bold text-white uppercase tracking-wider underline underline-offset-4 hover:text-lime-accent transition-colors'
              >
                Discover More
              </Link>
              <Link
                href='/about'
                aria-label='Discover More'
                className='w-11 h-11 rounded-full bg-[#D4F639] text-neutral-950 flex items-center justify-center font-bold hover:scale-110 transition-transform'
              >
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Tag Pills Carousel Bar */}
        <div className='pt-6 overflow-x-auto no-scrollbar'>
          <div className='flex items-center justify-center gap-4 min-w-max mx-auto'>
            {pillsData.map((pill, idx) => (
              <div
                key={idx}
                className='bg-white rounded-full px-6 py-3 border border-neutral-200/80 flex items-center gap-3 text-sm font-semibold text-neutral-900 hover:border-neutral-400 transition-colors'
              >
                <div className='relative w-8 h-8 rounded-full overflow-hidden shrink-0 bg-neutral-100'>
                  <Image src={pill.image} alt={pill.label} fill className='object-cover' />
                </div>
                <span>{pill.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
