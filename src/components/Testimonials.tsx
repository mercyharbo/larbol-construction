'use client'

import type React from 'react'

import { testimonials } from '@/constants/data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Award,
  Building,
  Camera,
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid3X3,
  Heart,
  List,
  MapPin,
  Plus,
  Quote,
  Share2,
  Star,
  TrendingUp,
  Verified,
  Video,
  X
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

// Enhanced testimonial data structure
const enhancedTestimonials = [
  {
    ...testimonials[0],
    id: 1,
    rating: 5,
    avatar: '/placeholder.svg?height=80&width=80',
    position: 'CEO',
    company: 'Tech Innovations Inc.',
    location: 'New York, NY',
    date: '2024-01-15',
    projectType: 'Commercial',
    verified: true,
    featured: true,
    images: [
      '/placeholder.svg?height=200&width=300',
      '/placeholder.svg?height=200&width=300',
    ],
    videoUrl: null,
    likes: 24,
    helpful: 18,
  },
  {
    ...testimonials[1],
    id: 2,
    rating: 5,
    avatar: '/placeholder.svg?height=80&width=80',
    position: 'Homeowner',
    company: 'Private Residence',
    location: 'Los Angeles, CA',
    date: '2024-01-10',
    projectType: 'Residential',
    verified: true,
    featured: false,
    images: ['/placeholder.svg?height=200&width=300'],
    videoUrl: '/placeholder-video.mp4',
    likes: 31,
    helpful: 25,
  },
  {
    ...testimonials[2],
    id: 3,
    rating: 4,
    avatar: '/placeholder.svg?height=80&width=80',
    position: 'Project Manager',
    company: 'Urban Development Corp',
    location: 'Chicago, IL',
    date: '2024-01-05',
    projectType: 'Infrastructure',
    verified: true,
    featured: true,
    images: [],
    videoUrl: null,
    likes: 19,
    helpful: 14,
  },
  {
    ...testimonials[0],
    id: 4,
    rating: 5,
    avatar: '/placeholder.svg?height=80&width=80',
    position: 'Facilities Director',
    company: 'Healthcare Systems',
    location: 'Miami, FL',
    date: '2023-12-28',
    projectType: 'Commercial',
    verified: true,
    featured: false,
    images: [
      '/placeholder.svg?height=200&width=300',
      '/placeholder.svg?height=200&width=300',
    ],
    videoUrl: null,
    likes: 42,
    helpful: 33,
  },
  {
    ...testimonials[1],
    id: 5,
    rating: 5,
    avatar: '/placeholder.svg?height=80&width=80',
    position: 'Property Owner',
    company: 'Residential Client',
    location: 'Seattle, WA',
    date: '2023-12-20',
    projectType: 'Residential',
    verified: false,
    featured: false,
    images: [],
    videoUrl: '/placeholder-video.mp4',
    likes: 16,
    helpful: 12,
  },
  {
    ...testimonials[2],
    id: 6,
    rating: 4,
    avatar: '/placeholder.svg?height=80&width=80',
    position: 'Operations Manager',
    company: 'Manufacturing Co.',
    location: 'Detroit, MI',
    date: '2023-12-15',
    projectType: 'Industrial',
    verified: true,
    featured: false,
    images: ['/placeholder.svg?height=200&width=300'],
    videoUrl: null,
    likes: 28,
    helpful: 21,
  },
]

const projectTypes = [
  'All',
  'Commercial',
  'Residential',
  'Infrastructure',
  'Industrial',
]

interface TestimonialSubmissionFormProps {
  onClose: () => void
}

function TestimonialSubmissionForm({
  onClose,
}: TestimonialSubmissionFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    location: '',
    projectType: '',
    rating: 5,
    testimonial: '',
    images: [] as File[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Testimonial submitted:', formData)
    onClose()
  }

  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='p-6'>
          <div className='flex items-center justify-between'>
            <h3 className='text-2xl font-bold text-gray-900'>
              Share Your Experience
            </h3>
            <button
              onClick={onClose}
              className='p-2 hover:bg-gray-100 rounded-full transition-colors'
              aria-label='Close form'
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Name *
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
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Email *
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
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Company
                </label>
                <input
                  type='text'
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Position
                </label>
                <input
                  type='text'
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                />
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Location
                </label>
                <input
                  type='text'
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Project Type
                </label>
                <select
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                >
                  <option value=''>Select project type</option>
                  {projectTypes.slice(1).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Rating *
              </label>
              <div className='flex gap-1'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type='button'
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className={`p-1 ${
                      star <= formData.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  >
                    <Star
                      size={24}
                      fill={star <= formData.rating ? 'currentColor' : 'none'}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Your Testimonial *
              </label>
              <textarea
                required
                rows={4}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Share your experience working with us...'
                value={formData.testimonial}
                onChange={(e) =>
                  setFormData({ ...formData, testimonial: e.target.value })
                }
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Project Images (Optional)
              </label>
              <div className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors'>
                <Camera size={32} className='mx-auto text-gray-400 mb-2' />
                <p className='text-sm text-gray-600'>
                  Click to upload project images
                </p>
                <input
                  type='file'
                  multiple
                  accept='image/*'
                  className='hidden'
                />
              </div>
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium'
            >
              Submit Testimonial
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function EnhancedTestimonials() {
  const container = useRef<HTMLElement>(null)
  const revealRefs = useRef<Array<HTMLElement>>([])
  const carouselRef = useRef<HTMLDivElement>(null)
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [showSubmissionForm, setShowSubmissionForm] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null)

  // Filter testimonials
  const filteredTestimonials = enhancedTestimonials.filter((testimonial) => {
    return (
      selectedFilter === 'All' || testimonial.projectType === selectedFilter
    )
  })

  // Featured testimonials for carousel
  const featuredTestimonials = enhancedTestimonials.filter((t) => t.featured)

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

    // Testimonial cards animations
    const cardElements = revealRefs.current.slice(2)
    cardElements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
          rotationX: 45,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
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

    // Floating animation for quote icons
    gsap.to('.quote-icon', {
      y: -10,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    })
  }, [filteredTestimonials])

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || viewMode !== 'carousel') return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, viewMode, featuredTestimonials.length])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length
    )
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }
      />
    ))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <section
      ref={container}
      className='bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 w-full text-white relative overflow-hidden py-20 px-5 lg:px-10'
    >
   
      <div className='absolute inset-0 opacity-10'>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-20" />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10' />
      </div>

   
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

      <div className='container mx-auto px-4 relative z-10 space-y-[3rem]'>
        {/* Enhanced header */}
        <div className='text-center space-y-5 '>
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full '>
            <Award className='text-yellow-400' size={20} />
            <span className='text-sm font-medium'>Client Testimonials</span>
          </div>

          <h2
            ref={addToRefs}
            className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent'
          >
            What Our Clients Say
          </h2>

          <p
            ref={addToRefs}
            className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8'
          >
            Discover why our clients trust Larbol Construction for their
            projects. Read firsthand experiences from satisfied customers who
            have witnessed our commitment to quality, reliability, and
            exceptional service.
          </p>

          {/* Statistics */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto space-y-5'>
            <div className='text-center space-y-2'>
              <h3 className='text-3xl font-bold text-blue-400'>4.8</h3>
              <span className='text-sm text-gray-400'>Average Rating</span>
            </div>
            <div className='text-center space-y-2'>
              <h3 className='text-3xl font-bold text-green-400'>500+</h3>
              <span className='text-sm text-gray-400'>Happy Clients</span>
            </div>
            <div className='text-center space-y-2'>
              <h3 className='text-3xl font-bold text-purple-400'>98%</h3>
              <span className='text-sm text-gray-400'>Satisfaction Rate</span>
            </div>
            <div className='text-center space-y-2'>
              <h3 className='text-3xl font-bold text-yellow-400'>10+</h3>
              <span className='text-sm text-gray-400'>Reviews</span>
            </div>
          </div>

          {/* Controls */}
          <div className='flex flex-wrap items-center justify-center gap-4'>
            {/* Filter buttons */}
            <div className='flex flex-wrap gap-2'>
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedFilter(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedFilter === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* View mode toggle */}
            <div className='flex bg-white/10 rounded-lg p-1'>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 rounded text-sm flex items-center gap-1 ${
                  viewMode === 'grid' ? 'bg-blue-600' : 'hover:bg-white/10'
                }`}
              >
                <Grid3X3 size={16} className='inline' />
                Grid
              </button>
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-3 py-2 rounded text-sm flex items-center gap-1 ${
                  viewMode === 'carousel' ? 'bg-blue-600' : 'hover:bg-white/10'
                }`}
              >
                <List size={16} className='inline' />
                Carousel
              </button>
            </div>

            {/* Add testimonial button */}
            <button
              onClick={() => setShowSubmissionForm(true)}
              className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2'
            >
              <Plus size={16} />
              Share Your Experience
            </button>
          </div>
        </div>

        {/* Carousel View */}
        {viewMode === 'carousel' && (
          <div className='relative max-w-4xl mx-auto mb-16'>
            <div ref={carouselRef} className='overflow-hidden rounded-2xl'>
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredTestimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className='w-full flex-shrink-0 p-8 bg-white/5 backdrop-blur-sm'
                  >
                    <div className='text-center max-w-3xl mx-auto space-y-5'>
                      <Quote
                        className='quote-icon mx-auto text-blue-400'
                        size={48}
                      />
                      <blockquote className='text-2xl font-light leading-relaxed'>
                        "{testimonial.text}"
                      </blockquote>
                      <div className='flex items-center justify-center gap-4'>
                        <Image
                          src={testimonial.avatar || '/placeholder.svg'}
                          alt={testimonial.author}
                          width={60}
                          height={60}
                          className='rounded-full'
                        />
                        <div className='text-left space-y-2'>
                          <div className='font-semibold text-lg'>
                            {testimonial.author}
                          </div>
                          <div className='text-gray-400 text-sm'>
                            {testimonial.position} at {testimonial.company}
                          </div>
                          <div className='flex items-center gap-2'>
                            <div className='flex'>
                              {renderStars(testimonial.rating)}
                            </div>
                            {testimonial.verified && (
                              <Verified className='text-blue-400' size={16} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel controls */}
            <button
              onClick={prevSlide}
              className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors'
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors'
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel indicators */}
            <div className='flex justify-center gap-2 mt-6'>
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index
                      ? 'bg-blue-400 w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

           
            {/* <div className='flex justify-center '>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className='flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors'
              >
                {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                {isAutoPlaying ? 'Pause' : 'Play'}
              </button>
            </div> */}
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8'>
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={addToRefs}
                className='group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20'
              >
                {/* Featured badge */}
                {testimonial.featured && (
                  <div className='absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold'>
                    Featured
                  </div>
                )}

                {/* Video indicator */}
                {testimonial.videoUrl && (
                  <div className='absolute top-4 left-4 z-20 bg-red-600 text-white p-2 rounded-full'>
                    <Video size={16} />
                  </div>
                )}

                <div className='p-6 space-y-5'>
              
                  <div className='flex items-start gap-4'>
                    <Image
                      src={testimonial.avatar || '/placeholder.svg'}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className='rounded-full flex-shrink-0'
                    />
                    <div className='flex-1 min-w-0 space-y-2'>
                      <div className='flex items-center gap-2'>
                        <h3 className='font-semibold text-white truncate'>
                          {testimonial.author}
                        </h3>
                        {testimonial.verified && (
                          <Verified
                            className='text-blue-400 flex-shrink-0'
                            size={16}
                          />
                        )}
                      </div>
                      <p className='text-sm text-gray-400 truncate'>
                        {testimonial.position} at {testimonial.company}
                      </p>
                      <div className='flex items-center gap-2'>
                        <div className='flex'>
                          {renderStars(testimonial.rating)}
                        </div>
                        <span className='text-xs text-gray-500'>
                          {formatDate(testimonial.date)}
                        </span>
                      </div>
                    </div>
                  </div>

                 
                  <blockquote className='text-gray-300 leading-relaxed group-hover:text-white/90 transition-colors duration-300'>
                    <Quote
                      className='quote-icon inline-block text-blue-400'
                      size={16}
                    />
                    {testimonial.text}
                  </blockquote>

              
                  <div className='flex items-center gap-4 text-xs text-gray-400'>
                    <span className='flex items-center gap-1'>
                      <Building size={12} />
                      {testimonial.projectType}
                    </span>
                    <span className='flex items-center gap-1'>
                      <MapPin size={12} />
                      {testimonial.location}
                    </span>
                  </div>

               
                  {testimonial.images.length > 0 && (
                    <div className='flex gap-2'>
                      {testimonial.images.slice(0, 3).map((image, idx) => (
                        <Image
                          key={idx}
                          src={image || '/placeholder.svg'}
                          alt={`Project ${idx + 1}`}
                          width={60}
                          height={60}
                          className='rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity'
                        />
                      ))}
                      {testimonial.images.length > 3 && (
                        <div className='w-15 h-15 bg-white/10 rounded-lg flex items-center justify-center text-xs'>
                          +{testimonial.images.length - 3}
                        </div>
                      )}
                    </div>
                  )}

                
                  <div className='flex items-center justify-between pt-4 border-t border-white/10'>
                    <div className='flex items-center gap-4 text-sm text-gray-400'>
                      <button className='flex items-center gap-1 hover:text-red-400 transition-colors'>
                        <Heart size={14} />
                        {testimonial.likes}
                      </button>
                      <button className='flex items-center gap-1 hover:text-blue-400 transition-colors'>
                        <TrendingUp size={14} />
                        {testimonial.helpful}
                      </button>
                    </div>
                    <button className='text-gray-400 hover:text-white transition-colors'>
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      
        {filteredTestimonials.length === 0 && (
          <div className='text-center py-16'>
            <div className='text-gray-400 space-y-4'>
              <Filter size={48} className='mx-auto opacity-50' />
              <p className='text-xl'>No testimonials found</p>
              <p className='text-sm'>Try adjusting your filter criteria</p>
            </div>
          </div>
        )}

      
        <div className='text-center '>
          <div className='inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl'>
            <div className='flex items-center gap-2'>
              <Quote className='text-white' size={24} />
              <span className='text-lg font-semibold'>
                Ready to share your experience?
              </span>
            </div>
            <button
              onClick={() => setShowSubmissionForm(true)}
              className='bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors'
            >
              Write a Review
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Submission Form */}
      {showSubmissionForm && (
        <TestimonialSubmissionForm
          onClose={() => setShowSubmissionForm(false)}
        />
      )}
    </section>
  )
}
