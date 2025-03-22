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
import { GoArrowRight } from 'react-icons/go'
import { MdOutlineThumbUp } from 'react-icons/md'

gsap.registerPlugin(useGSAP, ScrollTrigger) // register the hook to avoid React version discrepancies

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

const faqs = [
  {
    question: 'What services does Larbol Construction offer?',
    answer:
      'We specialize in residential and commercial construction, home remodeling, renovations, general contracting, and custom construction projects. Our team ensures quality craftsmanship and reliable service at every step.',
  },
  {
    question: 'Why should I choose Larbol Construction for my project?',
    answer:
      'At Larbol Construction, we prioritize your vision and turn it into reality with precision and expertise. With years of experience, a highly skilled team, and a commitment to delivering exceptional results on time and within budget, we’re your trusted partner for all construction needs.',
  },
  {
    question: 'How can I get a quote for my project?',
    answer:
      'Getting started is easy! Simply contact us through our website or give us a call. Share the details of your project, and our team will provide you with a tailored, no-obligation quote that matches your specific requirements.',
  },
]

const servicesData = [
  {
    id: 1,
    title: 'Road Construction',
    description:
      'We specialize in designing and constructing durable and efficient roadways to meet modern infrastructure needs.',
    imageUrl:
      'https://img.freepik.com/free-photo/heavy-machinery-used-construction-industry-engineering_23-2151307772.jpg?t=st=1742426244~exp=1742429844~hmac=1efe016d57d4ac6c95af4e3d3132d219a0e0c9d901d0eef7481374c8d72faef5&w=1800', // Replace with a specific image if needed
  },
  {
    id: 2,
    title: 'Bridge Development',
    description:
      'Our team creates robust bridge solutions that connect communities with precision and engineering excellence.',
    imageUrl:
      'https://img.freepik.com/free-photo/new-road-construction_1385-3188.jpg?t=st=1742426027~exp=1742429627~hmac=bb88ef0746e8b87279eaea68939cf349bc097694e49f4339b3fc0667a8f8d489&w=1380', // Replace with a specific image if needed
  },
  {
    id: 3,
    title: 'Building Construction',
    description:
      'From residential to commercial projects, we deliver high-quality structures tailored to your vision.',
    imageUrl:
      'https://img.freepik.com/free-photo/building-new-concrete-house_1398-2995.jpg?t=st=1742420978~exp=1742424578~hmac=452e12dbb1dab8a4afb0a6f04250e813fab1e0c9a6c4d0f259b664cd258e1be0&w=1380', // Replace with a specific image if needed
  },
  {
    id: 4,
    title: 'Drainage Systems',
    description:
      'We implement effective drainage solutions to manage water flow and prevent environmental challenges.',
    imageUrl:
      'https://img.freepik.com/free-photo/new-recently-built-highway-brcko-district-bosnia-herzegovina_181624-3266.jpg?t=st=1742425820~exp=1742429420~hmac=1667719d2493cd87c93d5bac035e63b8d0a9b8818e85931115a4ffed38c5e3a5&w=1380', // Replace with a specific image if needed
  },
  {
    id: 5,
    title: 'Infrastructure Planning',
    description:
      'Strategic planning services that pave the way for future-ready and sustainable developments.',
    imageUrl:
      'https://img.freepik.com/free-photo/construction-concept-image-helmet-rolled-blueprints-wooden-boards-retro-style_1423-263.jpg?t=st=1742425636~exp=1742429236~hmac=499f003d3be4ceac14dfaf7fca797b12b0c98ccf2bb15f5a83ddc1fbc4dd94a0&w=826', // Replace with a specific image if needed
  },
  {
    id: 6,
    title: 'Project Management',
    description:
      'End-to-end project management to ensure timely, cost-effective, and high-quality outcomes.',
    imageUrl:
      'https://img.freepik.com/free-photo/helmet-drafting-tools_23-2147785530.jpg?t=st=1742425587~exp=1742429187~hmac=2414be0fe93b489743f22e4aa0b892cde4c892c0c1769229b777fdada5073826&w=826', // Replace with a specific image if needed
  },
]

const contentSections = [
  {
    title: 'Unmatched Construction Expertise',
    description:
      'With years of experience, Larbol Construction delivers exceptional craftsmanship and reliable service for all residential and commercial projects.',
    icon: <FaTools />, // Represents construction tools and expertise
  },
  {
    title: 'Premium Quality Materials',
    description:
      'We use only top-quality materials to ensure durability, beauty, and functionality in every project we undertake.',
    icon: <GiMaterialsScience />, // Represents materials and quality
  },
  {
    title: 'Tailored Construction Solutions',
    description:
      'At Larbol Construction, we bring your unique vision to life with personalized solutions designed to meet your specific needs.',
    icon: <FaHandsHelping />, // Represents personalized assistance
  },
  {
    title: 'Cost-Effective Excellence',
    description:
      'Get premium construction services that fit your budget without compromising on quality or reliability.',
    icon: <FaDollarSign />, // Represents affordability
  },
  {
    title: 'Client Satisfaction Guaranteed',
    description:
      'We’re committed to exceeding expectations through seamless communication, transparency, and top-notch results.',
    icon: <MdOutlineThumbUp />, // Represents satisfaction and trust
  },

  {
    title: 'Timely and Efficient Services',
    description:
      'Our team ensures that every project is completed on schedule with precision and attention to detail.',
    icon: <FaRegClock />, // Represents timeliness and efficiency
  },
]

const processSteps = [
  {
    title: 'Initial Consultation',
    description:
      'We start by understanding your vision and needs during an in-depth consultation. Our team listens to your ideas, discusses possibilities, and assesses the scope of the project to ensure alignment with your goals.',
    icon: <FiMessageCircle />, // Represents communication
  },
  {
    title: 'Design and Planning',
    description:
      'Our architects and planners collaborate to create innovative, functional designs. We ensure every detail is tailored to meet your specifications, while providing comprehensive plans that outline timelines and budgets.',
    icon: <FiPenTool />, // Represents design and creativity
  },
  {
    title: 'Construction',
    description:
      'With precision and care, our construction team transforms designs into reality. We prioritize quality, safety, and efficiency to deliver exceptional results, all while keeping you updated throughout the process.',
    icon: <FiTool />, // Represents construction work
  },
  {
    title: 'Quality Assurance and Delivery',
    description:
      'Before handing over the finished project, we perform thorough quality checks to ensure everything meets our high standards. Your satisfaction is our priority, and we guarantee the project is completed on time and to perfection.',
    icon: <FiCheckCircle />, // Represents assurance and approval
  },
]

export default function ServicesComp() {
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
      <header className='flex flex-col justify-center items-center m-auto lg:h-screen md:h-[50vh] max-sm:h-[60vh] w-full text-white relative'>
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
          {contentSections.map((section, index) => (
            <div
              key={index}
              ref={addToRefs}
              className='flex flex-col justify-center items-center gap-3 text-center bg-[var(--dark-blue)] p-5 rounded-md w-full'
            >
              <div className='flex justify-center items-center border border-[var(--accent)] rounded-full w-14 h-14 p-2 text-[1.5rem] text-['>
                {section.icon}
              </div>
              <h1 className='text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] max-sm:text-[1rem]'>
                {section.title}
              </h1>
              <p className='text-[var(--text-gray)]'>{section.description}</p>
            </div>
          ))}
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

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 space-y-10 w-full'>
            {servicesData.map((item) => (
              <div
                ref={addToRefs}
                key={item.id}
                className='flex flex-col justify-start items-start gap-3'
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={500}
                  height={500}
                  className='object-cover object-center lg:h-[250px] md:h-[300px] max-sm:h-[250px] max-xs:h-[250px] w-full rounded-lg'
                  priority
                  ref={addToRefs}
                />
                <h3
                  ref={addToRefs}
                  className='lg:text-[1.5rem] md:text-[2rem] max-sm:text-[1.5rem] max-xs:text-[1.5rem] font-normal'
                >
                  {item.title}
                </h3>
                <p
                  ref={addToRefs}
                  className='lg:text-base md:text-2xl max-sm:text-base max-xs:text-base text-[var(--text-gray)] font-light'
                >
                  {item.description}
                </p>
                <button
                  type='button'
                  ref={addToRefs}
                  className='cursor-pointer hover:opacity-80 flex justify-start items-center gap-3 group lg:text-lg md:text-xl max-sm:text-lg max-xs:text-lg'
                >
                  Learn More{' '}
                  <span className='flex justify-center items-center w-9 h-9 ring-1 ring-white rounded-full group-hover:text-black group-hover:bg-[var(--accent)] group-hover:ring-0'>
                    <GoArrowRight />
                  </span>
                </button>
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
          {processSteps.map((item, index) => (
            <div key={index} ref={addToRefs} className='relative'>
              <div className='flex flex-col justify-center items-center gap-3 text-center h-full bg-[var(--dark-blue)] p-5 rounded-md w-full'>
                <div className='flex justify-center items-center border border-[var(--accent)] rounded-full w-14 h-14 p-2 text-[1.5rem] text-['>
                  {item.icon}
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
          ))}
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
