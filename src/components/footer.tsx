import Link from 'next/link'
import { CiFacebook, CiInstagram } from 'react-icons/ci'

export default function FooterComp() {
  return (
    <footer className='flex flex-col justify-between items-start lg:flex-row gap-10 w-full bg-[var(--dark-blue)] max-md:px-10 max-sm:px-7 max-xs:px-5 lg:px-[8rem] lg:py-[4rem] py-[3rem] text-[var(--text-gray)]'>
      {/* Company Info Section */}
      <div className='flex flex-col justify-start items-start gap-5 w-full lg:w-[35%]'>
        <h1 className='text-[2rem] text-[var(--accent)] w-full lg:w-[70%] capitalize'>
          larbol construction
          <span className='block text-[var(--text-gray)] text-sm mt-2'>
            Dealer in all types of construction work
          </span>
        </h1>
        <p className='text-sm'>
          At Larbol Construction, we are dedicated to delivering premium
          construction services that meet and exceed client expectations. We
          transform your ideas into reality with precision and care.
        </p>
      </div>

      {/* Services Section */}
      <div className='flex flex-col justify-start items-start gap-5'>
        <h1 className='font-semibold capitalize text-white text-xl'>
          services
        </h1>
        <div className='flex flex-col gap-3'>
          <span className=''>Road construction</span>
          <span className=''>Bridge construction</span>
          <span className=''>Building construction</span>
          <span className=''>Drainage systems</span>
          <span className=''>Project management</span>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className='flex flex-col justify-start items-start gap-5 w-full lg:w-[30%]'>
        <h1 className='font-semibold capitalize text-white text-xl'>
          contact info
        </h1>
        <div className='flex flex-col gap-3'>
          <p>
            <strong>Address:</strong> 123 Construction Avenue, Oshogbo, Osun
            State, Nigeria
          </p>
          <p>
            <strong>Phone:</strong> +234 812 345 6789
          </p>
          <p>
            <strong>Email:</strong> info@larbolconstruction.ng
          </p>
        </div>
      </div>

      {/* Socials Section */}
      <div className='flex flex-col justify-start items-start gap-5'>
        <h1 className='font-semibold capitalize text-white text-xl'>socials</h1>

        <div className='flex flex-row gap-3 items-center'>
          <Link href='#' passHref>
            <span className='text-[var(--accent)] text-[2rem] cursor-pointer'>
              <CiFacebook />
            </span>
          </Link>
          <Link href='#' passHref>
            <span className='text-[var(--accent)] text-[2rem] cursor-pointer'>
              <CiInstagram />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
