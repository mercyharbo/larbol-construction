'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'

import { BiCalendar, BiHome } from 'react-icons/bi'
import { CgWorkAlt } from 'react-icons/cg'
import { CiLocationOff } from 'react-icons/ci'
import { TbTag } from 'react-icons/tb'

import img5 from '@/assets/bridges.png'

gsap.registerPlugin(useGSAP, ScrollTrigger) // register the hook to avoid React version discrepancies

const projects = [
  {
    projectTitle: 'Custom Riverside Retreat Construction',
    year: 2021,
    client: 'Johnson Family',
    type: 'Custom Home Construction',
    location: 'California, USA',
    videoThumbnail:
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg', // Placeholder path
  },
  {
    projectTitle: 'Modern Urban Apartment Renovation',
    year: 2020,
    client: 'Smith Corporation',
    type: 'Apartment Renovation',
    location: 'New York, USA',
    videoThumbnail:
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg', // Placeholder path
  },
  {
    projectTitle: 'Luxury Beach House Development',
    year: 2019,
    client: 'Williams Family',
    type: 'Beach House Development',
    location: 'Florida, USA',
    videoThumbnail:
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg', // Placeholder path
  },
]

export default function ProjectsComp() {
  const revealRefs = useRef<Array<HTMLElement>>([])

  useGSAP(() => {
    revealRefs.current.forEach((el, index) => [
      gsap.fromTo(
        el,
        { y: -100, autoAlpha: 0 },
        {
          y: 0,
          duration: 1,
          ease: 'power2.out',
          autoAlpha: 1,
          stagger: 0.5,
          delay: 0.5,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=20',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        }
      ),
    ])
  }, [revealRefs])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <main className='flex flex-col justify-center items-center gap-[4rem]'>
      <header className='flex flex-col justify-center items-center m-auto lg:h-[80vh] md:h-[50vh] max-sm:h-[60vh] h-[calc(100vh-3.5rem)] w-full text-white relative'>
        <Image
          src={`https://cdn.pixabay.com/photo/2016/02/20/17/43/excavator-1212472_1280.jpg`}
          alt='Construction background'
          fill
          className='object-cover lg:object-center object-left z-[-2]' // Changed z-index to -2
          priority
        />

        {/* Added overlay div */}
        <div className='absolute inset-0 bg-black/65 z-[-1]'></div>

        <h1
          ref={addToRefs}
          className='lg:text-[4rem] md:text-[3rem] max-sm:text-[2rem] max-xs:text-[2rem] font-light capitalize '
        >
          Projects
        </h1>
      </header>

      <div className='flex flex-col justify-center items-center gap-[5rem] w-full lg:w-[80%] lg:px-[0] md:px-10 max-sm:px-7 max-xs:px-5'>
        {projects.map((project, index) => (
          <div
            key={index}
            ref={addToRefs}
            className='flex flex-col justify-start items-start gap-10 lg:gap-[4rem] w-full'
          >
            <div className='flex flex-col lg:flex-row justify-between items-center gap-5 w-full'>
              <div className='flex flex-col justify-start items-start gap-3'>
                <span className='text-[var(--accent)] uppercase text-sm '>
                  project {index + 1}{' '}
                </span>
                <h1 className='text-[2rem] lg:w-[70%] w-full font-light capitalize '>
                  {project.projectTitle}
                </h1>
                <div className='flex justify-start items-center gap-3 w-full text-sm text-[var(--text-gray)] '>
                  <BiCalendar className='text-[var(--accent)]' />
                  <span>Year: {project.year}</span>
                </div>
              </div>

              <div className='flex flex-col justify-start items-start gap-4 bg-[var(--dark-blue)] p-3 rounded-md w-full lg:w-auto'>
                <div className='flex justify-start items-center gap-3 w-full'>
                  <CgWorkAlt className='text-[var(--accent)]' />
                  <span className=''>{project.client}</span>
                </div>
                <div className='h-[1px] w-full bg-[var(--gray)]'></div>
                <div className='flex justify-start items-center gap-3 w-full'>
                  <TbTag className='text-[var(--accent)]' />
                  <span className=''>{project.type}</span>
                </div>
                <div className='h-[1px] w-full bg-[var(--gray)]'></div>
                <div className='flex justify-start items-center gap-3 w-full'>
                  <CiLocationOff className='text-[var(--accent)]' />
                  <span className=''>{project.location}</span>
                </div>
              </div>
            </div>

            <Image
              src={project.videoThumbnail}
              alt='Project thumbnail'
              width={800}
              height={500}
              className='rounded-md w-full h-[40vh] lg:h-[60vh] object-cover'
            />
          </div>
        ))}
      </div>

      <section className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full lg:py-[4rem] lg:w-[80%] md:px-10 max-sm:px-7 max-xs:px-5'>
        <div className='flex flex-col justify-start items-start gap-5'>
          <span
            ref={addToRefs}
            className='text-[var(--accent)] text-sm uppercase flex justify-start items-center gap-2'
          >
            <BiHome /> get in touch
          </span>
          <h1
            ref={addToRefs}
            className='lg:text-[3rem] md:text-[3rem] max-sm:text-[2rem] font-light capitalize'
          >
            building connections, one project at a time
          </h1>
          <p
            ref={addToRefs}
            className='lg:text-lg md:text-2xl max-sm:text-lg max-xs:text-lg font-light'
          >
            At Larbol Construction, we value your inquiries and feedback.
            Whether you're ready to start a project or have questions, our
            dedicated team is here to assist you. Let's create something
            extraordinary together.
          </p>
          <p
            ref={addToRefs}
            className='lg:text-lg md:text-2xl max-sm:text-lg max-xs:text-lg font-light'
          >
            Reach out to us today and experience unmatched professionalism and
            expertise in construction services.
          </p>
          <button
            ref={addToRefs}
            type='button'
            className='bg-[var(--accent)] text-black px-6 py-3 text-lg cursor-pointer hover:opacity-80'
          >
            Contact Us &rarr;
          </button>
        </div>

        <Image
          ref={addToRefs}
          src={img5}
          alt='Construction background'
          width={500}
          height={500}
          className='object-cover object-center rounded-lg w-full h-[300px] lg:w-auto lg:h-auto'
          priority
        />
      </section>
    </main>
  )
}
