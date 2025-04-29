'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { BiCalendar, BiLeftArrowAlt } from 'react-icons/bi'
import { CgWorkAlt } from 'react-icons/cg'
import { CiLocationOff } from 'react-icons/ci'
import { TbTag } from 'react-icons/tb'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type Project = {
  projectTitle: string
  year: number
  client: string
  type: string
  location: string
  videoThumbnail: string
  videoUrl: string
  description: string
  features: string[]
  images: string[]
}

type ProjectDetailsClientProps = {
  project: Project | undefined
}

export default function ProjectDetailsClient({
  project,
}: ProjectDetailsClientProps) {
  const revealRefs = useRef<Array<HTMLElement>>([])

  useGSAP(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          duration: 1,
          ease: 'power2.out',
          autoAlpha: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: el,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [revealRefs])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  if (!project) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-2xl'>Project not found</h1>
        <Link
          href='/projects'
          className='mt-4 text-[var(--accent)] hover:underline'
        >
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <main className='flex flex-col justify-center items-center gap-5'>
      {/* Hero Section */}
      <header className='relative w-full h-[60vh]'>
        <Image
          src={project.videoThumbnail}
          alt={project.projectTitle}
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/60' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1
            ref={addToRefs}
            className='text-4xl md:text-6xl font-light text-white text-center px-4'
          >
            {project.projectTitle}
          </h1>
        </div>
      </header>

      {/* Back Button */}
      <Link
        href='/projects'
        className='absolute top-4 left-4 text-white hover:text-[var(--accent)] transition-colors duration-300'
      >
        <BiLeftArrowAlt className='text-3xl' />
      </Link>

      {/* Project Details */}
      <section className='w-full max-w-7xl px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Project Info */}
          <div className='lg:col-span-2 space-y-8'>
            <div ref={addToRefs} className='space-y-4'>
              <h2 className='text-2xl font-light'>Project Overview</h2>
              <p className='text-[var(--text-gray)]'>{project.description}</p>
            </div>

            {/* Video Section */}
            {project.videoUrl && (
              <div ref={addToRefs} className='space-y-4'>
                <h2 className='text-2xl font-light'>Project Video</h2>
                <div className='relative w-full aspect-video rounded-lg overflow-hidden'>
                  <iframe
                    src={project.videoUrl}
                    className='absolute top-0 left-0 w-full h-full'
                    allow='autoplay; fullscreen; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            <div ref={addToRefs} className='space-y-4'>
              <h2 className='text-2xl font-light'>Key Features</h2>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-2 text-[var(--text-gray)]'
                  >
                    <span className='text-[var(--accent)]'>•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Gallery */}
            <div ref={addToRefs} className='space-y-4'>
              <h2 className='text-2xl font-light'>Project Gallery</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className='relative h-64 rounded-lg overflow-hidden'
                  >
                    <Image
                      src={image}
                      alt={`Project image ${index + 1}`}
                      fill
                      className='object-cover hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details Sidebar */}
          <div ref={addToRefs} className='space-y-6'>
            <div className='bg-[var(--dark-blue)] p-6 rounded-lg space-y-4'>
              <div className='flex items-center gap-3'>
                <CgWorkAlt className='text-[var(--accent)] text-xl' />
                <span className='font-medium'>{project.client}</span>
              </div>
              <div className='h-px w-full bg-[var(--gray)] opacity-50' />
              <div className='flex items-center gap-3'>
                <TbTag className='text-[var(--accent)] text-xl' />
                <span className='font-medium'>{project.type}</span>
              </div>
              <div className='h-px w-full bg-[var(--gray)] opacity-50' />
              <div className='flex items-center gap-3'>
                <CiLocationOff className='text-[var(--accent)] text-xl' />
                <span className='font-medium'>{project.location}</span>
              </div>
              <div className='h-px w-full bg-[var(--gray)] opacity-50' />
              <div className='flex items-center gap-3'>
                <BiCalendar className='text-[var(--accent)] text-xl' />
                <span className='font-medium'>Year: {project.year}</span>
              </div>
            </div>

            <Link
              href='/contact'
              className='block w-full bg-[var(--accent)] text-black text-center py-3 rounded-lg hover:opacity-90 transition-opacity duration-300'
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
