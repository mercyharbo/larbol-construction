'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { BiCalendar, BiHome } from 'react-icons/bi'
import { CgWorkAlt } from 'react-icons/cg'
import { CiLocationOff } from 'react-icons/ci'
import { TbTag } from 'react-icons/tb'

gsap.registerPlugin(useGSAP, ScrollTrigger) // register the hook to avoid React version discrepancies

const projects = [
  {
    id: 'custom-riverside-retreat',
    projectTitle: 'Custom Riverside Retreat Construction',
    year: 2021,
    client: 'Johnson Family',
    type: 'Custom Home Construction',
    location: 'California, USA',
    videoThumbnail:
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg',
    videoUrl:
      'https://cdn.pixabay.com/video/2019/02/08/21233-316116300_large.mp4',
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
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg',
    ],
  },
  {
    id: 'modern-urban-apartment',
    projectTitle: 'Modern Urban Apartment Renovation',
    year: 2020,
    client: 'Smith Corporation',
    type: 'Apartment Renovation',
    location: 'New York, USA',
    videoThumbnail:
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg',
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
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg',
    ],
  },
  {
    id: 'luxury-beach-house',
    projectTitle: 'Luxury Beach House Development',
    year: 2019,
    client: 'Williams Family',
    type: 'Beach House Development',
    location: 'Florida, USA',
    videoThumbnail:
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg',
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
      'https://cdn.pixabay.com/photo/2017/08/22/06/03/construction-2667892_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/12/12/23/02/site-3871804_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/08/25/14/21/construction-3630200_1280.jpg',
    ],
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
            className='flex flex-col justify-start items-start gap-10 lg:gap-[4rem] w-full group'
          >
            <div className='flex flex-col lg:flex-row justify-between items-center gap-5 w-full'>
              <div className='flex flex-col justify-start items-start gap-3'>
                <span className='text-[var(--accent)] uppercase text-sm tracking-wider'>
                  project {index + 1}{' '}
                </span>
                <h1 className='text-[2rem] lg:w-[70%] w-full font-light capitalize group-hover:text-[var(--accent)] transition-colors duration-300'>
                  {project.projectTitle}
                </h1>
                <div className='flex justify-start items-center gap-3 w-full text-sm text-[var(--text-gray)]'>
                  <BiCalendar className='text-[var(--accent)]' />
                  <span>Year: {project.year}</span>
                </div>
              </div>

              <div className='flex flex-col justify-start items-start gap-4 bg-[var(--dark-blue)] p-5 rounded-lg w-full lg:w-auto group-hover:bg-[var(--gray)] transition-colors duration-300'>
                <div className='flex justify-start items-center gap-3 w-full'>
                  <CgWorkAlt className='text-[var(--accent)] text-xl' />
                  <span className='font-medium'>{project.client}</span>
                </div>
                <div className='h-[1px] w-full bg-[var(--gray)] opacity-50'></div>
                <div className='flex justify-start items-center gap-3 w-full'>
                  <TbTag className='text-[var(--accent)] text-xl' />
                  <span className='font-medium'>{project.type}</span>
                </div>
                <div className='h-[1px] w-full bg-[var(--gray)] opacity-50'></div>
                <div className='flex justify-start items-center gap-3 w-full'>
                  <CiLocationOff className='text-[var(--accent)] text-xl' />
                  <span className='font-medium'>{project.location}</span>
                </div>
              </div>
            </div>

            <div className='relative w-full overflow-hidden rounded-lg group'>
              <Image
                src={project.videoThumbnail}
                alt='Project thumbnail'
                width={800}
                height={500}
                className='rounded-lg w-full h-[40vh] lg:h-[60vh] object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6'>
                <Link
                  href={`/projects/${project.id}`}
                  className='bg-[var(--accent)] text-black px-6 py-2 rounded-md hover:opacity-90 transition-opacity duration-300'
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
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
          <Link
            href='/contact'
            ref={addToRefs}
            className='bg-[var(--accent)] w-[200px] lg:w-auto text-black px-6 py-3 cursor-pointer hover:opacity-80 inline-block'
          >
            Contact Us &rarr;
          </Link>
        </div>

        <Image
          ref={addToRefs}
          src='/bridges.png'
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
