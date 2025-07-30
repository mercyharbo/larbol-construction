'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  Award,
  Building,
  Calendar,
  ChevronDown,
  ChevronUp,
  Eye,
  Heart,
  Home,
  Linkedin,
  Phone,
  Quote,
  Shield,
  Target,
  Twitter,
  Users,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const constructionImages = [
  {
    url: 'https://img.freepik.com/free-photo/view-building-concrete-house_1398-2994.jpg',
    title: 'Modern Construction',
    description: 'State-of-the-art building techniques',
  },
  {
    url: 'https://img.freepik.com/free-photo/building-concrete-house_1398-2987.jpg',
    title: 'Quality Craftsmanship',
    description: 'Attention to every detail',
  },
]

const missionHighlights = [
  {
    icon: Target,
    title: 'Excellence in Delivery',
    description:
      'Delivering top-quality construction solutions with precision and innovation to exceed expectations.',
    color: 'text-blue-400',
  },
  {
    icon: Shield,
    title: 'Sustainable Building',
    description:
      'Building responsibly with eco-friendly materials and practices for a sustainable future.',
    color: 'text-green-400',
  },
  {
    icon: Heart,
    title: 'Client Satisfaction',
    description:
      'Prioritizing client satisfaction through tailored services and fostering trust and transparency.',
    color: 'text-purple-400',
  },
]

const teamMembers = [
  {
    name: 'Afolabi Adebola Khadijah',
    position: 'Chief Executive Officer (CEO)',
    url: '/ceo.jpg',
    description:
      "Afolabi is a visionary leader with over 15 years of experience in the construction industry. She ensures that every project aligns with the company's mission of delivering excellence.",
    experience: '15+ Years',
    projects: '200+',
    specialization: 'Strategic Leadership',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Afolabi Ridwan Damilare',
    position: 'Lead Architect',
    url: '/mercy.JPEG',
    description:
      "Afolabi is a creative architect with a passion for designing innovative and sustainable structures, turning clients' visions into reality with precision and style.",
    experience: '12+ Years',
    projects: '150+',
    specialization: 'Sustainable Design',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Afolabi Moshood Opeyemi',
    position: 'Lead Project Manager',
    url: '/makols.JPEG',
    description:
      'Tola is a detail-oriented project manager who ensures seamless execution of projects, meeting deadlines and budgets while coordinating the team effectively.',
    experience: '10+ Years',
    projects: '180+',
    specialization: 'Project Coordination',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
]

const works = [
  { name: 'Residential Developments', icon: Home, count: '150+' },
  { name: 'Commercial Projects', icon: Building, count: '80+' },
  { name: 'Renovations & Remodeling', icon: Zap, count: '200+' },
  { name: 'Sustainable Construction', icon: Shield, count: '50+' },
  { name: 'Consulting and Advisory', icon: Users, count: '100+' },
  { name: 'Project Management', icon: Target, count: '300+' },
]

const companyStats = [
  { label: 'Years of Experience', value: '25+', icon: Calendar },
  { label: 'Projects Completed', value: '500+', icon: Building },
  { label: 'Happy Clients', value: '1000+', icon: Users },
  { label: 'Team Members', value: '50+', icon: Heart },
]

const timeline = [
  {
    year: '2012',
    title: 'Company Founded',
    description: 'Started with a vision to build excellence',
  },
  {
    year: '2013',
    title: 'First Major Project',
    description: 'Completed our first commercial complex',
  },
  {
    year: '2015',
    title: 'Expansion',
    description: 'Expanded operations across multiple states',
  },
  {
    year: '2017',
    title: 'Green Initiative',
    description: 'Launched sustainable construction practices',
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Adopted cutting-edge construction technology',
  },
  {
    year: '2022',
    title: 'Industry Leader',
    description: 'Recognized as top construction company',
  },
]

const faqs = [
  {
    question: 'What services does Larbol Construction offer?',
    answer:
      'We specialize in residential and commercial construction, home remodeling, renovations, general contracting, and custom construction projects. Our team ensures quality craftsmanship and reliable service at every step.',
    category: 'Services',
  },
  {
    question: 'Why should I choose Larbol Construction for my project?',
    answer:
      "At Larbol Construction, we prioritize your vision and turn it into reality with precision and expertise. With years of experience, a highly skilled team, and a commitment to delivering exceptional results on time and within budget, we're your trusted partner for all construction needs.",
    category: 'Company',
  },
  {
    question: 'How can I get a quote for my project?',
    answer:
      'Getting started is easy! Simply contact us through our website or give us a call. Share the details of your project, and our team will provide you with a tailored, no-obligation quote that matches your specific requirements.',
    category: 'Process',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary based on scope and complexity. Residential projects typically take 2-6 months, while commercial projects can range from 6-18 months. We provide detailed timelines during the planning phase.',
    category: 'Process',
  },
  {
    question: 'Do you offer warranties on your work?',
    answer:
      'Yes, we provide comprehensive warranties on all our construction work. Structural work comes with a 10-year warranty, while finishes and fixtures have a 2-year warranty.',
    category: 'Services',
  },
]

interface CounterProps {
  end: string
  duration?: number
  delay?: number
}

function AnimatedCounter({ end, duration = 2, delay = 0 }: CounterProps) {
  const [count, setCount] = useState('0')
  const countRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const numericEnd = Number.parseInt(end.replace(/\D/g, ''))
    const suffix = end.replace(/\d/g, '')
    const counter = { value: 0 }

    gsap.to(counter, {
      value: numericEnd,
      duration,
      delay,
      ease: 'power2.out',
      onUpdate: () => {
        setCount(Math.floor(counter.value) + suffix)
      },
      scrollTrigger: {
        trigger: countRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none none',
      },
    })
  }, [end, duration, delay])

  return <span ref={countRef}>{count}</span>
}

export default function EnhancedAbout() {
  const revealRefs = useRef<Array<HTMLElement>>([])
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [selectedTeamMember, setSelectedTeamMember] = useState<any>(null)
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)

  useGSAP(() => {
    // Header animation
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

    // Reveal animations
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

    // Timeline animation
    gsap.to('.timeline-line', {
      height: '100%',
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    })

    // Floating animations
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    })
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <main className='flex flex-col justify-center items-center w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white'>
      <header className='relative flex flex-col justify-center items-center h-screen w-full text-white overflow-hidden'>
        <Image
          src='/placeholder.svg?height=1080&width=1920'
          alt='Construction background'
          fill
          className='object-cover z-[-2]'
          priority
        />

        {/* Enhanced overlay with gradient */}
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
            <Building className='text-blue-400' size={20} />
            <span className='text-sm font-medium'>
              About Larbol Construction
            </span>
          </div>

          <h1 className='text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent'>
            About Us
          </h1>

          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
            Building dreams into reality with 25+ years of construction
            excellence and innovation
          </p>

          {/* Stats preview */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
            {companyStats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-3xl font-bold text-blue-400 mb-1'>
                  <AnimatedCounter end={stat.value} delay={index * 0.2} />
                </div>
                <div className='text-sm text-gray-400'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
          <ChevronDown className='text-white/60' size={32} />
        </div>
      </header>

      <section className='w-full py-20 relative'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div className='grid grid-cols-1 gap-8'>
              {constructionImages.map((item, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  className='group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700'
                >
                  <Image
                    src={item.url || '/placeholder.svg?height=400&width=600'}
                    alt={item.title}
                    width={600}
                    height={400}
                    className='object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                  <div className='absolute bottom-4 left-4 text-white'>
                    <h3 className='text-lg font-semibold mb-1'>{item.title}</h3>
                    <p className='text-sm text-gray-300'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className='space-y-8'>
              <div ref={addToRefs}>
                <div className='inline-flex items-center gap-2 text-blue-400 text-sm uppercase font-medium'>
                  <Home size={16} />
                  About Us
                </div>
                <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                  Building Dreams, Crafting Reality
                </h2>
                <p className='text-lg text-gray-300 leading-relaxed mb-8'>
                  At Larbol Construction, we turn visions into reality. With a
                  strong foundation of expertise and innovation, we specialize
                  in delivering exceptional construction solutions tailored to
                  meet our clients' unique needs. From residential developments
                  to large-scale commercial projects, we combine precision,
                  quality, and sustainability to build structures that stand the
                  test of time.
                </p>
              </div>

              {/* Mission highlights */}
              <div ref={addToRefs} className='space-y-6'>
                <h3 className='text-2xl font-semibold text-white mb-6'>
                  Our Mission
                </h3>
                <div className='space-y-4'>
                  {missionHighlights.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={index}
                        className='group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50'
                      >
                        <div className='flex items-start gap-4'>
                          <div
                            className={`p-3 rounded-lg bg-slate-700/50 ${item.color} group-hover:scale-110 transition-transform`}
                          >
                            <Icon size={24} />
                          </div>
                          <div>
                            <h4 className='text-lg font-semibold text-white mb-2'>
                              {item.title}
                            </h4>
                            <p className='text-gray-400 leading-relaxed'>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full py-20 bg-slate-800/30 backdrop-blur-sm'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='text-center mb-16' ref={addToRefs}>
            <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
              <Users className='text-blue-400' size={20} />
              <span className='text-sm font-medium'>Meet Our Team</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
              Who We Are: Expertise You Can Trust
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our leadership team brings decades of combined experience in
              construction, architecture, and project management.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                ref={addToRefs}
                className='group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20'
              >
                {/* Image */}
                <div className='relative h-80 overflow-hidden'>
                  <Image
                    src={member.url || '/placeholder.svg?height=400&width=400'}
                    alt={member.name}
                    fill
                    className='object-cover object-top group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent' />

                  {/* Social links overlay */}
                  <div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <Link
                      href={member.social.linkedin}
                      className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform'
                    >
                      <Linkedin size={14} className='text-white' />
                    </Link>
                    <Link
                      href={member.social.twitter}
                      className='w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform'
                    >
                      <Twitter size={14} className='text-white' />
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-white mb-1'>
                    {member.name}
                  </h3>
                  <p className='text-blue-400 font-medium mb-4'>
                    {member.position}
                  </p>

                  {/* Stats */}
                  <div className='grid grid-cols-3 gap-4 mb-4 text-center'>
                    <div>
                      <div className='text-lg font-bold text-white'>
                        {member.experience}
                      </div>
                      <div className='text-xs text-gray-400'>Experience</div>
                    </div>
                    <div>
                      <div className='text-lg font-bold text-white'>
                        {member.projects}
                      </div>
                      <div className='text-xs text-gray-400'>Projects</div>
                    </div>
                    <div>
                      <div className='text-xs text-gray-400 mb-1'>
                        Specialty
                      </div>
                      <div className='text-xs font-medium text-blue-400'>
                        {member.specialization}
                      </div>
                    </div>
                  </div>

                  <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                    {member.description}
                  </p>

                  <button
                    onClick={() => setSelectedTeamMember(member)}
                    className='w-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 py-2 rounded-lg transition-colors duration-200 text-sm font-medium'
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className='w-full py-20'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='text-center mb-16' ref={addToRefs}>
            <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
              <Calendar className='text-blue-400' size={20} />
              <span className='text-sm font-medium'>Our Journey</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
              10 Years of Excellence
            </h2>
          </div>

          <div className='timeline-container relative max-w-4xl mx-auto'>
            <div className='absolute left-1/2 -translate-x-1/2 w-1 bg-slate-700 h-0 timeline-line' />

            <div className='space-y-12'>
              {timeline.map((item, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50'>
                      <div className='text-blue-400 font-bold text-lg mb-2'>
                        {item.year}
                      </div>
                      <h3 className='text-xl font-semibold text-white mb-2'>
                        {item.title}
                      </h3>
                      <p className='text-gray-400'>{item.description}</p>
                    </div>
                  </div>

                  <div className='relative z-10'>
                    <div className='w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900' />
                  </div>

                  <div className='flex-1' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='w-full py-20 bg-slate-800/30 backdrop-blur-sm'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div ref={addToRefs}>
              <div className='inline-flex items-center gap-2 text-blue-400 text-sm uppercase font-medium mb-4'>
                <Award size={16} />
                Expertise and Experience
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                Bringing Expertise to Every Project
              </h2>
              <p className='text-lg text-gray-300 leading-relaxed mb-8'>
                At Larbol Construction, our core values guide everything we do.
                We believe in building with integrity, ensuring that every
                project is executed{' '}
                <span className='font-semibold text-white'>
                  ethically and responsibly.
                </span>{' '}
                We strive for excellence in every detail, from design to
                construction, to deliver top-quality results that exceed
                expectations.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {works.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className='floating-element bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-4 hover:bg-slate-700/70 transition-all duration-300 group'
                    >
                      <div className='flex items-center gap-3'>
                        <div className='p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors'>
                          <Icon size={20} className='text-blue-400' />
                        </div>
                        <div>
                          <div className='font-medium text-white text-sm'>
                            {item.name}
                          </div>
                          <div className='text-blue-400 text-xs font-bold'>
                            {item.count}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div ref={addToRefs} className='relative'>
              <Image
                src='/contact.png'
                alt='Construction expertise'
                width={350}
                height={350}
                quality={100}
                className='object-cover rounded-2xl w-full'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl' />

              <div className='absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20'>
                <div className='text-2xl font-bold text-white'>98%</div>
                <div className='text-sm text-gray-300'>Client Satisfaction</div>
              </div>

              <div className='absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20'>
                <div className='text-2xl font-bold text-white'>500+</div>
                <div className='text-sm text-gray-300'>Projects Delivered</div>
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
              Get in touch with our team 24/7 for a free consultation and quote
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                href='/contact'
                className='bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2'
              >
                <Phone size={20} />
                Contact Us Today
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

      <section className='w-full py-20'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16'>
            <div ref={addToRefs}>
              <div className='inline-flex items-center gap-2 text-blue-400 text-sm uppercase font-medium mb-4'>
                <Quote size={16} />
                Frequently Asked Questions
              </div>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                Everything You Need to Know
              </h2>
              <p className='text-lg text-gray-300 leading-relaxed mb-8'>
                Find answers to common questions about our services, processes,
                and what makes us different.
              </p>

              <Image
                src='/bridges.png'
                alt='FAQ consultation'
                width={500}
                height={250}
                className='object-cover rounded-2xl w-full'
              />
            </div>

            <div className='space-y-4'>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50'
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className='w-full p-6 text-left flex justify-between items-center hover:bg-slate-800/70 transition-colors duration-200'
                  >
                    <div>
                      <div className='text-xs text-blue-400 font-medium mb-1'>
                        {faq.category}
                      </div>
                      <h3 className='text-lg font-semibold text-white'>
                        {faq.question}
                      </h3>
                    </div>
                    <div className='ml-4'>
                      {expandedFaq === index ? (
                        <ChevronUp className='text-blue-400' size={24} />
                      ) : (
                        <ChevronDown className='text-gray-400' size={24} />
                      )}
                    </div>
                  </button>

                  {expandedFaq === index && (
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
                  Our team is here to help. Contact us for personalized answers
                  to your specific needs.
                </p>
                <Link
                  href='/contact'
                  className='inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium'
                >
                  Get in Touch
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedTeamMember && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
          <div className='bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='relative'>
              <Image
                src={
                  selectedTeamMember.url ||
                  '/placeholder.svg?height=300&width=600'
                }
                alt={selectedTeamMember.name}
                width={600}
                height={300}
                className='w-full h-48 object-cover object-top'
              />
              <button
                onClick={() => setSelectedTeamMember(null)}
                className='absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors'
              >
                <ChevronUp size={20} />
              </button>
            </div>

            <div className='p-6'>
              <h3 className='text-2xl font-bold text-white mb-2'>
                {selectedTeamMember.name}
              </h3>
              <p className='text-blue-400 font-medium mb-4'>
                {selectedTeamMember.position}
              </p>
              <p className='text-gray-300 leading-relaxed mb-6'>
                {selectedTeamMember.description}
              </p>

              <div className='grid grid-cols-3 gap-4 mb-6'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-white'>
                    {selectedTeamMember.experience}
                  </div>
                  <div className='text-sm text-gray-400'>Experience</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-white'>
                    {selectedTeamMember.projects}
                  </div>
                  <div className='text-sm text-gray-400'>Projects</div>
                </div>
                <div className='text-center'>
                  <div className='text-sm text-gray-400 mb-1'>Specialty</div>
                  <div className='text-sm font-medium text-blue-400'>
                    {selectedTeamMember.specialization}
                  </div>
                </div>
              </div>

              <div className='flex gap-4'>
                <Link
                  href={selectedTeamMember.social.linkedin}
                  className='flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center'
                >
                  Connect on LinkedIn
                </Link>
                <button
                  onClick={() => setSelectedTeamMember(null)}
                  className='px-6 py-3 border border-slate-600 rounded-lg hover:bg-slate-700 transition-colors'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
