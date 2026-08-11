import { ArrowUpRight } from 'lucide-react'
import { missionPillars } from '../data'

export default function MissionPillars() {
  return (
    <section className='w-full bg-[#F5F4F0] py-20 lg:py-28'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14'>
        {/* Title Case Badge Pill with space-y-4 Gap */}
        <div className='text-center space-y-4 max-w-3xl mx-auto'>
          <div className='inline-block'>
            <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/70'>
              Our Foundational Pillars
            </span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-sans'>
            How We Execute Structural Excellence
          </h2>
        </div>

        {/* Spaciaz 3-Card Grid (Zero Shadow) */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch'>
          {missionPillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`${pillar.bg} rounded-[28px] p-8 lg:p-10 flex flex-col justify-between min-h-[380px] relative overflow-hidden transition-all group`}
            >
              <div className='space-y-6 relative z-10'>
                <span className='text-xs font-mono font-bold tracking-widest opacity-60 border-b border-current/20 pb-2 block w-full'>
                  {pillar.number}
                </span>
                <h3 className='text-2xl lg:text-3xl font-bold tracking-tight font-sans'>
                  {pillar.title}
                </h3>
                <p className='opacity-80 text-sm lg:text-base leading-relaxed'>
                  {pillar.description}
                </p>
              </div>

              <div className='pt-6 relative z-10 flex items-center justify-between'>
                <span className='text-xs font-bold uppercase tracking-wider opacity-90'>
                  Core Standard
                </span>
                <div
                  className={`w-11 h-11 rounded-full ${pillar.accentBtn} flex items-center justify-center font-bold group-hover:scale-110 transition-transform`}
                >
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
