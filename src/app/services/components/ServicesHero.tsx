import { ArrowUpRight, ShieldCheck, Wrench } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const serviceCategories = [
  'Civil Infrastructure',
  'Commercial Towers',
  'Industrial Logistics',
  'Green Architecture',
]

export default function ServicesHero() {
  return (
    <section className='w-full bg-[#F5F4F0] pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-neutral-300/40 overflow-hidden'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Asymmetric 2-Column Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>
          
          {/* Left Column: Copy & Interactive Category Pills */}
          <div className='lg:col-span-6 space-y-6'>
            
            {/* Title Case Badge Pill with mb-4 Gap */}
            <div className='inline-block mb-2'>
              <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/80'>
                Services & Capabilities
              </span>
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.1] font-sans'>
              Engineering Infrastructure. <br className='hidden sm:inline' />
              Shaping Horizons.
            </h1>

            <p className='text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal'>
              Larbol Construction delivers turnkey structural solutions across Nigeria. From arterial highway networks and bridge foundation piling to multi-family commercial towers and sustainable green developments.
            </p>

            {/* Service Category Pills Bar */}
            <div className='pt-2 flex flex-wrap gap-2.5'>
              {serviceCategories.map((cat, idx) => (
                <span
                  key={idx}
                  className='text-xs font-mono font-semibold text-neutral-800 bg-white border border-neutral-300/80 px-3.5 py-1.5 rounded-full'
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Primary Action Button */}
            <div className='pt-4'>
              <Link
                href='/contact'
                className='inline-flex items-center gap-3 bg-[#121417] hover:bg-neutral-800 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 cursor-pointer group'
              >
                <span>Request BOQ Proposal</span>
                <div className='w-8 h-8 rounded-full bg-[#D4F639] text-neutral-950 flex items-center justify-center font-bold group-hover:scale-105 transition-transform'>
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Staggered 2-Card Photo Showcase Frame (Zero Shadow) */}
          <div className='lg:col-span-6 relative'>
            <div className='grid grid-cols-12 gap-4 relative'>
              
              {/* Primary Large Card */}
              <div className='col-span-8 relative h-[380px] sm:h-[460px] rounded-[32px] overflow-hidden bg-neutral-900 border border-neutral-300/80'>
                <Image
                  src='/images/slides/slide-2.jpg'
                  alt='Larbol Highway & Bridge Infrastructure'
                  fill
                  priority
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
                <div className='absolute bottom-6 left-6 right-6 text-white space-y-1'>
                  <div className='flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md px-3 py-1 rounded-full w-fit border border-white/20 text-[#D4F639]'>
                    <ShieldCheck size={14} />
                    COREN Certified
                  </div>
                  <h3 className='text-lg font-bold text-white font-sans'>
                    Civil Highway Piling
                  </h3>
                </div>
              </div>

              {/* Secondary Staggered Card */}
              <div className='col-span-4 self-end relative h-[280px] sm:h-[340px] rounded-[28px] overflow-hidden bg-neutral-900 border border-neutral-300/80 -mb-6'>
                <Image
                  src='/images/slides/slide-1.jpg'
                  alt='Larbol Commercial Tower Construction'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent' />
                <div className='absolute bottom-4 left-4 right-4 text-white text-xs font-mono font-bold space-y-1'>
                  <div className='text-[#D4F639] text-sm font-sans font-black'>250+</div>
                  <div className='text-[10px] text-neutral-300 font-normal leading-tight'>Completed Assets</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
