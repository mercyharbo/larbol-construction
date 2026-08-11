import { processSteps } from '../data'

export default function EngineeringProcess() {
  return (
    <section className='w-full bg-[#121417] text-white py-20 lg:py-28 border-t border-neutral-800'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14'>
        {/* Title Case Badge Pill with space-y-4 Gap */}
        <div className='text-center space-y-4 max-w-3xl mx-auto'>
          <div className='inline-block'>
            <span className='text-sm font-bold tracking-wide text-[#D4F639] border border-[#D4F639]/30 px-4 py-1.5 rounded-full bg-neutral-900'>
              Our Execution Methodology
            </span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans'>
            From Architectural Blueprint to Project Handover
          </h2>
        </div>

        {/* 4 Step Process Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className='bg-neutral-900 border border-neutral-800 rounded-[24px] p-6 lg:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-neutral-700 transition-colors'
            >
              <div className='space-y-4'>
                <div className='text-xs font-mono font-bold text-[#D4F639] bg-[#D4F639]/10 px-3 py-1 rounded-full inline-block border border-[#D4F639]/20'>
                  STAGE {step.number}
                </div>
                <h3 className='text-xl font-bold text-white font-sans leading-snug'>
                  {step.title}
                </h3>
                <p className='text-neutral-400 text-sm leading-relaxed'>
                  {step.description}
                </p>
              </div>

              <div className='pt-4 border-t border-neutral-800 text-[11px] font-mono text-neutral-500 uppercase tracking-widest'>
                Phase {idx + 1} Milestone
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
