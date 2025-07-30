'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  Building,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  ExternalLink,
  Eye,
  Grid3X3,
  Home,
  List,
  MapPin,
  Play,
  Search,
  Star,
  Tag,
  Users,
  X,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger) // register the hook to avoid React version discrepancies

const enhancedProjects = [
  {
    id: 'custom-riverside-retreat',
    projectTitle: 'Custom Riverside Retreat Construction',
    year: 2021,
    client: 'Johnson Family',
    type: 'Custom Home Construction',
    category: 'Residential',
    location: 'California, USA',
    status: 'Completed',
    duration: '8 months',
    budget: '$2.5M',
    rating: 5.0,
    videoThumbnail: '/placeholder.svg?height=600&width=800',
    videoUrl: '/placeholder-video.mp4',
    description:
      'A luxurious riverside retreat featuring modern architecture and sustainable design. This custom home construction project showcases our commitment to quality and attention to detail.',
    features: [
      'Modern sustainable design',
      'Energy-efficient systems',
      'Custom interior finishes',
      'Landscaped gardens',
      'Smart home technology',
    ],
    images: [
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg',
    ],
    tags: ['Luxury', 'Sustainable', 'Waterfront', 'Smart Home'],
    testimonial: {
      text: 'Exceptional work and attention to detail. Our dream home exceeded all expectations.',
      author: 'Sarah Johnson',
    },
  },
  {
    id: 'modern-urban-apartment',
    projectTitle: 'Modern Urban Apartment Renovation',
    year: 2020,
    client: 'Smith Corporation',
    type: 'Apartment Renovation',
    category: 'Commercial',
    location: 'New York, USA',
    status: 'Completed',
    duration: '6 months',
    budget: '$1.8M',
    rating: 4.8,
    videoThumbnail:
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg',
    videoUrl:
      'https://cdn.pixabay.com/video/2019/02/08/21233-316116300_large.mp4',
    description:
      'A comprehensive renovation of a historic apartment building, transforming it into modern living spaces while preserving its architectural heritage.',
    features: [
      'Historic preservation',
      'Modern amenities',
      'Open floor plans',
      'High-end finishes',
      'Community spaces',
    ],
    images: [
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg',
    ],
    tags: ['Historic', 'Urban', 'Renovation', 'Modern'],
    testimonial: {
      text: 'Professional team that delivered on time and within budget.',
      author: 'Michael Smith',
    },
  },
  {
    id: 'luxury-beach-house',
    projectTitle: 'Luxury Beach House Development',
    year: 2019,
    client: 'Williams Family',
    type: 'Beach House Development',
    category: 'Residential',
    location: 'Florida, USA',
    status: 'Completed',
    duration: '10 months',
    budget: '$3.2M',
    rating: 4.9,
    videoThumbnail:
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg',
    videoUrl:
      'https://cdn.pixabay.com/video/2019/02/08/21233-316116300_large.mp4',
    description:
      'A stunning beachfront property featuring contemporary design elements and premium materials, designed to withstand coastal conditions while providing luxurious living spaces.',
    features: [
      'Oceanfront location',
      'Hurricane-resistant design',
      'Infinity pool',
      'Outdoor entertainment areas',
      'Smart home technology',
    ],
    images: [
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg',
    ],
    tags: ['Luxury', 'Beachfront', 'Contemporary', 'Hurricane-Resistant'],
    testimonial: {
      text: 'Our beach house is absolutely stunning. The quality is unmatched.',
      author: 'Jennifer Williams',
    },
  },
  {
    id: 'corporate-headquarters',
    projectTitle: 'Corporate Headquarters Complex',
    year: 2022,
    client: 'Tech Innovations Inc.',
    type: 'Commercial Construction',
    category: 'Commercial',
    location: 'Seattle, WA',
    status: 'Completed',
    duration: '14 months',
    budget: '$8.5M',
    rating: 4.7,
    videoThumbnail:
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg',
    videoUrl:
      'https://cdn.pixabay.com/video/2019/02/08/21233-316116300_large.mp4',
    description:
      'A state-of-the-art corporate headquarters featuring sustainable design, modern workspaces, and cutting-edge technology infrastructure.',
    features: [
      'LEED Platinum certification',
      'Open collaborative spaces',
      'Advanced HVAC systems',
      'Green roof technology',
      'Electric vehicle charging',
    ],
    images: [
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg',
    ],
    tags: ['Corporate', 'LEED', 'Modern', 'Technology'],
    testimonial: {
      text: 'The perfect blend of functionality and sustainability for our growing company.',
      author: 'David Chen',
    },
  },
]

const categories = [
  'All',
  'Residential',
  'Commercial',
  'Infrastructure',
  'Renovation',
]
const projectTypes = [
  'All',
  'Custom Home',
  'Apartment',
  'Office',
  'Retail',
  'Industrial',
]

interface ProjectGalleryProps {
  images: string[]
  title: string
  onClose: () => void
}

function ProjectGallery({ images, title, onClose }: ProjectGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className='fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
      <div className='relative max-w-6xl w-full'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors'
        >
          <X size={24} />
        </button>

        <div className='relative'>
          <Image
            src={images[currentImage] || '/placeholder.svg'}
            alt={`${title} - Image ${currentImage + 1}`}
            width={1200}
            height={800}
            className='w-full h-auto max-h-[80vh] object-contain rounded-lg'
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors'
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors'
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className='flex justify-center gap-2 mt-4'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentImage === index
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <div className='text-center mt-4'>
          <h3 className='text-white text-lg font-semibold'>{title}</h3>
          <p className='text-white/70 text-sm'>
            {currentImage + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function EnhancedProjects() {
  const revealRefs = useRef<Array<HTMLElement>>([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [showGallery, setShowGallery] = useState(false)
  const [sortBy, setSortBy] = useState<'year' | 'rating' | 'budget'>('year')

  const filteredProjects = enhancedProjects
    .filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory
      const matchesType =
        selectedType === 'All' || project.type.includes(selectedType)
      const matchesSearch =
        project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      return matchesCategory && matchesType && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'budget':
          return (
            Number.parseFloat(b.budget.replace(/[$M]/g, '')) -
            Number.parseFloat(a.budget.replace(/[$M]/g, ''))
          )
        case 'year':
        default:
          return b.year - a.year
      }
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
  }, [filteredProjects])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  const openProjectGallery = (project: any) => {
    setSelectedProject(project)
    setShowGallery(true)
  }

  const closeProjectGallery = () => {
    setShowGallery(false)
    setSelectedProject(null)
  }

  return (
    <main className='flex flex-col justify-center items-center w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white'>
      <header className='relative flex flex-col justify-center items-center h-screen w-full text-white overflow-hidden'>
        <Image
          src='/placeholder.svg?height=1080&width=1920'
          alt='Construction projects background'
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
            <Building className='text-blue-400' size={20} />
            <span className='text-sm font-medium'>Our Portfolio</span>
          </div>

          <h1 className='text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent'>
            Projects
          </h1>

          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
            Explore our portfolio of exceptional construction projects that
            showcase our commitment to quality, innovation, and client
            satisfaction
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-400 mb-1'>500+</div>
              <div className='text-sm text-gray-400'>Projects</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-green-400 mb-1'>25+</div>
              <div className='text-sm text-gray-400'>Years</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-purple-400 mb-1'>98%</div>
              <div className='text-sm text-gray-400'>Success Rate</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-yellow-400 mb-1'>4.8</div>
              <div className='text-sm text-gray-400'>Avg Rating</div>
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
        <div className='mx-auto w-full px-4 lg:px-8'>
          <div className=' mx-auto flex flex-col gap-10'>
            <div className='text-center space-y-3 ' ref={addToRefs}>
              <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                Featured Projects
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Discover our most recent and notable construction achievements
              </p>
            </div>

            <div className='space-y-5 max-w-6xl mx-auto' ref={addToRefs}>
              <div className='relative '>
                <Search
                  className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
                  size={20}
                />
                <input
                  type='text'
                  placeholder='Search projects...'
                  className='w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
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
                          : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className='flex items-center gap-4'>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className='bg-slate-800/50 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm'
                  >
                    <option value='year'>Latest First</option>
                    <option value='rating'>Highest Rated</option>
                    <option value='budget'>Budget Range</option>
                  </select>

                  <div className='flex bg-slate-800/50 rounded-lg p-1'>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${
                        viewMode === 'grid'
                          ? 'bg-blue-600'
                          : 'hover:bg-slate-700/50'
                      }`}
                    >
                      <Grid3X3 size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${
                        viewMode === 'list'
                          ? 'bg-blue-600'
                          : 'hover:bg-slate-700/50'
                      }`}
                    >
                      <List size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
                  : 'space-y-8 max-w-7xl mx-auto'
              }
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  ref={addToRefs}
                  className={`group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 ${
                    viewMode === 'list' ? 'flex gap-6' : ''
                  }`}
                >
                  <div className='absolute top-4 left-4 z-20 flex gap-2'>
                    <span className='bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs font-medium'>
                      {project.category}
                    </span>
                    <span className='bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs font-medium'>
                      {project.status}
                    </span>
                  </div>

                  <div className='absolute top-4 right-4 z-20 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded'>
                    <Star className='text-yellow-400 fill-current' size={14} />
                    <span className='text-white text-xs font-medium'>
                      {project.rating}
                    </span>
                  </div>

                  <div
                    className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'w-80 h-48' : 'h-64'
                    }`}
                  >
                    <Image
                      src={project.videoThumbnail || '/placeholder.svg'}
                      alt={project.projectTitle}
                      fill
                      className='object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />

                    <div className='absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <div className='flex gap-2'>
                        <button
                          onClick={() => openProjectGallery(project)}
                          className='bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors'
                        >
                          <Eye size={16} className='text-white' />
                        </button>
                        <button className='bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors'>
                          <Play size={16} className='text-white' />
                        </button>
                      </div>
                      <Link
                        href={`/projects/${project.id}`}
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2'
                      >
                        View Details
                        <ExternalLink size={14} />
                      </Link>
                    </div>
                  </div>

                  <div
                    className={`p-6 flex-1 ${
                      viewMode === 'list' ? 'flex flex-col justify-between' : ''
                    }`}
                  >
                    <div>
                      <div className='flex items-center gap-2 text-blue-400 text-sm mb-2'>
                        <Calendar size={14} />
                        <span>{project.year}</span>
                        <span className='text-gray-500'>•</span>
                        <Clock size={14} />
                        <span>{project.duration}</span>
                      </div>

                      <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors'>
                        {project.projectTitle}
                      </h3>

                      <div className='flex items-center gap-4 text-sm text-gray-400 mb-3'>
                        <span className='flex items-center gap-1'>
                          <Users size={14} />
                          {project.client}
                        </span>
                        <span className='flex items-center gap-1'>
                          <MapPin size={14} />
                          {project.location}
                        </span>
                      </div>

                      <p className='text-gray-300 text-sm leading-relaxed mb-4'>
                        {project.description}
                      </p>

                      <div className='flex flex-wrap gap-2 mb-4'>
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className='bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs'
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className='text-blue-400 text-xs'>
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className='grid grid-cols-2 gap-4 text-sm'>
                        <div className='flex items-center gap-2 text-gray-400'>
                          <DollarSign size={14} />
                          <span>{project.budget}</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-400'>
                          <Tag size={14} />
                          <span>{project.type}</span>
                        </div>
                      </div>
                    </div>

                    {project.testimonial && (
                      <div className='mt-4 p-3 bg-slate-700/30 rounded-lg border-l-2 border-blue-500'>
                        <p className='text-gray-300 text-xs italic mb-1'>
                          "{project.testimonial.text}"
                        </p>
                        <p className='text-blue-400 text-xs font-medium'>
                          - {project.testimonial.author}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className='text-center py-16'>
                <div className='text-gray-400 mb-4'>
                  <Search size={48} className='mx-auto mb-4 opacity-50' />
                  <p className='text-xl'>No projects found</p>
                  <p className='text-sm'>
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className='w-full py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div ref={addToRefs}>
              <div className='inline-flex items-center gap-2 text-blue-100 text-sm uppercase font-medium mb-4'>
                <Home size={16} />
                Get In Touch
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Building Connections, One Project at a Time
              </h2>
              <p className='text-xl text-blue-100 leading-relaxed mb-6'>
                At Larbol Construction, we value your inquiries and feedback.
                Whether you're ready to start a project or have questions, our
                dedicated team is here to assist you.
              </p>
              <p className='text-lg text-blue-100 leading-relaxed mb-8'>
                Reach out to us today and experience unmatched professionalism
                and expertise in construction services.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  href='/contact'
                  className='bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2'
                >
                  <Zap size={20} />
                  Start Your Project
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href='/services'
                  className='border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-2'
                >
                  <Building size={20} />
                  Our Services
                </Link>
              </div>
            </div>

            <div ref={addToRefs} className='relative'>
              <Image
                src='/placeholder.svg?height=500&width=600'
                alt='Construction consultation'
                width={600}
                height={500}
                className='object-cover rounded-2xl w-full'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl' />

              <div className='absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20'>
                <div className='text-2xl font-bold text-white'>24/7</div>
                <div className='text-sm text-gray-200'>Support Available</div>
              </div>

              <div className='absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20'>
                <div className='text-2xl font-bold text-white'>Free</div>
                <div className='text-sm text-gray-200'>Consultation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showGallery && selectedProject && (
        <ProjectGallery
          images={selectedProject.images}
          title={selectedProject.projectTitle}
          onClose={closeProjectGallery}
        />
      )}
    </main>
  )
}
