'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { faqs } from '../data'

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  return (
    <section className='w-full bg-[#F5F4F0] py-20 lg:py-24 border-t border-neutral-300/40'>
      <div className='max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
        {/* Title Case Badge Pill with space-y-4 Gap */}
        <div className='text-center space-y-4 max-w-2xl mx-auto'>
          <div className='inline-block'>
            <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/70'>
              Frequently Asked Questions
            </span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 font-sans'>
            Client Queries & Transparency
          </h2>
        </div>

        <div className='space-y-4'>
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div
                key={idx}
                className='bg-white rounded-[20px] border border-neutral-200/80 overflow-hidden transition-all'
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className='w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none'
                >
                  <span className='text-lg font-bold text-neutral-950 font-sans'>
                    {faq.question}
                  </span>
                  <div className='w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800 shrink-0'>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div className='px-6 pb-6 text-neutral-600 text-base leading-relaxed border-t border-neutral-100 mt-2 pt-4'>
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
