import Link from 'next/link'
import { CiFacebook, CiInstagram } from 'react-icons/ci'

export default function FooterComp() {
  return (
    <footer className='flex flex-col justify-between items-start lg:flex-row gap-10 w-full bg-[var(--dark-blue)] md:px-10 max-sm:px-7 max-xs:px-5 lg:px-[8rem] lg:py-[4rem] py-[3rem] text-[var(--text-gray)]'>
      {/* Company Info Section */}
      <div className='flex flex-col justify-start items-start gap-5 w-full lg:w-[35%]'>
        <div className='flex flex-col gap-4'>
          <Link href='/' className='group'>
            <div className='flex flex-col'>
              <span className='text-3xl font-bebas-neue tracking-wider bg-gradient-to-r from-[var(--accent)] via-white to-[var(--accent)] bg-clip-text text-transparent transition-all duration-300'>
                LARBOL
              </span>
              <span className='text-sm font-playfair tracking-widest text-gray-300 uppercase transition-colors duration-300'>
                Construction
              </span>
            </div>
          </Link>
          <p className='text-gray-300 max-w-md'>
            Building Excellence, Crafting Dreams. Your trusted partner in
            construction and development.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className='flex flex-col justify-start items-start gap-5'>
        <h1 className='font-semibold capitalize text-white lg:text-xl md:text-2xl max-sm:text-lg'>
          our services
        </h1>
        <div className='flex flex-col gap-3 lg:text-base md:text-lg max-sm:text-base'>
          <span className=''>Road construction</span>
          <span className=''>Bridge construction</span>
          <span className=''>Building construction</span>
          <span className=''>Drainage systems</span>
          <span className=''>Project management</span>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className='flex flex-col justify-start items-start gap-5 w-full lg:w-[30%]'>
        <h1 className='font-semibold capitalize text-white lg:text-xl md:text-2xl max-sm:text-lg'>
          contact info
        </h1>
        <div className='flex flex-col gap-3 lg:text-base md:text-lg max-sm:text-base'>
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
        <h1 className='font-semibold capitalize text-white lg:text-xl md:text-2xl max-sm:text-lg'>
          socials
        </h1>

        <div className='flex flex-row gap-3 items-center'>
          <Link
            href='https://web.facebook.com/bolaafoo'
            passHref
            target='_blank'
          >
            <span className='text-[var(--accent)] text-2xl cursor-pointer'>
              <CiFacebook />
            </span>
          </Link>
          <Link
            href='https://www.instagram.com/olatayoadebola?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
            passHref
            target='_blank'
          >
            <span className='text-[var(--accent)] text-2xl cursor-pointer'>
              <CiInstagram />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
