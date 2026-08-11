import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { servicesList } from '../data'

export default function ServicesGrid() {
  return (
    <section className='w-full bg-[#F5F4F0] py-20 lg:py-28'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14'>
        {/* Section Header */}
        <div className='text-center space-y-4 max-w-3xl mx-auto'>
          <div className='inline-block'>
            <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/70'>
              Comprehensive Portfolio
            </span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-sans'>
            Engineered Services for Capital Infrastructure
          </h2>
        </div>

        {/* 6-Card Services Grid (Zero Shadows) */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {servicesList.map((service) => (
            <div
              key={service.id}
              className='bg-white rounded-[28px] p-6 flex flex-col justify-between border border-neutral-200/80 transition-all hover:border-neutral-400 group'
            >
              <div className='space-y-6'>
                {/* Service Image Card Header */}
                <div className='relative w-full h-56 rounded-[20px] overflow-hidden bg-neutral-900 border border-neutral-200'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[11px] font-mono font-bold text-[#D4F639] uppercase tracking-wider'>
                    {service.category}
                  </div>
                  <div className='absolute bottom-4 right-4 text-white text-xs font-mono font-bold bg-black/70 px-2.5 py-1 rounded-md'>
                    {service.number}
                  </div>
                </div>

                <div className='space-y-3'>
                  <h3 className='text-xl lg:text-2xl font-bold text-neutral-950 font-sans leading-snug'>
                    {service.title}
                  </h3>
                  <p className='text-neutral-600 text-sm leading-relaxed'>
                    {service.description}
                  </p>
                </div>

                {/* Features Bullet List */}
                <ul className='space-y-2 pt-2 border-t border-neutral-100'>
                  {service.features.map((feat, idx) => (
                    <li key={idx} className='flex items-center gap-2.5 text-xs text-neutral-700 font-medium'>
                      <CheckCircle2 size={15} className='text-[#121417] shrink-0' />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between'>
                <span className='text-xs font-bold text-neutral-500 uppercase tracking-wider'>
                  Contract Scope
                </span>
                <Link
                  href='/contact'
                  className='inline-flex items-center gap-2 text-xs font-bold text-neutral-950 hover:text-neutral-700 transition-colors group/link'
                >
                  <span>Enquire Now</span>
                  <div className='w-7 h-7 rounded-full bg-[#D4F639] text-neutral-950 flex items-center justify-center font-bold group-hover/link:scale-110 transition-transform'>
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
