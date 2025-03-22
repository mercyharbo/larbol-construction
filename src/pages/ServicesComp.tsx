import Image from 'next/image'
import { BiCheck, BiHome } from 'react-icons/bi'

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

export default function ServicesComp() {
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
          // ref={addToRefs}
          className='lg:text-[4rem] md:text-[3rem] max-sm:text-[2rem] max-xs:text-[2rem] font-light capitalize '
        >
          Services
        </h1>
      </header>

      <section className='grid grid-cols-1 gap-[2rem] w-full py-[4rem] lg:w-[80%] lg:px-[0] md:px-10 max-sm:px-7 max-xs:px-5'>
        <div className='flex flex-col justify-start items-start gap-5'>
          <span className='text-sm text-[var(--accent)] uppercase flex items-center gap-3 '>
            <BiHome /> our services
          </span>
          <h1 className='lg:text-[3rem] lg:w-[60%] md:text-[3rem] max-sm:text-[2rem] w-full font-light capitalize '>
            Key differentiator and value preposition
          </h1>
        </div>

        <div className='flex gap-[3rem] flex-col lg:flex-row w-full'>
          <div className='flex flex-col gap-5'>
            {services.map((service, index) => (
              <div key={index} className='flex items-center gap-3'>
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
              className='rounded-lg col-span-1 h-full'
            />
            <Image
              src={imgurls[1]}
              alt='Construction'
              width={500}
              height={500}
              priority
              className='rounded-lg col-span-2'
            />
          </div>
        </div>
      </section>
    </main>
  )
}
