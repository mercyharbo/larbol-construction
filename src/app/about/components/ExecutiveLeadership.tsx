import Image from 'next/image'
import { executiveTeam } from '../data'

export default function ExecutiveLeadership() {
  return (
    <section className='w-full bg-[#F5F4F0] py-20 lg:py-28 border-t border-neutral-300/40'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14'>
        {/* Title Case Badge Pill with space-y-4 Gap */}
        <div className='text-center space-y-4 max-w-3xl mx-auto'>
          <div className='inline-block'>
            <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/70'>
              Executive Leadership
            </span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-sans'>
            Meet Our Board & Engineering Directors
          </h2>
        </div>

        {/* Board Cards Grid with p-4 Card Padding & Zero Shadow */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {executiveTeam.map((member, idx) => (
            <div
              key={idx}
              className='bg-white rounded-[28px] p-4 flex flex-col justify-between border border-neutral-200/80 transition-all hover:border-neutral-400 group'
            >
              <div className='space-y-4'>
                {/* Executive Image */}
                <div className='relative w-full h-80 rounded-[20px] overflow-hidden bg-neutral-200 border border-neutral-300/60'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className='object-cover object-top group-hover:scale-105 transition-transform duration-500'
                  />
                </div>

                <div className='space-y-2'>
                  <span className='text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full inline-block'>
                    {member.experience} Experience
                  </span>
                  <h3 className='text-xl lg:text-2xl font-bold text-neutral-950 font-sans leading-snug'>
                    {member.name}
                  </h3>
                  <p className='text-xs font-bold text-[#121417] uppercase tracking-wider'>
                    {member.position}
                  </p>
                </div>

                <p className='text-neutral-600 text-sm leading-relaxed'>
                  {member.bio}
                </p>
              </div>

              <div className='pt-6 mt-6 border-t border-neutral-100 text-xs text-neutral-500 font-medium'>
                Specialty:{' '}
                <strong className='text-neutral-900 font-semibold'>
                  {member.specialization}
                </strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
