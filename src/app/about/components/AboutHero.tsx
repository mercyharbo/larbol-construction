import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutHero() {
  return (
    <section className='w-full bg-[#F5F4F0] pt-24 pb-16 lg:pt-32 lg:pb-20 border-b border-neutral-300/40'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8'>
        {/* Title Case Badge Pill with mb-4 Gap */}
        <div className='inline-block mb-4'>
          <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/70'>
            About Larbol Construction
          </span>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-end'>
          <div className='lg:col-span-8 space-y-4'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.12] font-sans'>
              Engineered for Longevity. Built for Distinction.
            </h1>
            <p className='text-neutral-600 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl'>
              Larbol Construction Limited is a premier structural engineering and civil development firm. We partner with property developers, institutional investors, and government bodies to build sustainable infrastructure and landmark architecture.
            </p>
          </div>

          <div className='lg:col-span-4 flex justify-start lg:justify-end'>
            <Link
              href='/contact'
              className='inline-flex items-center gap-3 bg-[#121417] hover:bg-neutral-800 text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer group'
            >
              <span>Work With Us</span>
              <div className='w-8 h-8 rounded-full bg-[#D4F639] text-neutral-950 flex items-center justify-center font-bold group-hover:scale-105 transition-transform'>
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
            </Link>
          </div>
        </div>

        {/* Hero Architecture Photo Banner (Zero Shadow) */}
        <div className='relative w-full h-[360px] sm:h-[480px] lg:h-[540px] rounded-[32px] overflow-hidden bg-neutral-900 mt-8'>
          <Image
            src='/images/slides/slide-1.jpg'
            alt='Larbol Construction Architectural Project'
            fill
            priority
            className='object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />
          <div className='absolute bottom-8 left-8 right-8 text-white flex flex-wrap items-center justify-between gap-4'>
            <div className='flex items-center gap-2 text-xs font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20'>
              <span className='w-2 h-2 rounded-full bg-[#D4F639]' />
              HQ: Victoria Island, Lagos
            </div>
            <span className='text-xs font-mono text-neutral-300'>RC: 1742890</span>
          </div>
        </div>
      </div>
    </section>
  )
}
