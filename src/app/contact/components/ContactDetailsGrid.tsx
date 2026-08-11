import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { corporateContactCards } from '../data'

const iconMap = {
  Phone: Phone,
  Mail: Mail,
  MapPin: MapPin,
  Clock: Clock,
}

export default function ContactDetailsGrid() {
  return (
    <section className='w-full bg-[#F5F4F0] py-16 lg:py-20 border-b border-neutral-300/40'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
        
        <div className='text-center space-y-4 max-w-2xl mx-auto'>
          <div className='inline-block'>
            <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/70'>
              Direct Communication
            </span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 font-sans'>
            Corporate Contact Channels
          </h2>
        </div>

        {/* 4-Card Contact Grid (Zero Shadows) */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {corporateContactCards.map((card, idx) => {
            const IconComponent = iconMap[card.iconName as keyof typeof iconMap] || Phone
            return (
              <div
                key={idx}
                className='bg-white rounded-[28px] p-6 lg:p-8 flex flex-col justify-between border border-neutral-200/80 transition-all hover:border-neutral-400 group space-y-6'
              >
                <div className='space-y-4'>
                  <div className='w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-950 group-hover:bg-[#D4F639] transition-colors'>
                    <IconComponent size={22} strokeWidth={2} />
                  </div>

                  <div className='space-y-1'>
                    <h3 className='text-xl font-bold text-neutral-950 font-sans'>
                      {card.title}
                    </h3>
                    <p className='text-xs text-neutral-500 font-medium'>
                      {card.description}
                    </p>
                  </div>

                  <div className='pt-2 space-y-1 text-sm font-bold text-neutral-900 font-sans'>
                    <div>{card.primary}</div>
                    {card.secondary && (
                      <div className='text-neutral-500 font-normal text-xs'>
                        {card.secondary}
                      </div>
                    )}
                  </div>
                </div>

                <div className='pt-4 border-t border-neutral-100'>
                  {card.actionUrl.startsWith('http') || card.actionUrl.startsWith('tel:') || card.actionUrl.startsWith('mailto:') ? (
                    <a
                      href={card.actionUrl}
                      className='inline-flex items-center gap-2 text-xs font-bold text-neutral-950 hover:text-neutral-700 transition-colors group/link'
                    >
                      <span>{card.actionText}</span>
                      <div className='w-6 h-6 rounded-full bg-[#D4F639] text-neutral-950 flex items-center justify-center font-bold group-hover/link:scale-110 transition-transform'>
                        <ArrowUpRight size={14} strokeWidth={2.5} />
                      </div>
                    </a>
                  ) : (
                    <Link
                      href={card.actionUrl}
                      className='inline-flex items-center gap-2 text-xs font-bold text-neutral-950 hover:text-neutral-700 transition-colors group/link'
                    >
                      <span>{card.actionText}</span>
                      <div className='w-6 h-6 rounded-full bg-[#D4F639] text-neutral-950 flex items-center justify-center font-bold group-hover/link:scale-110 transition-transform'>
                        <ArrowUpRight size={14} strokeWidth={2.5} />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
