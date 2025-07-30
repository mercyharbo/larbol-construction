'use client'

import type React from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  Award,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Facebook,
  Globe,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Shield,
  Star,
  Twitter,
  User,
  Users,
  Youtube,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    primary: '+234 812 345 6789',
    secondary: '+234 803 456 7890',
    description: 'Call us for immediate assistance',
    color: 'text-green-400',
    bgColor: 'bg-green-400/20',
    borderColor: 'border-green-400/30',
  },
  {
    icon: Mail,
    title: 'Email',
    primary: 'info@larbolconstruction.ng',
    secondary: 'projects@larbolconstruction.ng',
    description: 'Send us your project details',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/20',
    borderColor: 'border-blue-400/30',
  },
  {
    icon: MapPin,
    title: 'Address',
    primary: '123 Construction Avenue',
    secondary: 'Oshogbo, Osun State, Nigeria',
    description: 'Visit our office for consultation',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/20',
    borderColor: 'border-purple-400/30',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    primary: 'Mon - Fri: 8:00 AM - 6:00 PM',
    secondary: 'Sat: 9:00 AM - 4:00 PM',
    description: "We're here when you need us",
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/20',
    borderColor: 'border-yellow-400/30',
  },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/bolaafoo',
    icon: Facebook,
    color: 'hover:text-blue-500',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/olatayoadebola',
    icon: Instagram,
    color: 'hover:text-pink-500',
  },
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-500' },
]

const serviceTypes = [
  'Residential Construction',
  'Commercial Construction',
  'Infrastructure Development',
  'Renovation & Remodeling',
  'Green Construction',
  'Project Management',
  'Consultation Services',
  'Other',
]

const projectBudgets = [
  'Under $50K',
  '$50K - $100K',
  '$100K - $500K',
  '$500K - $1M',
  '$1M - $5M',
  'Over $5M',
  'Consultation Only',
]

const companyStats = [
  { label: 'Projects Completed', value: '500+', icon: Building },
  { label: 'Happy Clients', value: '1000+', icon: Users },
  { label: 'Years Experience', value: '25+', icon: Award },
  { label: 'Team Members', value: '50+', icon: Star },
]

export default function EnhancedContact() {
  const revealRefs = useRef<Array<HTMLElement>>([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  useGSAP(() => {
    gsap.fromTo(
      '.hero-content',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5,
      }
    )

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      // yoyo: true,
      // repeat: -1,
      // stagger: 0.5,
    })
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        budget: '',
        timeline: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 2000)
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <main className='flex flex-col justify-center items-center w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white'>
      <header className='relative flex flex-col justify-center items-center h-screen w-full text-white overflow-hidden'>
        <Image
          src='https://cdn.pixabay.com/photo/2024/05/14/05/38/builder-8760328_1280.jpg'
          alt='Construction contact background'
          fill
          className='object-cover z-[-2]'
          priority
        />

        <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/60 to-black/80 z-[-1]' />

        {/* Floating particles */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className='absolute w-1 h-1 bg-white/30 rounded-full animate-pulse'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className='hero-content text-center z-10 max-w-4xl mx-auto px-4'>
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
            <Phone className='text-blue-400' size={20} />
            <span className='text-sm font-medium'>Get In Touch</span>
          </div>

          <h1 className='text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent'>
            Contact Us
          </h1>

          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
            Ready to start your construction project? Get in touch with our
            expert team for a free consultation
          </p>

          {/* Quick stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
            {companyStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className='text-center'>
                  <div className='w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-2'>
                    <Icon size={20} className='text-blue-400' />
                  </div>
                  <div className='text-2xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-xs text-gray-400'>{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
          <div className='w-6 h-10 border-2 border-white/60 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse' />
          </div>
        </div>
      </header>

      <section className='w-full py-20 relative'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='max-w-6xl mx-auto space-y-5'>
            <div className='text-center mb-16' ref={addToRefs}>
              <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
                <Home className='text-blue-400' size={20} />
                <span className='text-sm font-medium'>Contact Information</span>
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                Get In Touch With Us
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Multiple ways to reach our team. Choose the method that works
                best for you.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={index}
                    ref={addToRefs}
                    className={`floating-element group relative ${info.bgColor} backdrop-blur-sm border ${info.borderColor} rounded-2xl p-6 text-center hover:shadow-2xl hover:shadow-blue-500/20`}
                  >
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />

                    <div className='relative z-10'>
                      <div
                        className={`w-16 h-16 ${info.bgColor} border ${info.borderColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={24} className={info.color} />
                      </div>

                      <h3 className='text-lg font-semibold text-white mb-3'>
                        {info.title}
                      </h3>

                      <div className='space-y-1 mb-3'>
                        <p className='text-gray-300 font-medium'>
                          {info.primary}
                        </p>
                        <p className='text-gray-400 text-sm'>
                          {info.secondary}
                        </p>
                      </div>

                      <p className='text-gray-400 text-xs'>
                        {info.description}
                      </p>

                      {info.title === 'Phone' && (
                        <Link
                          href={`tel:${info.primary}`}
                          className='inline-block mt-3 text-green-400 hover:text-green-300 transition-colors text-sm font-medium'
                        >
                          Call Now
                        </Link>
                      )}

                      {info.title === 'Email' && (
                        <Link
                          href={`mailto:${info.primary}`}
                          className='inline-block mt-3 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium'
                        >
                          Send Email
                        </Link>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div
              className='bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-center'
              ref={addToRefs}
            >
              <div className='flex items-center justify-center gap-2 mb-4'>
                <Shield className='text-red-400' size={24} />
                <h3 className='text-xl font-semibold text-red-400'>
                  24/7 Emergency Contact
                </h3>
              </div>
              <p className='text-gray-300 mb-4'>
                For urgent construction emergencies or safety concerns, contact
                us immediately
              </p>
              <Link
                href='tel:+2348123456789'
                className='inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors'
              >
                <Phone size={20} />
                Emergency Hotline: +234 812 345 6789
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full py-20 bg-slate-800/30 backdrop-blur-sm'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-16'>
              <div ref={addToRefs}>
                <div className='inline-flex items-center gap-2 text-blue-400 text-sm uppercase font-medium mb-4'>
                  <Building size={16} />
                  Get In Touch
                </div>
                <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                  Building Connections, One Project at a Time
                </h2>
                <p className='text-xl text-gray-300 leading-relaxed mb-6'>
                  At Larbol Construction, we value your inquiries and feedback.
                  Whether you're ready to start a project or have questions, our
                  dedicated team is here to assist you.
                </p>
                <p className='text-lg text-gray-300 leading-relaxed mb-8'>
                  Reach out to us today and experience unmatched professionalism
                  and expertise in construction services.
                </p>

                <div className='space-y-4 mb-8'>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-green-600/20 border border-green-500 rounded-full flex items-center justify-center'>
                      <CheckCircle size={16} className='text-green-400' />
                    </div>
                    <span className='text-gray-300'>
                      Free consultation and project assessment
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-blue-600/20 border border-blue-500 rounded-full flex items-center justify-center'>
                      <CheckCircle size={16} className='text-blue-400' />
                    </div>
                    <span className='text-gray-300'>
                      24/7 customer support and emergency services
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-purple-600/20 border border-purple-500 rounded-full flex items-center justify-center'>
                      <CheckCircle size={16} className='text-purple-400' />
                    </div>
                    <span className='text-gray-300'>
                      Licensed, bonded, and fully insured
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-yellow-600/20 border border-yellow-500 rounded-full flex items-center justify-center'>
                      <CheckCircle size={16} className='text-yellow-400' />
                    </div>
                    <span className='text-gray-300'>
                      25+ years of construction experience
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-white mb-4'>
                    Follow Us
                  </h3>
                  <div className='flex gap-4'>
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <Link
                          key={social.name}
                          href={social.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={`w-12 h-12 bg-slate-700/50 hover:bg-slate-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 text-slate-400 ${social.color}`}
                          aria-label={social.name}
                        >
                          <Icon size={20} />
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div ref={addToRefs}>
                <div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8'>
                  <div className='flex items-center gap-2 mb-6'>
                    <MessageSquare className='text-blue-400' size={24} />
                    <h3 className='text-2xl font-bold text-white'>
                      Send Us a Message
                    </h3>
                  </div>

                  {isSubmitted && (
                    <div className='bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6'>
                      <div className='flex items-center gap-2 text-green-400'>
                        <CheckCircle size={20} />
                        <span className='font-medium'>
                          Message sent successfully!
                        </span>
                      </div>
                      <p className='text-green-300 text-sm mt-1'>
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                          <User size={16} className='inline mr-1' />
                          Name *
                        </label>
                        <input
                          type='text'
                          name='name'
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.name ? 'border-red-500' : 'border-slate-600'
                          }`}
                          placeholder='Your full name'
                        />
                        {errors.name && (
                          <p className='text-red-400 text-sm mt-1'>
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                          <Mail size={16} className='inline mr-1' />
                          Email *
                        </label>
                        <input
                          type='email'
                          name='email'
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.email ? 'border-red-500' : 'border-slate-600'
                          }`}
                          placeholder='your.email@example.com'
                        />
                        {errors.email && (
                          <p className='text-red-400 text-sm mt-1'>
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                          <Phone size={16} className='inline mr-1' />
                          Phone
                        </label>
                        <input
                          type='tel'
                          name='phone'
                          value={formData.phone}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                          placeholder='+234 xxx xxx xxxx'
                        />
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                          <Building size={16} className='inline mr-1' />
                          Company
                        </label>
                        <input
                          type='text'
                          name='company'
                          value={formData.company}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                          placeholder='Your company name'
                        />
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                          <Zap size={16} className='inline mr-1' />
                          Service Type
                        </label>
                        <select
                          name='serviceType'
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        >
                          <option value=''>Select a service</option>
                          {serviceTypes.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                          <Globe size={16} className='inline mr-1' />
                          Project Budget
                        </label>
                        <select
                          name='budget'
                          value={formData.budget}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        >
                          <option value=''>Select budget range</option>
                          {projectBudgets.map((budget) => (
                            <option key={budget} value={budget}>
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-300 mb-2'>
                        <Calendar size={16} className='inline mr-1' />
                        Project Timeline
                      </label>
                      <select
                        name='timeline'
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      >
                        <option value=''>When do you want to start?</option>
                        <option value='ASAP'>ASAP</option>
                        <option value='1-3 months'>1-3 months</option>
                        <option value='3-6 months'>3-6 months</option>
                        <option value='6-12 months'>6-12 months</option>
                        <option value='Planning phase'>
                          Still in planning phase
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-300 mb-2'>
                        <MessageSquare size={16} className='inline mr-1' />
                        Message *
                      </label>
                      <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                          errors.message ? 'border-red-500' : 'border-slate-600'
                        }`}
                        placeholder='Tell us about your project requirements, timeline, and any specific needs...'
                      />
                      {errors.message && (
                        <p className='text-red-400 text-sm mt-1'>
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
                    >
                      {isSubmitting ? (
                        <>
                          <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                          <ArrowRight size={20} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full py-20'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12' ref={addToRefs}>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
                Visit Our Office
              </h2>
              <p className='text-gray-300'>
                Located in the heart of Oshogbo, we're easily accessible for
                consultations and meetings
              </p>
            </div>

            <div
              className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center'
              ref={addToRefs}
            >
              <MapPin className='mx-auto mb-4 text-purple-400' size={48} />
              <h3 className='text-xl font-semibold text-white mb-2'>
                Interactive Map Coming Soon
              </h3>
              <p className='text-gray-400 mb-6'>
                We're working on integrating an interactive map to help you find
                us easily
              </p>
              <div className='bg-slate-700/50 rounded-lg p-6'>
                <p className='text-white font-medium mb-2'>
                  123 Construction Avenue
                </p>
                <p className='text-gray-400'>Oshogbo, Osun State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='text-center' ref={addToRefs}>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to Start Building?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Let's discuss your project and turn your construction dreams into
              reality
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                href='tel:+2348123456789'
                className='bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2'
              >
                <Phone size={20} />
                Call Now
                <ArrowRight size={20} />
              </Link>
              <Link
                href='/projects'
                className='border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center gap-2'
              >
                <Building size={20} />
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
