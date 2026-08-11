import { ShieldCheck } from 'lucide-react'
import Image from 'next/image'

export default function ContactHero() {
  return (
    <section className='w-full bg-[#F5F4F0] pt-24 pb-16 lg:pt-32 lg:pb-20 border-b border-neutral-300/40'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8'>
        {/* Title Case Badge Pill with mb-4 Gap */}
        <div className='inline-block mb-4'>
          <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/70'>
            Get In Touch
          </span>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-end'>
          <div className='lg:col-span-8 space-y-4'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.12] font-sans'>
              Let&apos;s Construct Your Next Vision.
            </h1>
            <p className='text-neutral-600 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl'>
              Partner with Larbol Construction Limited. Our engineering team is ready to evaluate your site, audit your Bill of Quantities (BOQ), and execute your development.
            </p>
          </div>

          <div className='lg:col-span-4 flex items-center justify-start lg:justify-end gap-3 text-xs font-mono text-neutral-600'>
            <div className='flex items-center gap-2 bg-white border border-neutral-300 px-4 py-2.5 rounded-full'>
              <ShieldCheck size={16} className='text-neutral-950' />
              <span>COREN Certified & CAC Registered</span>
            </div>
          </div>
        </div>

        {/* Hero Photo Banner (Zero Shadow) */}
        <div className='relative w-full h-[320px] sm:h-[420px] lg:h-[460px] rounded-[32px] overflow-hidden bg-neutral-900 mt-8 border border-neutral-300/80'>
          <Image
            src='/images/slides/slide-4.jpg'
            alt='Larbol Construction Engineering Office & Project Site'
            fill
            priority
            className='object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
          
          <div className='absolute bottom-8 left-8 right-8 text-white flex flex-wrap items-center justify-between gap-4'>
            <div className='flex items-center gap-2 text-xs font-mono bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/20'>
              <span className='w-2 h-2 rounded-full bg-[#D4F639]' />
              Headquarters: Victoria Island, Lagos
            </div>
            <span className='text-xs font-mono text-neutral-300'>RC: 1742890</span>
          </div>
        </div>
      </div>
    </section>
  )
}
