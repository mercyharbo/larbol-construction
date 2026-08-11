'use client'

import { ArrowUpRight, CheckCircle2, Send } from 'lucide-react'
import type React from 'react'
import { useState } from 'react'
import { projectTimelineOptions, serviceCategoryOptions } from '../data'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceCategory: serviceCategoryOptions[0],
    timeline: projectTimelineOptions[0],
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate clean form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section className='w-full bg-[#F5F4F0] py-20 lg:py-28'>
      <div className='max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
        
        {/* Section Header */}
        <div className='text-center space-y-4 max-w-2xl mx-auto'>
          <div className='inline-block'>
            <span className='text-sm font-bold tracking-wide text-neutral-700 border border-neutral-300 px-4 py-1.5 rounded-full bg-white/70'>
              Consultation Request
            </span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-sans'>
            Request a Project Proposal & BOQ Assessment
          </h2>
          <p className='text-neutral-600 text-base leading-relaxed'>
            Fill out your project parameters below. Our principal engineers will review your specs and contact you within 24 hours.
          </p>
        </div>

        {/* Form Container Card (Zero Shadow) */}
        <div className='bg-white rounded-[32px] p-8 sm:p-12 border border-neutral-200/80'>
          {submitted ? (
            <div className='py-12 text-center space-y-6 max-w-lg mx-auto'>
              <div className='w-16 h-16 rounded-full bg-[#D4F639] text-neutral-950 flex items-center justify-center mx-auto'>
                <CheckCircle2 size={36} strokeWidth={2.5} />
              </div>
              <div className='space-y-2'>
                <h3 className='text-2xl font-bold text-neutral-950 font-sans'>
                  Proposal Request Submitted!
                </h3>
                <p className='text-neutral-600 text-base leading-relaxed'>
                  Thank you, <strong>{formData.name}</strong>. Our engineering procurement team has received your project details and will be in touch shortly.
                </p>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    serviceCategory: serviceCategoryOptions[0],
                    timeline: projectTimelineOptions[0],
                    message: '',
                  })
                }}
                className='inline-flex items-center gap-2 bg-[#121417] text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer'
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                
                {/* Name */}
                <div className='space-y-2'>
                  <label className='block text-xs font-bold text-neutral-900 uppercase tracking-wider'>
                    Full Name *
                  </label>
                  <input
                    type='text'
                    required
                    placeholder='e.g. Afolabi Adebola'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className='w-full bg-[#F5F4F0] border border-neutral-300/80 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors'
                  />
                </div>

                {/* Email */}
                <div className='space-y-2'>
                  <label className='block text-xs font-bold text-neutral-900 uppercase tracking-wider'>
                    Corporate Email *
                  </label>
                  <input
                    type='email'
                    required
                    placeholder='e.g. adebola@horizonproperties.com'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className='w-full bg-[#F5F4F0] border border-neutral-300/80 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors'
                  />
                </div>

                {/* Phone */}
                <div className='space-y-2'>
                  <label className='block text-xs font-bold text-neutral-900 uppercase tracking-wider'>
                    Phone Number *
                  </label>
                  <input
                    type='tel'
                    required
                    placeholder='+234 803 000 0000'
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className='w-full bg-[#F5F4F0] border border-neutral-300/80 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors'
                  />
                </div>

                {/* Company / Organization */}
                <div className='space-y-2'>
                  <label className='block text-xs font-bold text-neutral-900 uppercase tracking-wider'>
                    Company / Organization
                  </label>
                  <input
                    type='text'
                    placeholder='e.g. Horizon Property Developments'
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className='w-full bg-[#F5F4F0] border border-neutral-300/80 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors'
                  />
                </div>

                {/* Service Category */}
                <div className='space-y-2'>
                  <label className='block text-xs font-bold text-neutral-900 uppercase tracking-wider'>
                    Service Scope *
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className='w-full bg-[#F5F4F0] border border-neutral-300/80 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 transition-colors cursor-pointer'
                  >
                    {serviceCategoryOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Expected Timeline */}
                <div className='space-y-2'>
                  <label className='block text-xs font-bold text-neutral-900 uppercase tracking-wider'>
                    Project Execution Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className='w-full bg-[#F5F4F0] border border-neutral-300/80 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 transition-colors cursor-pointer'
                  >
                    {projectTimelineOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Message / Project Description */}
              <div className='space-y-2'>
                <label className='block text-xs font-bold text-neutral-900 uppercase tracking-wider'>
                  Project Specifications & Location Details *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder='Describe your project scope, location, site condition, or BOQ requirements...'
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className='w-full bg-[#F5F4F0] border border-neutral-300/80 rounded-xl p-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors resize-none'
                />
              </div>

              {/* Submit Button */}
              <div className='pt-2 text-center sm:text-right'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='inline-flex items-center gap-3 bg-[#121417] hover:bg-neutral-800 text-white font-bold text-sm px-8 py-4 rounded-full transition-all cursor-pointer group disabled:opacity-50'
                >
                  <span>{isSubmitting ? 'Submitting Proposal...' : 'Submit Consultation Request'}</span>
                  <div className='w-7 h-7 rounded-full bg-[#D4F639] text-neutral-950 flex items-center justify-center font-bold group-hover:scale-110 transition-transform'>
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </div>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  )
}
