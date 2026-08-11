import { companyStats } from '../data'

export default function PerformanceStats() {
  return (
    <section className='w-full bg-neutral-950 text-white py-20 lg:py-24 relative overflow-hidden'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 text-center'>
        {/* Title Case Badge Pill with mb-6 Gap */}
        <div className='mb-6'>
          <span className='text-sm font-mono font-bold tracking-wide text-[#D4F639] border border-[#D4F639]/30 px-4 py-1.5 rounded-full bg-neutral-900'>
            Our Performance Track Record
          </span>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-start justify-center'>
          {companyStats.map((stat, idx) => (
            <div key={idx} className='space-y-2 text-center'>
              <div className='text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans'>
                {stat.value}
              </div>
              <div className='text-xs sm:text-sm font-medium text-neutral-400 uppercase tracking-wider leading-snug max-w-[160px] mx-auto'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
