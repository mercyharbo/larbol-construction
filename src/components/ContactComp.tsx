import Image from 'next/image'
import { BiHome } from 'react-icons/bi'

export default function ContactComp() {
  return (
    <main className='flex flex-col justify-center items-center gap-[4rem]'>
      <header className='flex flex-col justify-center items-center m-auto lg:h-[80vh] md:h-[50vh] max-sm:h-[60vh] h-[calc(100vh-3.5rem)] w-full text-white relative'>
        <Image
          src={`https://cdn.pixabay.com/photo/2024/05/14/05/38/builder-8760328_1280.jpg`}
          alt='Construction background'
          fill
          className='object-cover lg:object-center object-left z-[-2]' // Changed z-index to -2
          priority
        />

        {/* Added overlay div */}
        <div className='absolute inset-0 bg-black/65 z-[-1]'></div>

        <h1 className='lg:text-[4rem] md:text-[3rem] max-sm:text-[2rem] max-xs:text-[2rem] font-light capitalize '>
          contact us
        </h1>
      </header>

      <section className='grid grid-cols-1 lg:grid-cols-2 gap-[4rem] w-full lg:py-[4rem] lg:w-[80%] md:px-10 max-sm:px-7 max-xs:px-5'>
        <div className='flex flex-col justify-start items-start gap-5'>
          <span className='text-[var(--accent)] text-sm uppercase flex justify-start items-center gap-2'>
            <BiHome /> get in touch
          </span>
          <h1 className='lg:text-[3rem] md:text-[3rem] max-sm:text-[2rem] font-light capitalize'>
            building connections, one project at a time
          </h1>
          <p className='lg:text-lg md:text-2xl max-sm:text-lg max-xs:text-lg font-light'>
            At Larbol Construction, we value your inquiries and feedback.
            Whether you're ready to start a project or have questions, our
            dedicated team is here to assist you. Let's create something
            extraordinary together.
          </p>
          <p className='lg:text-lg md:text-2xl max-sm:text-lg max-xs:text-lg font-light'>
            Reach out to us today and experience unmatched professionalism and
            expertise in construction services.
          </p>
          <button
            type='button'
            className='bg-[var(--accent)] text-black px-6 py-3 text-lg cursor-pointer hover:opacity-80'
          >
            Contact Us &rarr;
          </button>
        </div>

        <form
          action='https://formspree.io/f/your_form_id' // Replace with your Formspree endpoint
          method='POST'
          className='flex flex-col justify-start items-start gap-5 w-full'
        >
          <div className='flex flex-col gap-3 w-full'>
            <label htmlFor='name' className='text-sm text-[var(--text-gray)]'>
              Name:
            </label>
            <input
              type='text'
              name='name'
              placeholder='Name'
              required
              className='h-14 w-full bg-[var(--dark-blue)] border-none p-2 rounded-lg outline-0 '
            />
          </div>
          <div className='flex flex-col gap-3 w-full'>
            <label htmlFor='name' className='text-sm text-[var(--text-gray)]'>
              Email:
            </label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              required
              className='h-14 w-full bg-[var(--dark-blue)] border-none p-2 rounded-lg outline-0 '
            />
          </div>

          <div className='flex flex-col gap-3 w-full'>
            <label
              htmlFor='message'
              className='text-sm text-[var(--text-gray)]'
            >
              Message:
            </label>
            <textarea
              name='message'
              placeholder='Message'
              required
              className='h-36 w-full bg-[var(--dark-blue)] border-none p-2 rounded-lg outline-0 '
            ></textarea>
          </div>

          <button
            type='submit'
            className='h-14 bg-[var(--accent)] text-black w-full flex justify-center items-center '
          >
            Send Email
          </button>
        </form>
      </section>
    </main>
  )
}
