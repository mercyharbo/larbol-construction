'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'
import { BiHome } from 'react-icons/bi'

const constructionImages = [
  'https://img.freepik.com/free-photo/view-building-concrete-house_1398-2994.jpg?t=st=1742424400~exp=1742428000~hmac=f421964b3d0bd07f4b0e80f19478ad2d62cbc1ea1e286da5b39e54c783de30ba&w=1380',
  'https://img.freepik.com/free-photo/building-concrete-house_1398-2987.jpg?t=st=1742420065~exp=1742423665~hmac=ad4e43b24832dde49e1d3de995350c88880b7c9c48646fd7ebca917066da2315&w=1380',
]

const missionHighlights = [
  'Delivering top-quality construction solutions with precision and innovation to exceed expectations.',
  'Building responsibly with eco-friendly materials and practices for a sustainable future.',
  'Prioritizing client satisfaction through tailored services and fostering trust and transparency.',
]

const teamMembers = [
  {
    name: 'John Adewale',
    position: 'Chief Executive Officer (CEO)',
    url: 'https://img.freepik.com/free-photo/female-engineers-working_23-2151657859.jpg?t=st=1742608482~exp=1742612082~hmac=bedb2544c56b8a9be5fca8ebc71b96497f5dd69328131dd58c7d376ca59c977e&w=740',
    description:
      "John is a visionary leader with over 15 years of experience in the construction industry. He ensures that every project aligns with the company's mission of delivering excellence.",
  },
  {
    name: 'Grace Emeka',
    position: 'Lead Architect',
    url: 'https://img.freepik.com/free-photo/female-engineers-working_23-2151657865.jpg?t=st=1742608537~exp=1742612137~hmac=eec240c3a2b2e6a07caf0a42af873bbc4f9017d4991c7f7c7caaac35da096479&w=740',
    description:
      "Grace is a creative architect with a passion for designing innovative and sustainable structures, turning clients' visions into reality with precision and style.",
  },
  {
    name: 'Tola Owolabi',
    position: 'Project Manager',
    url: 'https://img.freepik.com/free-photo/female-engineers-working_23-2151657891.jpg?t=st=1742608585~exp=1742612185~hmac=a34d5ee66e2c477bc40e78eea7532c3ffed693b14ba21f41c1d90ea2aba1cc27&w=1380',
    description:
      'Tola is a detail-oriented project manager who ensures seamless execution of projects, meeting deadlines and budgets while coordinating the team effectively.',
  },
]
gsap.registerPlugin(useGSAP, ScrollTrigger) // register the hook to avoid React version discrepancies

export default function AboutPageComp() {
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
    <main className='flx flex-col justify-center items-center gap-[4rem] w-full'>
      <header className='flex flex-col justify-center items-center m-auto lg:h-screen md:h-[50vh] max-sm:h-[60vh] w-full text-white relative'>
        <Image
          src={`https://img.freepik.com/free-photo/monochrome-scene-depicting-life-workers-construction-industry-site_23-2151431527.jpg?t=st=1742605959~exp=1742609559~hmac=147a15f6e7be67201457125fc0c8a0ab4196885458c126351bd3673a502a0b87&w=1380`}
          alt='Construction background'
          fill
          className='object-cover lg:object-center object-left z-[-2]' // Changed z-index to -2
          priority
        />

        {/* Added overlay div */}
        <div className='absolute inset-0 bg-black/65 z-[-1]'></div>

        <h1 className='lg:text-[4rem] md:text-[3rem] max-sm:text-[2rem] max-xs:text-[2rem] font-light capitalize '>
          about us
        </h1>
      </header>

      <section className='lg:grid lg:grid-cols-2 gap-10 w-full py-[4rem] mx-auto lg:w-[80%] flex flex-col-reverse md:px-10 max-sm:px-7 max-xs:px-5 '>
        <div className='grid grid-cols-1 content-center place-items-center gap-7 lg:w-auto md:w-full max-sm:w-full max-xs:w-full'>
          {constructionImages.map((item, index) => (
            <Image
              ref={addToRefs}
              src={item}
              alt={`Construction image ${index}`}
              width={500}
              height={500}
              key={index}
              className='object-cover object-center rounded-lg lg:w-auto md:w-full max-sm:w-full max-xs:w-full'
              priority
            />
          ))}
        </div>

        <div className='flex flex-col justify-start items-start gap-5'>
          <span
            ref={addToRefs}
            className='text-[var(--accent)] text-sm uppercase flex justify-start items-center gap-2'
          >
            <BiHome /> about us
          </span>
          <h1
            ref={addToRefs}
            className='font-normal max-xs:text-[2rem] max-sm:text-[2rem] md:text-[3rem] lg:text-[3rem] lg:w-[70%] w-full capitalize'
          >
            Building Dreams, Crafting Reality
          </h1>
          <p
            ref={addToRefs}
            className='lg:text-base md:text-2xl max-sm:text-lg max-xs:text-lg'
          >
            At Larbol Construction, we turn visions into reality. With a strong
            foundation of expertise and innovation, we specialize in delivering
            exceptional construction solutions tailored to meet our clients'
            unique needs. From residential developments to large-scale
            commercial projects, we combine precision, quality, and
            sustainability to build structures that stand the test of time. Our
            commitment to excellence and client satisfaction drives everything
            we do.
          </p>
          <div className='flex flex-col justify-start items-start gap-5 w-full py-4'>
            <h3
              ref={addToRefs}
              className='lg:text-xl md:text-2xl max-sm:text-xl max-xs:text-xl capitalize font-medium'
            >
              our mission:
            </h3>
            <div className='flex flex-col justify-start items-start gap-5 w-full'>
              {missionHighlights.map((item, index) => (
                <span
                  ref={addToRefs}
                  key={index}
                  className='lg:text-base md:text-2xl max-sm:text-lg max-xs:text-lg bg-[var(--gray)] p-3 rounded-lg'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='w-full bg-[var(--gray)] py-[4rem] mx-auto flex flex-col justify-center items-center gap-10 lg:px-[8rem] md:px-10 max-sm:px-7 max-xs:px-5 '>
        <div className='flex flex-col justify-center items-center gap-3 lg:w-[55%] w-full'>
          <span
            ref={addToRefs}
            className='text-[var(--accent)] text-sm uppercase flex justify-start items-center gap-2'
          >
            <BiHome /> meet our teams
          </span>
          <h1
            ref={addToRefs}
            className='font-normal max-xs:text-[2rem] max-sm:text-[2rem] md:text-[3rem] lg:text-[3rem] text-center w-full capitalize'
          >
            Who We Are: Expertise You Can Trust
          </h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-[3rem]'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={addToRefs}
              className='flex flex-col justify-start items-start gap-3'
            >
              <Image
                src={member.url}
                alt={member.name}
                width={500}
                height={500}
                className='object-cover object-center rounded-lg h-[250px]'
                priority
              />
              <h3 className='text-xl font-medium capitalize'>{member.name}</h3>
              <span className='text-base font-light text-[var(--accent)]'>
                {member.position}
              </span>
              <p className='text-base'>{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
