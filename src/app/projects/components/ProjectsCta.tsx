import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsCta() {
  return (
    <section className='w-full bg-[#F5F4F0] py-20 lg:py-24 border-t border-neutral-300/40'>
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='bg-[#121417] text-white rounded-[32px] p-8 sm:p-12 lg:p-16 space-y-8 relative overflow-hidden'>
          <div className='inline-block'>
            <span className='text-sm font-bold tracking-wide text-[#D4F639] border border-[#D4F639]/30 px-4 py-1.5 rounded-full bg-neutral-900'>
              Partner With Larbol
            </span>
          </div>

          <div className='space-y-4 max-w-3xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-tight'>
              Ready to Construct Your Next High-Value Asset?
            </h2>
            <p className='text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto'>
              From initial architectural concept to structural piling and turnkey asset handover, Larbol Construction brings unmatched engineering discipline.
            </p>
          </div>

          <div className='pt-4 flex flex-wrap items-center justify-center gap-4'>
            <Link
              href='/contact'
              className='inline-flex items-center gap-3 bg-[#D4F639] hover:bg-[#bce226] text-neutral-950 font-bold text-base px-8 py-4 rounded-full transition-all duration-200 cursor-pointer group'
            >
              <span>Schedule Project Evaluation</span>
              <div className='w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center font-bold group-hover:scale-105 transition-transform'>
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
