'use client'

import type React from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowDown,
  ArrowRight,
  Award,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  Eye,
  Home,
  Mail,
  MessageCircle,
  PenTool,
  Phone,
  Search,
  Sun,
  Target,
  ThumbsUp,
  PenToolIcon as Tools,
  Users,
  Wrench,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const services = [
  'Proven track record of successful projects',
  'Highly skilled and experienced team',
  'Innovative and sustainable solutions',
  'Client-focused approach',
  'Quality assurance and control',
  'Cost-effective and timely delivery',
  'Safety and compliance standards',
]

const imgurls = [
  'https://cdn.pixabay.com/photo/2016/11/24/20/30/floor-plan-1857175_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/04/02/09/08/bulldozer-2195329_1280.jpg',
]

type ServicesCompProps = {
  servicesData: Array<{
    id: number
    title: string
    description: string
    imageUrl: string
  }>
  contentSections: Array<{
    title: string
    description: string
    icon: string
  }>
  processSteps: Array<{
    title: string
    description: string
    icon: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}

const iconComponents: { [key: string]: React.ElementType } = {
  FaTools: Tools,
  GiMaterialsScience: Target,
  FaHandsHelping: Users,
  FaDollarSign: DollarSign,
  MdOutlineThumbUp: ThumbsUp,
  FaRegClock: Clock,
  FiMessageCircle: MessageCircle,
  FiPenTool: PenTool,
  FiTool: Wrench,
  FiCheckCircle: CheckCircle,
}

interface ServiceInquiryFormProps {
  service: any
  onClose: () => void
}

function ServiceInquiryForm({ service, onClose }: ServiceInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: service?.title || '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Service inquiry submitted:', formData)
    onClose()
  }

  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
      <div className='bg-slate-800 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-slate-700'>
        <div className='p-6'>
          <div className='flex items-center justify-between mb-6'>
            <h3 className='text-xl font-bold text-white'>Service Inquiry</h3>
            <button
              onClick={onClose}
              className='p-2 hover:bg-slate-700 rounded-full transition-colors text-gray-400 hover:text-white'
            >
              <ChevronUp size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-300 mb-1'>
                Name *
              </label>
              <input
                type='text'
                required
                className='w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-300 mb-1'>
                Email *
              </label>
              <input
                type='email'
                required
                className='w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-300 mb-1'>
                Phone
              </label>
              <input
                type='tel'
                className='w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-300 mb-1'>
                Service Interest
              </label>
              <input
                type='text'
                className='w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={formData.serviceType}
                onChange={(e) =>
                  setFormData({ ...formData, serviceType: e.target.value })
                }
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-300 mb-1'>
                Message
              </label>
              <textarea
                rows={4}
                className='w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Tell us about your project requirements...'
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium'
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function EnhancedServicesPage({
  servicesData,
  contentSections,
  processSteps,
  faqs,
}: ServicesCompProps) {
  const revealRefs = useRef<Array<HTMLElement>>([])
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [showInquiryForm, setShowInquiryForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredServices = servicesData.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

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
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    })
  }, [filteredServices])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const openServiceInquiry = (service: any) => {
    setSelectedService(service)
    setShowInquiryForm(true)
  }

  const closeServiceInquiry = () => {
    setShowInquiryForm(false)
    setSelectedService(null)
  }

  return (
    <main className='flex flex-col justify-center items-center w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white'>
      <header className='relative flex flex-col justify-center items-center h-screen w-full text-white overflow-hidden'>
        <Image
          src='https://cdn.pixabay.com/photo/2015/09/29/22/49/blueprint-964629_1280.jpg'
          alt='Construction services background'
          fill
          className='object-cover z-[-2]'
          priority
        />

        <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/60 to-black/80 z-[-1]' />

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
            <Tools className='text-blue-400' size={20} />
            <span className='text-sm font-medium'>Professional Services</span>
          </div>

          <h1 className='text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent'>
            Services
          </h1>

          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
            Comprehensive construction solutions designed to bring your vision
            to life with excellence and precision
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-400 mb-1'>50+</div>
              <div className='text-sm text-gray-400'>Services</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-green-400 mb-1'>25+</div>
              <div className='text-sm text-gray-400'>Years</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-purple-400 mb-1'>
                1000+
              </div>
              <div className='text-sm text-gray-400'>Projects</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-yellow-400 mb-1'>4.9</div>
              <div className='text-sm text-gray-400'>Rating</div>
            </div>
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
          <div className='max-w-6xl mx-auto'>
            <div className='mb-16' ref={addToRefs}>
              <div className='inline-flex items-center gap-2 text-blue-400 text-sm uppercase font-medium mb-4'>
                <Home size={16} />
                Our Services
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                Key Differentiators and Value Proposition
              </h2>
            </div>

            <div className='grid lg:grid-cols-2 gap-16 items-center'>
              <div className='space-y-6' ref={addToRefs}>
                {services.map((service, index) => (
                  <div key={index} className='flex items-center gap-4 group'>
                    <div className='w-8 h-8 bg-blue-600/20 border border-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110'>
                      <Check
                        size={16}
                        className='text-blue-400 group-hover:text-white'
                      />
                    </div>
                    <span className='text-gray-300 group-hover:text-white transition-colors duration-300'>
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              <div className='grid grid-cols-3 gap-4' ref={addToRefs}>
                <div className='col-span-1'>
                  <Image
                    src={imgurls[0] || '/placeholder.svg'}
                    alt='Construction planning'
                    width={500}
                    height={500}
                    className='rounded-2xl object-cover h-full w-full hover:scale-105 transition-transform duration-500'
                    priority
                  />
                </div>
                <div className='col-span-2'>
                  <Image
                    src={imgurls[1] || '/placeholder.svg'}
                    alt='Construction equipment'
                    width={500}
                    height={500}
                    className='rounded-2xl object-cover h-full w-full hover:scale-105 transition-transform duration-500'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full py-20 bg-slate-800/30 backdrop-blur-sm'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16' ref={addToRefs}>
              <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
                <Award className='text-yellow-400' size={20} />
                <span className='text-sm font-medium'>Why Choose Us</span>
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                Why We Stand Out From the Competition
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {contentSections.map((section, index) => {
                const Icon = iconComponents[section.icon] || Tools
                return (
                  <div
                    key={index}
                    ref={addToRefs}
                    className='group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20'
                  >
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />

                    <div className='relative z-10'>
                      <div className='w-16 h-16 bg-blue-600/20 border border-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300'>
                        <Icon
                          size={24}
                          className='text-blue-400 group-hover:text-white'
                        />
                      </div>

                      <h3 className='text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300'>
                        {section.title}
                      </h3>

                      <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                        {section.description}
                      </p>

                      <div className='w-0 h-0.5 bg-blue-500 mx-auto mt-6 group-hover:w-20 transition-all duration-500' />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className='w-full py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16' ref={addToRefs}>
              <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
                <Zap className='text-blue-400' size={20} />
                <span className='text-sm font-medium'>Our Services</span>
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                Crafting Solutions, Building Excellence
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                Our services are designed to bring your vision to life,
                combining expertise, innovation, and reliability to deliver
                exceptional construction solutions that exceed expectations.
              </p>
            </div>

            <div className='mb-12' ref={addToRefs}>
              <div className='relative max-w-md mx-auto'>
                <Search
                  className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
                  size={20}
                />
                <input
                  type='text'
                  placeholder='Search services...'
                  className='w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  ref={addToRefs}
                  className='group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20'
                >
                  <div className='relative h-64 overflow-hidden'>
                    <Image
                      src={service.imageUrl || '/placeholder.svg'}
                      alt={service.title}
                      fill
                      className='object-cover group-hover:scale-110 transition-transform duration-500'
                      priority
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                    <div className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <button
                        onClick={() => openServiceInquiry(service)}
                        className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors'
                      >
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>

                  <div className='p-6'>
                    <h3 className='text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300'>
                      {service.title}
                    </h3>
                    <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                      {service.description}
                    </p>

                    <button
                      onClick={() => openServiceInquiry(service)}
                      className='mt-4 w-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 py-2 rounded-lg transition-colors duration-200 text-sm font-medium'
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='w-full py-20'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16' ref={addToRefs}>
              <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
                <Sun className='text-yellow-400' size={20} />
                <span className='text-sm font-medium'>How It Works</span>
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                From Vision to Reality: How We Build Your Dreams
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
              {processSteps.map((step, index) => {
                const Icon = iconComponents[step.icon] || MessageCircle
                return (
                  <div key={index} ref={addToRefs} className='relative'>
                    <div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 h-full text-center hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20'>
                      <div className='w-14 h-14 bg-blue-600/20 border border-blue-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <Icon size={20} className='text-blue-400' />
                      </div>
                      <h3 className='text-lg font-semibold text-white mb-3'>
                        {step.title}
                      </h3>
                      <p className='text-gray-400 text-sm leading-relaxed'>
                        {step.description}
                      </p>
                    </div>

                    {index !== processSteps.length - 1 && (
                      <div className='hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent' />
                    )}
                  </div>
                )
              })}
            </div>

            <div className='hidden lg:flex justify-center' ref={addToRefs}>
              <div className='flex items-center gap-8'>
                {processSteps.map((_, index) => (
                  <div key={index} className='flex items-center'>
                    <div className='w-10 h-10 bg-blue-600/20 border border-blue-500 rounded-full flex items-center justify-center'>
                      {index === processSteps.length - 1 ? (
                        <ArrowDown className='text-blue-400' size={16} />
                      ) : (
                        <ArrowRight className='text-blue-400' size={16} />
                      )}
                    </div>
                    {index !== processSteps.length - 1 && (
                      <div className='w-16 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 mx-4' />
                    )}
                  </div>
                ))}
              </div>
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
                  <Home size={16} />
                  Frequently Asked Questions
                </div>
                <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                  Everything You Need to Know
                </h2>
                <p className='text-xl text-gray-300 leading-relaxed mb-8'>
                  Find answers to common questions about our services and
                  solutions
                </p>

                <Image
                  src='https://img.freepik.com/free-photo/monochrome-scene-depicting-life-workers-construction-industry-site_23-2151431480.jpg'
                  alt='Construction workers'
                  width={500}
                  height={500}
                  className='object-cover rounded-2xl w-full h-80'
                  priority
                />
              </div>

              <div className='space-y-4'>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    ref={addToRefs}
                    className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden ${
                      activeAccordion === index
                        ? 'border-blue-500/50'
                        : 'hover:border-slate-600'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className='w-full p-6 text-left flex justify-between items-center hover:bg-slate-800/70 transition-colors duration-200'
                    >
                      <h3 className='text-lg font-semibold text-white pr-4'>
                        {faq.question}
                      </h3>
                      <div className='flex-shrink-0'>
                        {activeAccordion === index ? (
                          <ChevronUp className='text-blue-400' size={24} />
                        ) : (
                          <ChevronDown className='text-gray-400' size={24} />
                        )}
                      </div>
                    </button>

                    {activeAccordion === index && (
                      <div className='px-6 pb-6'>
                        <div className='border-t border-slate-700 pt-4'>
                          <p className='text-gray-300 leading-relaxed'>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 mt-8'>
                  <h3 className='text-lg font-semibold text-white mb-2'>
                    Still have questions?
                  </h3>
                  <p className='text-gray-300 mb-4'>
                    Our team is here to help. Contact us for personalized
                    answers to your specific needs.
                  </p>
                  <div className='flex gap-4'>
                    <Link
                      href='/contact'
                      className='inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium'
                    >
                      <Phone size={16} />
                      Call Us
                    </Link>
                    <Link
                      href='mailto:info@larbolconstruction.ng'
                      className='inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium'
                    >
                      <Mail size={16} />
                      Email Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='text-center' ref={addToRefs}>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to Start Your Project?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Get in touch with our team for a free consultation and
              personalized quote
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                href='/contact'
                className='bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2'
              >
                <Phone size={20} />
                Get Free Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                href='/projects'
                className='border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center gap-2'
              >
                <Eye size={20} />
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {showInquiryForm && selectedService && (
        <ServiceInquiryForm
          service={selectedService}
          onClose={closeServiceInquiry}
        />
      )}
    </main>
  )
}
