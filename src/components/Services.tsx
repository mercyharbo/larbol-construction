'use client'

import type React from 'react'

import { services } from '@/constants/data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  DollarSign,
  Grid3X3,
  List,
  Search,
  Star,
  TrendingUp,
  Users,
  X,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

// Enhanced service data structure
const enhancedServices = [
  {
    ...services[0],
    category: 'Infrastructure',
    duration: '3-6 months',
    priceRange: '$50K - $500K',
    teamSize: '5-15 people',
    rating: 4.9,
    reviews: 127,
    features: [
      'Site Preparation',
      'Foundation Work',
      'Structural Engineering',
      'Quality Assurance',
    ],
    process: ['Planning', 'Design', 'Construction', 'Inspection'],
    availability: 'Available',
    popular: true,
  },
  {
    ...services[1],
    category: 'Commercial',
    duration: '6-12 months',
    priceRange: '$100K - $2M',
    teamSize: '10-25 people',
    rating: 4.8,
    reviews: 89,
    features: [
      'Architectural Design',
      'Interior Finishing',
      'HVAC Systems',
      'Safety Compliance',
    ],
    process: ['Consultation', 'Planning', 'Construction', 'Handover'],
    availability: 'Available',
    popular: false,
  },
  {
    ...services[2],
    category: 'Residential',
    duration: '2-4 months',
    priceRange: '$25K - $200K',
    teamSize: '3-8 people',
    rating: 4.7,
    reviews: 156,
    features: [
      'Custom Design',
      'Material Selection',
      'Project Management',
      'Warranty',
    ],
    process: ['Design', 'Permits', 'Construction', 'Final Inspection'],
    availability: 'Limited',
    popular: true,
  },
  {
    ...services[3],
    category: 'Infrastructure',
    duration: '1-3 months',
    priceRange: '$15K - $100K',
    teamSize: '2-6 people',
    rating: 4.6,
    reviews: 203,
    features: [
      'Renovation Planning',
      'Demolition',
      'Reconstruction',
      'Finishing',
    ],
    process: ['Assessment', 'Planning', 'Execution', 'Completion'],
    availability: 'Available',
    popular: false,
  },
  {
    ...services[4],
    category: 'Specialized',
    duration: '4-8 months',
    priceRange: '$75K - $1M',
    teamSize: '8-20 people',
    rating: 4.9,
    reviews: 94,
    features: [
      'Green Technology',
      'Energy Efficiency',
      'Sustainable Materials',
      'LEED Certification',
    ],
    process: [
      'Eco-Assessment',
      'Green Design',
      'Sustainable Build',
      'Certification',
    ],
    availability: 'Available',
    popular: true,
  },
  {
    ...services[5],
    category: 'Commercial',
    duration: '1-2 months',
    priceRange: '$10K - $75K',
    teamSize: '2-5 people',
    rating: 4.5,
    reviews: 178,
    features: [
      'Space Planning',
      'Interior Design',
      'Furniture Installation',
      'Lighting',
    ],
    process: ['Consultation', 'Design', 'Installation', 'Final Touches'],
    availability: 'Available',
    popular: false,
  },
]

const categories = [
  'All',
  'Infrastructure',
  'Commercial',
  'Residential',
  'Specialized',
]

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
    budget: '',
    timeline: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    onClose()
  }

  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='p-6 space-y-5'>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl font-bold text-gray-900'>
              Inquire About {service.title}
            </h3>
            <button
              onClick={onClose}
              className='p-2 hover:bg-gray-100 rounded-full transition-colors'
              aria-label='Close form'
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 '>
                Email
              </label>
              <input
                type='email'
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 '>
                Phone
              </label>
              <input
                type='tel'
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 '>
                Budget Range
              </label>
              <select
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
              >
                <option value=''>Select budget range</option>
                <option value='under-25k'>Under $25K</option>
                <option value='25k-100k'>$25K - $100K</option>
                <option value='100k-500k'>$100K - $500K</option>
                <option value='over-500k'>Over $500K</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 '>
                Timeline
              </label>
              <select
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={formData.timeline}
                onChange={(e) =>
                  setFormData({ ...formData, timeline: e.target.value })
                }
              >
                <option value=''>Select timeline</option>
                <option value='asap'>ASAP</option>
                <option value='1-3-months'>1-3 months</option>
                <option value='3-6-months'>3-6 months</option>
                <option value='6-12-months'>6-12 months</option>
                <option value='flexible'>Flexible</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 '>
                Message
              </label>
              <textarea
                rows={4}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Tell us about your project...'
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

export default function EnhancedServices() {
  const container = useRef<HTMLElement>(null)
  const revealRefs = useRef<Array<HTMLElement>>([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedService, setSelectedService] = useState<any>(null)
  const [showInquiryForm, setShowInquiryForm] = useState(false)
  const [animationsPaused, setAnimationsPaused] = useState(false)
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'price'>(
    'popular'
  )

  // Filter and search services
  const filteredServices = enhancedServices
    .filter((service) => {
      const matchesCategory =
        selectedCategory === 'All' || service.category === selectedCategory
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'price':
          return a.priceRange.localeCompare(b.priceRange)
        case 'popular':
        default:
          return b.popular ? 1 : -1
      }
    })

  useGSAP(() => {
    // Header animations
    const headerElements = revealRefs.current.slice(0, 2)
    gsap.fromTo(
      headerElements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerElements[0],
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Service cards animations
    const cardElements = revealRefs.current.slice(2)
    cardElements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotationY: 45,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: 'back.out(1.7)',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top center+=50',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Floating animation for popular badges
    gsap.to('.popular-badge', {
      y: -5,
      duration: 2,
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

  const openServiceDetails = (service: any) => {
    setSelectedService(service)
  }

  const closeServiceDetails = () => {
    setSelectedService(null)
  }

  const openInquiryForm = (service: any) => {
    setSelectedService(service)
    setShowInquiryForm(true)
  }

  const closeInquiryForm = () => {
    setShowInquiryForm(false)
    setSelectedService(null)
  }

  return (
    <section
      ref={container}
      className='bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white w-full relative overflow-hidden py-20 px-5 lg:px-10'
    >
      {/* Background effects */}
      <div className='absolute inset-0 opacity-10'>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-20" />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10' />
      </div>

      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(15)].map((_, i) => (
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

      <div className='container mx-auto px-4 relative z-10 space-y-[3rem]'>
        <div className='text-center space-y-5'>
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'>
            <Zap className='text-yellow-400' size={20} />
            <span className='text-sm font-medium'>Professional Services</span>
          </div>

          <h2
            ref={addToRefs}
            className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent'
          >
            Our Services
          </h2>

          <p
            ref={addToRefs}
            className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8'
          >
            Comprehensive construction solutions designed to bring your vision
            to life with excellence and precision
          </p>

          <div className='max-w-4xl mx-auto space-y-6'>
            <div className='relative'>
              <Search
                className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
                size={20}
              />
              <input
                type='text'
                placeholder='Search services...'
                className='w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className='flex flex-wrap items-center justify-between gap-4'>
              <div className='flex flex-wrap gap-2'>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View controls */}
              <div className='flex items-center gap-4 justify-between w-full lg:w-auto lg:justify-start'>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className='bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm'
                >
                  <option value='popular'>Most Popular</option>
                  <option value='rating'>Highest Rated</option>
                  <option value='price'>Price Range</option>
                </select>

                <div className='flex bg-white/10 rounded-lg p-1'>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${
                      viewMode === 'grid' ? 'bg-blue-600' : 'hover:bg-white/10'
                    }`}
                  >
                    <Grid3X3 size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${
                      viewMode === 'list' ? 'bg-blue-600' : 'hover:bg-white/10'
                    }`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8'
              : 'space-y-6 lg:max-w-7xl lg:mx-auto w-full'
          }
        >
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              ref={addToRefs}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20 ${
                viewMode === 'list'
                  ? 'flex flex-col sm:flex-row gap-4 sm:gap-6'
                  : ''
              }`}
            >
              {service.popular && (
                <div className='popular-badge absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold'>
                  <Award size={12} className='inline mr-1' />
                  Popular
                </div>
              )}

              <div
                className={`absolute top-4 left-4 z-20 px-2 py-1 rounded-full text-xs font-medium ${
                  service.availability === 'Available'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}
              >
                {service.availability}
              </div>

              {/* Image container */}
              <div
                className={`relative overflow-hidden ${
                  viewMode === 'list'
                    ? 'w-full aspect-video sm:w-48 sm:h-32 sm:aspect-auto'
                    : 'h-48'
                }`}
              >
                <Image
                  src={
                    service.imageUrl ||
                    'https://cdn.pixabay.com/photo/2016/02/01/21/15/excavator-1174428_1280.jpg'
                  }
                  alt={service.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/60' />

                {/* Quick action buttons */}
                <div className='absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <button
                    onClick={() => openServiceDetails(service)}
                    className='bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors'
                    aria-label='View details'
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div
                className={`p-6 relative flex-1 space-y-3 ${
                  viewMode === 'list' ? 'flex flex-col justify-between' : ''
                }`}
              >
                <div className='space-y-4'>
                  <div className='flex items-start justify-between'>
                    <div className='space-y-2'>
                      <h3 className='text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300'>
                        {service.title}
                      </h3>
                      <div className='flex items-center gap-4 text-sm text-gray-400 mb-3'>
                        <span className='flex items-center gap-1'>
                          <Star className='text-yellow-400' size={14} />
                          {service.rating} ({service.reviews})
                        </span>
                        <span className='bg-blue-600/20 text-blue-400 px-2 py-1 rounded'>
                          {service.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className='text-gray-300 leading-relaxed group-hover:text-white/90 transition-colors duration-300'>
                    {service.description}
                  </p>

                  <div className='grid grid-cols-2 gap-4 text-sm'>
                    <div className='flex items-center gap-2 text-gray-400'>
                      <Clock size={14} />
                      <span>{service.duration}</span>
                    </div>
                    <div className='flex items-center gap-2 text-gray-400'>
                      <DollarSign size={14} />
                      <span>{service.priceRange}</span>
                    </div>
                    <div className='flex items-center gap-2 text-gray-400'>
                      <Users size={14} />
                      <span>{service.teamSize}</span>
                    </div>
                    <div className='flex items-center gap-2 text-gray-400'>
                      <TrendingUp size={14} />
                      <span>{service.reviews} reviews</span>
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <h4 className='text-sm font-medium text-gray-300'>
                      Key Features:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {service.features
                        .slice(0, 3)
                        .map((feature: string, idx: number) => (
                          <span
                            key={idx}
                            className='bg-white/10 text-gray-300 px-2 py-1 rounded text-xs'
                          >
                            {feature}
                          </span>
                        ))}
                      {service.features.length > 3 && (
                        <span className='text-blue-400 text-xs'>
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className='flex gap-3'>
                  <button
                    onClick={() => openServiceDetails(service)}
                    className='flex-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium'
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => openInquiryForm(service)}
                    className='flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium'
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredServices.length === 0 && (
          <div className='text-center py-16'>
            <div className='text-gray-400 mb-4'>
              <Search size={48} className='mx-auto mb-4 opacity-50' />
              <p className='text-xl'>No services found</p>
              <p className='text-sm'>
                Try adjusting your search or filter criteria
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Service Details Modal */}
      {selectedService && !showInquiryForm && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='relative'>
              <Image
                src={
                  selectedService.imageUrl ||
                  'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_1280.jpg'
                }
                alt={selectedService.title}
                width={600}
                height={300}
                className='w-full h-48 object-cover'
              />
              <button
                onClick={closeServiceDetails}
                className='absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors'
              >
                <X size={20} />
              </button>
            </div>

            <div className='p-6 text-gray-900 space-y-5'>
              <h3 className='text-2xl font-bold'>{selectedService.title}</h3>

              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-gray-50 p-4 rounded-lg space-y-3'>
                  <div className='flex items-center gap-2'>
                    <Clock size={16} className='text-blue-600' />
                    <span className='font-medium'>Duration</span>
                  </div>
                  <p className='text-gray-600'>{selectedService.duration}</p>
                </div>
                <div className='bg-gray-50 p-4 rounded-lg space-y-3'>
                  <div className='flex items-center gap-2'>
                    <DollarSign size={16} className='text-green-600' />
                    <span className='font-medium'>Price Range</span>
                  </div>
                  <p className='text-gray-600'>{selectedService.priceRange}</p>
                </div>
              </div>

              <div className='space-y-5'>
                <h4 className='font-semibold'>Service Process</h4>
                <div className='flex items-center justify-between'>
                  {selectedService.process.map(
                    (step: string, index: number) => (
                      <div
                        key={index}
                        className='flex flex-col items-center gap-2'
                      >
                        <div className='w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>
                          {index + 1}
                        </div>
                        <span className='text-sm text-gray-600 text-center'>
                          {step}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className='space-y-5'>
                <h4 className='font-semibold'>Features Included</h4>
                <div className='grid grid-cols-2 gap-2'>
                  {selectedService.features.map(
                    (feature: string, index: number) => (
                      <div key={index} className='flex items-center gap-2'>
                        <CheckCircle size={16} className='text-green-600' />
                        <span className='text-sm'>{feature}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className='flex gap-4'>
                <button
                  onClick={() => {
                    closeServiceDetails()
                    openInquiryForm(selectedService)
                  }}
                  className='flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium'
                >
                  Get Started
                </button>
                <button
                  onClick={closeServiceDetails}
                  className='px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Form Modal */}
      {showInquiryForm && selectedService && (
        <ServiceInquiryForm
          service={selectedService}
          onClose={closeInquiryForm}
        />
      )}
    </section>
  )
}
