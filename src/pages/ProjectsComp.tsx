import Image from 'next/image'
import { BiCalendar } from 'react-icons/bi'
import { CgWorkAlt } from 'react-icons/cg'
import { CiLocationOff } from 'react-icons/ci'
import { TbTag } from 'react-icons/tb'

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
  return (
    <main className='flex flex-col justify-center items-center gap-[4rem]'>
      <header className='flex flex-col justify-center items-center m-auto lg:h-screen md:h-[50vh] max-sm:h-[60vh] w-full text-white relative'>
        <Image
          src={`https://cdn.pixabay.com/photo/2016/02/20/17/43/excavator-1212472_1280.jpg`}
          alt='Construction background'
          fill
          className='object-cover lg:object-center object-left z-[-2]' // Changed z-index to -2
          priority
        />

        {/* Added overlay div */}
        <div className='absolute inset-0 bg-black/65 z-[-1]'></div>

        <h1 className='lg:text-[4rem] md:text-[3rem] max-sm:text-[2rem] max-xs:text-[2rem] font-light capitalize '>
          Project{' '}
        </h1>
      </header>

      <div className='flex flex-col justify-center items-center gap-[5rem] w-full lg:w-[80%] lg:px-[0] md:px-10 max-sm:px-7 max-xs:px-5'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='flex flex-col justify-start items-start gap-[4rem] w-full'
          >
            <div className='flex justify-between items-center gap-5 w-full'>
              <div className='flex flex-col justify-start items-start gap-3'>
                <span className='text-[var(--accent)] capitalize text-sm '>
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

              <div className='flex flex-col justify-start items-start gap-4 bg-[var(--dark-blue)] p-3 rounded-md'>
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
              className='rounded-md w-full h-[60vh] object-cover'
            />
          </div>
        ))}
      </div>
    </main>
  )
}
