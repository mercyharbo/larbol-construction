'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { BiCheck, BiHome } from 'react-icons/bi'
import {
  FaDollarSign,
  FaHandsHelping,
  FaRegClock,
  FaTools,
} from 'react-icons/fa'
import {
  FiArrowDown,
  FiArrowRight,
  FiCheckCircle,
  FiMessageCircle,
  FiPenTool,
  FiSun,
  FiTool,
} from 'react-icons/fi'
import { GiMaterialsScience } from 'react-icons/gi'
import { MdOutlineThumbUp } from 'react-icons/md'

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

export default function ServicesComp({
  servicesData,
  contentSections,
  processSteps,
  faqs,
}: ServicesCompProps) {
  const [isActive, setIsActive] = useState<number | null>(null)
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
          src={`https://cdn.pixabay.com/photo/2015/09/29/22/49/blueprint-964629_1280.jpg`}
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
          Services
        </h1>
      </header>

      <section className='grid grid-cols-1 gap-[2rem] w-full py-[0] lg:w-[80%] lg:px-[0] md:px-10 max-sm:px-7 max-xs:px-5'>
        <div className='flex flex-col justify-start items-start gap-5'>
          <span
            ref={addToRefs}
            className='text-sm text-[var(--accent)] uppercase flex items-center gap-3 '
          >
            <BiHome /> our services
          </span>
          <h1
            ref={addToRefs}
            className='lg:text-[3rem] lg:w-[60%] md:text-[3rem] max-sm:text-[2rem] w-full font-light capitalize '
          >
            Key differentiator and value preposition
          </h1>
        </div>

        <div className='flex gap-[3rem] flex-col lg:flex-row w-full'>
          <div className='flex flex-col gap-5'>
            {services.map((service, index) => (
              <div
                key={index}
                ref={addToRefs}
                className='flex items-center gap-3'
              >
                <BiCheck className='text-[var(--accent)] border border-[var(--accent)] w-6 h-6 p-1 rounded-full ' />
                <span>{service}</span>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-3 gap-5 w-full lg:w-[70%]'>
            <Image
              src={imgurls[0]}
              alt='Construction'
              width={500}
              height={500}
              priority
              ref={addToRefs}
              className='rounded-lg col-span-1 h-full'
            />
            <Image
              src={imgurls[1]}
              alt='Construction'
              width={500}
              height={500}
              priority
              ref={addToRefs}
              className='rounded-lg col-span-2'
            />
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center gap-[4rem] w-full lg:w-[80%] lg:px-[0] md:px-10 max-sm:px-7 max-xs:px-5'>
        <div className='flex flex-col justify-center items-center gap-3 w-full lg:w-[60%]'>
          <span
            ref={addToRefs}
            className='text-[var(--accent)] text-sm uppercase flex justify-center items-center gap-2'
          >
            <BiHome /> why choose us
          </span>
          <h1
            ref={addToRefs}
            className='lg:text-[3rem] md:text-[3rem] max-sm:text-[2rem] text-center'
          >
            Why we stand out from the competition
          </h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 w-full'>
          {contentSections.map((section, index) => {
            let IconComponent
            switch (section.icon) {
              case 'FaTools':
                IconComponent = FaTools
                break
              case 'GiMaterialsScience':
                IconComponent = GiMaterialsScience
                break
              case 'FaHandsHelping':
                IconComponent = FaHandsHelping
                break
              case 'FaDollarSign':
                IconComponent = FaDollarSign
                break
              case 'MdOutlineThumbUp':
                IconComponent = MdOutlineThumbUp
                break
              case 'FaRegClock':
                IconComponent = FaRegClock
                break
              default:
                IconComponent = FaTools
            }
            return (
              <div
                key={index}
                ref={addToRefs}
                className='group flex flex-col justify-center items-center gap-5 text-center bg-[var(--dark-blue)] p-8 rounded-lg w-full hover:bg-[var(--gray)] hover:shadow-[var(--accent)]/10'
              >
                <div className='flex justify-center items-center border border-[var(--accent)] rounded-full w-16 h-16 p-2 text-[1.8rem] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black transition-all duration-300'>
                  <IconComponent />
                </div>
                <h1 className='text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] max-sm:text-[1rem] font-light group-hover:text-[var(--accent)] transition-colors duration-300'>
                  {section.title}
                </h1>
                <p className='text-[var(--text-gray)] group-hover:text-white/80 transition-colors duration-300'>
                  {section.description}
                </p>
                <div className='w-0 h-[2px] bg-[var(--accent)] group-hover:w-20 transition-all duration-300'></div>
              </div>
            )
          })}
        </div>
      </section>

      <section className='bg-[var(--gray)] w-full px-5 py-[4rem] lg:px-[8rem] flex flex-col justify-center items-center gap-10 '>
        <div className='flex flex-col justify-center items-center gap-10 '>
          <div className='flex flex-col justify-center items-center gap-4 w-full text-center lg:w-[50%]'>
            <span
              ref={addToRefs}
              className='text-[var(--accent)] text-sm uppercase flex justify-center items-center gap-2'
            >
              <BiHome />
              our services
            </span>
            <h1
              ref={addToRefs}
              className='lg:text-[3rem] md:text-[3rem] max-sm:text-[2rem] font-light capitalize '
            >
              Crafting Solutions, Building Excellence
            </h1>
            <p
              ref={addToRefs}
              className='lg:text-base md:text-2xl max-sm:text-base max-xs:text-background text-[var(--text-gray)]'
            >
              Our services are designed to bring your vision to life, combining
              expertise, innovation, and reliability to deliver exceptional
              construction solutions that exceed expectations.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 w-full'>
            {servicesData.map((service, index) => (
              <div
                ref={addToRefs}
                key={service.id}
                className='flex flex-col justify-start items-start gap-4 group relative overflow-hidden bg-gradient-to-b from-[var(--dark-blue)] to-[var(--dark-blue)]/80 rounded-xl p-6 hover:shadow-[var(--accent)]/20 hover:translate-y-[-5px] hover:bg-gradient-to-b hover:from-[var(--dark-blue)] hover:to-[var(--accent)]/10'
              >
                <div className='relative w-full overflow-hidden rounded-lg'>
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={500}
                    height={500}
                    className='object-cover object-center lg:h-[250px] md:h-[300px] max-sm:h-[250px] max-xs:h-[250px] w-full transition-transform duration-700 group-hover:scale-110'
                    priority
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                </div>
                <h3 className='lg:text-[1.5rem] md:text-[2rem] max-sm:text-[1.5rem] max-xs:text-[1.5rem] font-medium text-white group-hover:text-[var(--accent)] transition-colors duration-500'>
                  {service.title}
                </h3>
                <p className='lg:text-base md:text-2xl max-sm:text-base max-xs:text-base text-[var(--text-gray)] font-light group-hover:text-white/90 transition-colors duration-500'>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center gap-[4rem] w-full lg:px-[6rem] md:px-10 max-sm:px-7 max-xs:px-5'>
        <div className='flex flex-col justify-center items-center gap-3 w-full lg:w-[60%]'>
          <span
            ref={addToRefs}
            className='text-[var(--accent)] text-sm uppercase flex justify-center items-center gap-2'
          >
            <FiSun /> how it works
          </span>
          <h1
            ref={addToRefs}
            className='lg:text-[3rem] md:text-[3rem] max-sm:text-[2rem] text-center'
          >
            From Vision to Reality: How We Build Your Dreams
          </h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 w-full'>
          {processSteps.map((item, index) => {
            let IconComponent
            switch (item.icon) {
              case 'FiMessageCircle':
                IconComponent = FiMessageCircle
                break
              case 'FiPenTool':
                IconComponent = FiPenTool
                break
              case 'FiTool':
                IconComponent = FiTool
                break
              case 'FiCheckCircle':
                IconComponent = FiCheckCircle
                break
              default:
                IconComponent = FiMessageCircle
            }
            return (
              <div key={index} ref={addToRefs} className='relative'>
                <div className='flex flex-col justify-center items-center gap-3 text-center h-full bg-[var(--dark-blue)] p-5 rounded-md w-full'>
                  <div className='flex justify-center items-center border border-[var(--accent)] rounded-full w-14 h-14 p-2 text-[1.5rem] text-[var(--accent)]'>
                    <IconComponent />
                  </div>
                  <h1 className='text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] max-sm:text-[1rem]'>
                    {item.title}
                  </h1>
                  <p className='text-[var(--text-gray)]'>{item.description}</p>
                </div>
                {index !== processSteps.length - 1 && (
                  <div className='lg:hidden h-5 border-r-2 border-dashed border-[var(--accent)] absolute left-1/2 -bottom-5'></div>
                )}
              </div>
            )
          })}
        </div>

        {/* Arrow Section with Dashed Lines */}
        <div ref={addToRefs} className='hidden lg:flex justify-center w-full'>
          <div className='relative flex items-center justify-center w-full'>
            {/* Dashed Line */}
            <div className='absolute w-full h-0 border-t-2 border-dashed border-[var(--gray)] opacity-50 top-1/2 transform -translate-y-1/2'></div>

            {/* Arrows */}
            <div className='flex justify-between items-center gap-5 w-full relative z-10'>
              {processSteps.map((_, index) => (
                <div
                  key={index}
                  className='flex items-center justify-center  w-full gap-5'
                >
                  <div className='w-12 h-12 rounded-full border border-[var(--accent)] flex items-center justify-center'>
                    {index === processSteps.length - 1 ? (
                      <FiArrowDown className='text-[var(--accent)] text-lg' />
                    ) : (
                      <FiArrowRight className='text-[var(--accent)] text-lg' />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-start items-start gap-[4rem] w-full py-[4rem] lg:px-[8rem] md:px-10 max-sm:px-7 max-xs:px-5'>
        <div className='flex flex-col justify-start items-start gap-3 w-full lg:w-[60%]'>
          <span
            ref={addToRefs}
            className='text-[var(--accent)] text-sm uppercase flex justify-start items-center gap-2'
          >
            <BiHome /> frequently asked questions
          </span>
          <h1
            ref={addToRefs}
            className='font-light max-xs:text-[2rem] max-sm:text-[2rem] md:text-[3rem] lg:text-[3rem] capitalize'
          >
            Everything you need to know about our services and solutions
          </h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-[4rem]'>
          <Image
            ref={addToRefs}
            src={`https://img.freepik.com/free-photo/monochrome-scene-depicting-life-workers-construction-industry-site_23-2151431480.jpg?t=st=1742617115~exp=1742620715~hmac=c4b502770a5ee0f543c2a67e78754a4d0c1cf8c20e8d48834511ef703f68d822&w=1380`}
            alt='Construction background'
            width={500}
            height={500}
            className='object-cover object-center rounded-lg h-full md:w-full max-sm:w-full max-xs:w-full'
            priority
          />

          <div className='flex flex-col justify-start items-start gap-5'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`p-5 rounded-lg w-full ${
                  isActive === index
                    ? 'bg-[var(--gray)]'
                    : 'bg-[var(--dark-blue)]'
                }`}
                id={`faq-${index}`}
              >
                <button
                  onClick={() => {
                    const answer = document.getElementById(`answer-${index}`)
                    answer?.classList.toggle('hidden')
                    setIsActive(isActive === index ? null : index)
                  }}
                  className='flex justify-between items-center w-full text-left'
                >
                  <h3 className='text-xl font-medium text-[var(--text-gray)]'>
                    {faq.question}
                  </h3>
                  <span className='text-2xl'>+</span>
                </button>
                <p id={`answer-${index}`} className='text-base mt-3 hidden'>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
