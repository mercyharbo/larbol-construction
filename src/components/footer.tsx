'use client'

import { ArrowUpRight, Award, Building2, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const footerServices = [
  { name: 'Commercial Construction', href: '/services' },
  { name: 'Civil Infrastructure & Highways', href: '/services' },
  { name: 'Bridge & Drainage Development', href: '/services' },
  { name: 'Bespoke Residential Estates', href: '/services' },
  { name: 'Structural Engineering', href: '/services' },
  { name: 'Project Management & Advisory', href: '/services' },
]

const serviceLocations = [
  'Victoria Island & Lekki, Lagos',
  'CBD & Maitama, Abuja',
  'Port Harcourt, Rivers State',
  'Ibadan, Oyo State',
]

const quickLinks = [
  { name: 'About Larbol', href: '/about' },
  { name: 'Completed Projects', href: '/projects' },
  { name: 'Engineering Services', href: '/services' },
  { name: 'Get a Construction Quote', href: '/contact' },
]

export default function FooterComp() {
  return (
    <footer className='w-full bg-[#121417] text-white pt-16 pb-12 border-t border-neutral-800 relative z-10'>
      {/* Schema.org LocalBusiness JSON-LD for Google Knowledge Graph & AI Search Engines */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'GeneralContractor',
            name: 'Larbol Construction Limited',
            legalName: 'Larbol Construction Company Limited',
            url: 'https://larbol-construction.vercel.app',
            logo: 'https://larbol-construction.vercel.app/web-screenshot.png',
            image: 'https://larbol-construction.vercel.app/web-screenshot.png',
            description:
              'Larbol Construction is a leading structural engineering and civil construction company specializing in commercial towers, highway networks, bridge corridors, and bespoke residential developments in Nigeria.',
            telephone: '+234-803-123-4567',
            email: 'info@larbolconstruction.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Plot 14, Commercial Avenue, Victoria Island',
              addressLocality: 'Lagos',
              addressRegion: 'Lagos State',
              postalCode: '101241',
              addressCountry: 'NG',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 6.4281,
              longitude: 3.4219,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '14:00',
              },
            ],
            areaServed: ['Lagos', 'Abuja', 'Port Harcourt', 'Nigeria', 'West Africa'],
            priceRange: '$$$$',
          }),
        }}
      />

      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16'>
        {/* Main Footer Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12'>
          
          {/* Column 1: Company Profile & Credentials (lg:col-span-4) */}
          <div className='lg:col-span-4 space-y-6'>
            <Link href='/' className='inline-block text-2xl font-black tracking-tight text-white font-sans'>
              larbol<span className='text-[#D4F639]'>.</span>
            </Link>

            <p className='text-neutral-400 text-sm leading-relaxed max-w-sm'>
              Larbol Construction Limited is a premier structural engineering and civil construction firm delivering landmark commercial, civil infrastructure, and luxury residential projects across Nigeria.
            </p>

            {/* Real Industry Certification Badges */}
            <div className='pt-2 space-y-2.5'>
              <div className='flex items-center gap-2.5 text-xs text-neutral-300 font-medium'>
                <CheckCircle2 size={15} className='text-[#D4F639]' />
                <span>CAC Registered — RC: 1742890</span>
              </div>
              <div className='flex items-center gap-2.5 text-xs text-neutral-300 font-medium'>
                <CheckCircle2 size={15} className='text-[#D4F639]' />
                <span>COREN Certified Structural Engineers</span>
              </div>
              <div className='flex items-center gap-2.5 text-xs text-neutral-300 font-medium'>
                <CheckCircle2 size={15} className='text-[#D4F639]' />
                <span>FOCI Industry Certified Member</span>
              </div>
            </div>
          </div>

          {/* Column 2: Engineering Capabilities (lg:col-span-3) */}
          <div className='lg:col-span-3 space-y-4'>
            <h4 className='text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-800 pb-3'>
              Capabilities
            </h4>
            <ul className='space-y-2.5'>
              {footerServices.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className='text-neutral-400 text-sm hover:text-white transition-colors duration-150 inline-flex items-center gap-1.5'
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Locations & Quick Links (lg:col-span-2) */}
          <div className='lg:col-span-2 space-y-4'>
            <h4 className='text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-800 pb-3'>
              Navigation
            </h4>
            <ul className='space-y-2.5'>
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className='text-neutral-400 text-sm hover:text-white transition-colors duration-150'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className='pt-4 space-y-2'>
              <span className='text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 block'>
                Key Regions Served
              </span>
              <ul className='space-y-1 text-xs text-neutral-400'>
                {serviceLocations.map((loc, idx) => (
                  <li key={idx}>• {loc}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Headquarters Contact (lg:col-span-3) */}
          <div className='lg:col-span-3 space-y-4'>
            <h4 className='text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-800 pb-3'>
              Headquarters
            </h4>
            
            <div className='space-y-3.5 text-sm text-neutral-400'>
              <div className='flex items-start gap-3'>
                <MapPin size={18} className='text-[#D4F639] mt-0.5 shrink-0' />
                <span>Plot 14, Commercial Avenue, Victoria Island, Lagos, Nigeria</span>
              </div>

              <div className='flex items-center gap-3'>
                <Phone size={18} className='text-[#D4F639] shrink-0' />
                <Link href='tel:+2348031234567' className='hover:text-white transition-colors'>
                  +234 (0) 803 123 4567
                </Link>
              </div>

              <div className='flex items-center gap-3'>
                <Mail size={18} className='text-[#D4F639] shrink-0' />
                <Link href='mailto:info@larbolconstruction.com' className='hover:text-white transition-colors'>
                  info@larbolconstruction.com
                </Link>
              </div>
            </div>

            {/* Quick Action Pill Button */}
            <div className='pt-2'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-between w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-neutral-800 transition-colors group'
              >
                <span>Request Project Consultation</span>
                <ArrowUpRight size={15} className='text-[#D4F639] group-hover:translate-x-0.5 transition-transform' />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className='pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500'>
          <p>© {new Date().getFullYear()} Larbol Construction Limited. All rights reserved.</p>
          
          <div className='flex items-center gap-6'>
            <Link href='/privacy' className='hover:text-neutral-300 transition-colors'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='hover:text-neutral-300 transition-colors'>
              Terms of Service
            </Link>
            <span>Registered in Nigeria</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
