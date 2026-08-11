import { ArrowUpRight, Building2, HardHat, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const heroHighlights = [
  {
    title: 'Ikoyi Landmark Tower',
    category: 'Commercial Tower',
    location: 'Ikoyi, Lagos',
    image: '/images/slides/slide-1.jpg',
  },
  {
    title: 'Lekki Coastal Expressway',
    category: 'Civil Infrastructure',
    location: 'Lekki, Lagos',
    image: '/images/slides/slide-2.jpg',
  },
  {
    title: 'VI Eco Architecture Hub',
    category: 'Green Architecture',
    location: 'Victoria Island, Lagos',
    image: '/images/slides/slide-5.jpg',
  },
]

export default function ProjectsHero() {
  return (
    <section className='w-full bg-[#F5F4F0] pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-neutral-300/40'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center'>
        
        {/* Top Header & Title Case Badge Pill with mb-4 Gap */}
        <div className='max-w-4xl mx-auto space-y-4'>
          <div className='inline-block mb-2'>
            <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/80'>
              Projects & Portfolio
            </span>
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.12] font-sans'>
            Landmark Infrastructure. Masterpiece Developments.
          </h1>

          <p className='text-neutral-600 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto'>
            A curated showcase of commercial towers, highway flyovers, industrial parks, and luxury waterfront estates engineered by Larbol Construction Limited across Nigeria.
          </p>

          <div className='pt-2 flex flex-wrap items-center justify-center gap-4'>
            <Link
              href='/contact'
              className='inline-flex items-center gap-3 bg-[#121417] hover:bg-neutral-800 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 cursor-pointer group'
            >
              <span>Discuss Your Project Scope</span>
              <div className='w-8 h-8 rounded-full bg-[#D4F639] text-neutral-950 flex items-center justify-center font-bold group-hover:scale-105 transition-transform'>
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
            </Link>
          </div>
        </div>

        {/* 3-Card Side-by-Side Architectural Gallery Showcase Grid (Zero Shadow) */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-4'>
          {heroHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className='relative h-[320px] sm:h-[380px] rounded-[28px] overflow-hidden bg-neutral-900 border border-neutral-300/80 group'
            >
              <Image
                src={highlight.image}
                alt={highlight.title}
                fill
                priority={idx === 0}
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />

              <div className='absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[11px] font-mono font-bold text-[#D4F639] uppercase tracking-wider'>
                {highlight.category}
              </div>

              <div className='absolute bottom-6 left-6 right-6 text-left text-white space-y-1'>
                <div className='flex items-center gap-1.5 text-[11px] font-mono text-neutral-300'>
                  <MapPin size={12} className='text-[#D4F639]' />
                  <span>{highlight.location}</span>
                </div>
                <h3 className='text-xl font-bold text-white font-sans leading-snug'>
                  {highlight.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Coverage Bar */}
        <div className='pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-neutral-500'>
          <span className='font-bold uppercase text-neutral-700'>Regional Execution Coverage:</span>
          <span className='bg-white px-3.5 py-1.5 rounded-full border border-neutral-300 text-neutral-900 font-semibold'>Lagos</span>
          <span className='bg-white px-3.5 py-1.5 rounded-full border border-neutral-300 text-neutral-900 font-semibold'>Abuja</span>
          <span className='bg-white px-3.5 py-1.5 rounded-full border border-neutral-300 text-neutral-900 font-semibold'>Port Harcourt</span>
        </div>

      </div>
    </section>
  )
}
