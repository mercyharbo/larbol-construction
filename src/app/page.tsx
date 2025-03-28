'use client'

import img5 from '@/assets/bridges.png'
import img4 from '@/assets/img (2).jpeg'
import img1 from '@/assets/img (5).jpeg'
import img3 from '@/assets/portrait1.jpg'
import img2 from '@/assets/portrait2.jpg'
import SliderComp from '@/components/slider'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'
import { BiHome } from 'react-icons/bi'
import { FaRegFaceGrinHearts } from 'react-icons/fa6'
import { FcCurrencyExchange } from 'react-icons/fc'
import { FiClock } from 'react-icons/fi'
import { GoArrowRight } from 'react-icons/go'
import { LuBuilding } from 'react-icons/lu'
import { MdOutlineRecycling } from 'react-icons/md'
import { RiShieldCheckLine } from 'react-icons/ri'

gsap.registerPlugin(useGSAP, ScrollTrigger) // register the hook to avoid React version discrepancies

const whyChooseUs = [
  {
    icon: <LuBuilding className='text-[var(--accent)]' />,
    title: 'Expert Craftsmanship',
    description:
      'Our skilled team delivers top-notch construction with attention to every detail.',
  },
  {
    icon: <RiShieldCheckLine className='text-[var(--accent)]' />,
    title: 'Guaranteed Safety',
    description:
      'We prioritize safety on all projects, ensuring compliance with standards and protocols.',
  },
  {
    icon: <FiClock className='text-[var(--accent)]' />,
    title: 'Timely Delivery',
    description:
      'We stick to our schedules, delivering quality work right on time, every time.',
  },
  {
    icon: <FcCurrencyExchange className='text-[var(--accent)]' />,
    title: 'Cost Efficiency',
    description:
      'We offer competitive pricing without compromising on the quality of materials or service.',
  },
  {
    icon: <FaRegFaceGrinHearts className='text-[var(--accent)]' />,
    title: 'Customer Satisfaction',
    description:
      'Our customer-first approach ensures your happiness and a stress-free experience.',
  },
  {
    icon: <MdOutlineRecycling className='text-[var(--accent)]' />,
    title: 'Eco-Friendly Practices',
    description:
      'We use sustainable materials and methods to minimize our environmental impact.',
  },
]

const constructionImages = [
  'https://img.freepik.com/free-photo/view-building-concrete-house_1398-2994.jpg?t=st=1742424400~exp=1742428000~hmac=f421964b3d0bd07f4b0e80f19478ad2d62cbc1ea1e286da5b39e54c783de30ba&w=1380',
  'https://img.freepik.com/free-photo/building-concrete-house_1398-2987.jpg?t=st=1742420065~exp=1742423665~hmac=ad4e43b24832dde49e1d3de995350c88880b7c9c48646fd7ebca917066da2315&w=1380',
]

const missionHighlights = [
  'Delivering top-quality construction solutions with precision and innovation to exceed expectations.',
  'Building responsibly with eco-friendly materials and practices for a sustainable future.',
  'Prioritizing client satisfaction through tailored services and fostering trust and transparency.',
]

const services = [
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

const imageUrls = [
  'https://img.freepik.com/free-photo/heavy-machines-construction-workers-working-building_181624-8234.jpg?t=st=1742499683~exp=1742503283~hmac=bea44a6dc3461f1bc0b49548f56bef078e7472e5a5f42f541d642a2a8d173f05&w=1060',
  'https://img.freepik.com/free-photo/building-new-concrete-houses_1398-3932.jpg?t=st=1742499725~exp=1742503325~hmac=c7099ace4458123859a610b8c607a09ad00197e614fe6bf133b4516cfe658df3&w=1380',
  'https://img.freepik.com/free-photo/scene-construction-site-with-equipment_23-2151317290.jpg?t=st=1742499747~exp=1742503347~hmac=64b33d74f41b5431da168142b356753902b76b474773e664c14bbb8beb18ff05&w=1380',
  'https://img.freepik.com/free-photo/scene-construction-site-with-equipment_23-2151317286.jpg?t=st=1742499767~exp=1742503367~hmac=a9140383cbed879257c769eef2b6a702635a1e5b236d448a59d9a23a783ef827&w=1380',
  'https://img.freepik.com/free-photo/scene-construction-site-with-equipment_23-2151317260.jpg?t=st=1742499817~exp=1742503417~hmac=d59a76e43988e8a0291eb94bae947f771645db0177ff0f42286a2608fbec54fb&w=1380',
]

const testimonials = [
  {
    text: 'Larbol Construction turned our vision into reality with such precision and care. We couldn’t have asked for a better team!',
    author: 'Adebayo Adekunle',
  },
  {
    text: 'From the foundation to the finishing touches, Larbol Construction made the entire process seamless and stress-free!',
    author: 'Chinwe Okeke',
  },
  {
    text: 'Working with Larbol Construction was the best decision we made. Their dedication and craftsmanship are truly unmatched!',
    author: 'Fatima Abdullahi',
  },
  {
    text: 'I’m blown away by the quality of work Larbol Construction delivered. They truly care about their clients’ satisfaction!',
    author: 'Emeka Obi',
  },
  {
    text: 'Larbol Construction took our dream project and made it even better than we imagined. Thank you for your exceptional service!',
    author: 'Yetunde Afolabi',
  },
  {
    text: 'The team at Larbol Construction went above and beyond. Their professionalism and expertise are simply outstanding!',
    author: 'Ifeanyi Nnamdi',
  },
]

const sliderImgs = [
  {
    id: 1,
    imageUrl:
      'https://img.freepik.com/free-photo/heavy-machines-construction-workers-working-building_181624-8234.jpg?t=st=1742825808~exp=1742829408~hmac=6bd8796392a5d0f981b1a87693b7ebeb1238cf94db51c0ff76ff70f75e4b7249&w=1060',
    title: 'Heavy Construction',
  },
  {
    id: 2,
    imageUrl:
      'https://img.freepik.com/free-photo/construction-workers-sunset_53876-138180.jpg?t=st=1742825554~exp=1742829154~hmac=d333c046e5863c022a2b43cea78371cc44a6e064b415f3349cd92cf95a93e67d&w=1380',
    title: 'Construction Workers',
  },
  {
    id: 3,
    imageUrl:
      'https://img.freepik.com/free-photo/large-building-site_1127-3252.jpg?t=st=1742825904~exp=1742829504~hmac=a4ca4c3bd2c6db6cf0209ea7ea248770766dac9f933315c11a95a7f297d6484d&w=1380',
    title: 'Building Site',
  },
  {
    id: 4,
    imageUrl:
      'https://img.freepik.com/free-photo/construction-site_53876-23128.jpg?t=st=1742825996~exp=1742829596~hmac=47ca4c2927ad2993e69be1344803edacfd47e9c43654eda96a8adf2c091c106a&w=1380',
    title: 'Construction Site',
  },
  {
    id: 5,
    imageUrl: img1.src,
    title: 'Construction Project',
  },
]

export default function Home() {
  const container = useRef(null)
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

  useGSAP(
    () => {
      const tl = gsap.timeline()

      tl.from('header h1', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
      })
        .from(
          'header p',
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.5'
        )
        .from(
          'header button',
          {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: 'power4.out',
          },
          '-=0.3'
        )
    },
    { scope: container }
  )

  return (
    <main className='flex flex-col items-center justify-center gap-[4rem] text-white w-full m-auto'>
      <SliderComp slides={sliderImgs} />

      <section
        id='services'
        className='grid grid-cols-1 lg:grid-cols-2 content-center place-items-center w-full gap-10 lg:w-[80%] md:px-10 max-sm:px-7 max-xs:px-5'
      >
        <div className='flex flex-col justify-start items-start gap-5'>
          <span
            ref={addToRefs}
            className='item text-[var(--accent)] text-sm uppercase flex justify-start items-center gap-2'
          >
            <BiHome /> services
          </span>
          <h2
            ref={addToRefs}
            className='item text-[2.5rem] font-light capitalize w-full lg:w-[80%]'
          >
            Services we offer
          </h2>
          <p
            ref={addToRefs}
            className='item lg:text-lg md:text-2xl max-sm:text-lg text-left font-light w-full lg:w-[90%]'
          >
            We offer a wide range of construction services to meet your needs.
            From planning to execution
          </p>
          <ul
            ref={addToRefs}
            className='list-disc grid grid-cols-1 gap-5 space-x-5 text-left pl-4 lg:text-base md:text-2xl max-sm:text-lg max-xs:text-lg'
          >
            <li> Road Construction</li>
            <li> Bridge Development</li>
            <li> Building Construction</li>
            <li> Drainage Systems</li>
            <li> Infrastructure Planning</li>
            <li> Project Management</li>
          </ul>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:w-auto md:w-full max-sm:w-full max-xs:w-full'>
          <Image
            src={img2}
            alt='Construction background'
            width={500}
            height={500}
            className='object-cover object-center lg:h-[600px] lg:w-[400px] md:h-[400px] md:min-w-full max-sm:h-[300px] max-xs:h-[300px] lg:rounded-l-lg 
            md:rounded-lg max-sm:rounded-lg max-xs:rounded-lg'
            priority
            ref={addToRefs}
          />
          <div className='hidden lg:grid lg:grid-cols-1 gap-5 w-full'>
            <Image
              src={img3}
              alt='Construction background'
              width={500}
              height={500}
              className='object-cover object-center lg:h-[290px] lg:w-[400px] rounded-r-lg'
              priority
              ref={addToRefs}
            />
            <Image
              src={img4}
              alt='Construction background'
              width={500}
              height={500}
              className='object-cover object-center lg:h-[290px] lg:w-[400px] rounded-r-lg'
              priority
              ref={addToRefs}
            />
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-start items-start gap-10 w-full lg:w-[80%] md:px-10 max-sm:px-7 max-xs:px-5'>
        <div className='flex flex-col justify-start items-start gap-3 w-full'>
          <span
            ref={addToRefs}
            className='text-[var(--accent)] text-sm uppercase flex justify-start items-center gap-2'
          >
            <BiHome /> why choose us
          </span>

          <div className='flex flex-col lg:justify-between lg:items-center gap-5 w-full lg:flex-row'>
            <h1
              ref={addToRefs}
              className='lg:text-[3rem] md:text-[2.5rem] max-sm:text-[2rem] max-xs:text-[2rem] max-xs:w-full capitalize font-light w-full lg:w-[50%]'
            >
              elevating home construction standards
            </h1>

            <button
              ref={addToRefs}
              type='button'
              className='bg-[var(--accent)] w-[200px] lg:w-auto text-black px-6 py-3 cursor-pointer hover:opacity-80'
            >
              Explore More &rarr;
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 space-y-8 w-full'>
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className='flex flex-col justify-start items-start gap-5'
            >
              <div className='ring-1 ring-[var(--text-gray)] p-3 rounded-full'>
                {item.icon}
              </div>
              <h3 className='lg:text-[1.5rem] md:text-[2rem] max-sm:text-base max-xs:text-base font-normal'>
                {item.title}
              </h3>
              <p className='lg:text-lg md:text-2xl max-sm:text-lg max-xs:text-lg font-light'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className='lg:w-[80%] lg:mt-[5rem] w-[90%] border-[var(--text-gray)]' />

      <video
        ref={addToRefs}
        className='lg:w-[80%]'
        controls
        autoPlay
        muted
        loop
      >
        <source
          src='https://cdn.pixabay.com/video/2020/09/29/51102-463106269_large.mp4'
          type='video/mp4'
        />
      </video>

      <section className='lg:grid lg:grid-cols-2 gap-10 w-full lg:w-[80%] flex flex-col-reverse md:px-10 max-sm:px-7 max-xs:px-5 '>
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
            {services.map((item) => (
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
                />
                <h3 className='lg:text-[1.5rem] md:text-[2rem] max-sm:text-[1.5rem] max-xs:text-[1.5rem] font-normal'>
                  {item.title}
                </h3>
                <p className='lg:text-base md:text-2xl max-sm:text-base max-xs:text-base text-[var(--text-gray)] font-light'>
                  {item.description}
                </p>
                <button
                  type='button'
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

        <hr ref={addToRefs} className='w-full border-[var(--text-gray)]' />

        <section className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-full'>
          {/* Box 1 */}
          <div
            ref={addToRefs}
            className='bg-[var(--text-gray)] h-[15rem] p-6 rounded-lg flex flex-col justify-center items-center gap-3'
          >
            <h2 className='lg:text-4xl md:text-5xl max-sm:text-4xl'>10+</h2>
            <p className='lg:text-lg md:text-2xl max-sm:text-xl max-xs:text-xl text-[var(--gray)]'>
              Years of Experience
            </p>
          </div>

          {/* Box 2 */}
          <div
            ref={addToRefs}
            className='bg-[var(--primary)] h-[15rem] text-gray-100 p-6 rounded-lg flex flex-col justify-center items-center gap-3'
          >
            <h2 className='lg:text-4xl md:text-5xl max-sm:text-4xl text-[var(--accent)] '>
              4.8/5
            </h2>
            <p className='lg:text-lg md:text-2xl max-sm:text-xl max-xs:text-xl text-[var(--text-gray)]'>
              Ratings from Customers
            </p>
          </div>

          {/* Box 4 */}
          <div
            ref={addToRefs}
            className='bg-[var(--text-gray)] h-[15rem]  p-6 rounded-lg flex flex-col justify-center items-center gap-3'
          >
            <h2 className='lg:text-4xl md:text-5xl max-sm:text-4xl'>300+</h2>
            <p className='lg:text-lg md:text-2xl max-sm:text-xl max-xs:text-xl text-[var(--gray)]'>
              Successful Project Completion
            </p>
          </div>
        </section>
      </section>

      <section className='lg:w-[80%] md:px-10 max-sm:px-7 max-xs:px-5 w-full flex flex-col justify-center items-center gap-[5rem] py-[1rem] lg:py-[4rem]'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 w-full'>
          <div className='flex flex-col justify-start items-start gap-2'>
            <span
              ref={addToRefs}
              className='text-sm text-[var(--accent)] uppercase flex justify-start items-center gap-2'
            >
              <BiHome /> our projects
            </span>
            <h1
              ref={addToRefs}
              className='lg:text-[3rem] md:text-[3rem] max-sm:text-[2rem] max-xs:text-[2rem] font-light capitalize'
            >
              recent projects
            </h1>
          </div>

          <button
            ref={addToRefs}
            type='button'
            className='bg-[var(--accent)] w-[200px] lg:w-auto text-black px-6 py-3 cursor-pointer hover:opacity-80'
          >
            Explore More &rarr;
          </button>
        </div>

        <div className='flex flex-col justify-center items-center gap-10 w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 content-center place-items-center gap-5 w-full'>
            {imageUrls.slice(0, 2).map((url, index) => (
              <Image
                ref={addToRefs}
                src={url}
                alt={`Construction image ${index}`}
                width={500}
                height={500}
                key={index}
                className='object-cover object-center rounded-lg w-full h-full'
                priority
              />
            ))}
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-full'>
            {imageUrls.slice(2, 5).map((url, index) => (
              <Image
                ref={addToRefs}
                src={url}
                alt={`Construction image ${index}`}
                width={500}
                height={500}
                key={index}
                className='object-cover object-center rounded-lg w-full'
                priority
              />
            ))}
          </div>
        </div>
      </section>

      <section className='lg:w-[80%] md:px-10 max-sm:px-7 max-xs:px-5 w-full flex flex-col justify-center items-center gap-[2rem] py-[4rem]'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <span
            ref={addToRefs}
            className='text-sm text-[var(--accent)] uppercase flex justify-start items-center gap-2'
          >
            <BiHome /> testimony
          </span>
          <h1
            ref={addToRefs}
            className='lg:text-[3rem] md:text-[3rem] max-sm:text-[2rem] font-light capitalize'
          >
            our success stories
          </h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-full'>
          {testimonials.map((testimonial, index) => (
            <div
              ref={addToRefs}
              key={index}
              className='bg-[var(--dark-blue)] p-6 rounded-lg flex flex-col justify-start items-start gap-3'
            >
              <p className='lg:text-base md:text-2xl max-sm:text-base max-xs:text-base text-white'>
                {testimonial.text}
              </p>
              <p className='text-sm text-white font-light'>
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </section>

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
