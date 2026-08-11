import type { Metadata } from 'next'
import ContactDetailsGrid from './components/ContactDetailsGrid'
import ContactFormSection from './components/ContactFormSection'
import ContactHero from './components/ContactHero'

export const metadata: Metadata = {
  title: 'Contact Us | Larbol Construction Limited - Office & Site Consultations',
  description:
    'Get in touch with Larbol Construction Limited headquarters in Victoria Island, Lagos. Contact our engineering team for site evaluations, BOQ audits, and project quotes.',
  keywords: [
    'contact Larbol Construction',
    'construction office Lagos',
    'Victoria Island civil engineers',
    'BOQ audit request',
    'construction consultation Nigeria',
    'COREN civil contractor',
  ],
  authors: [{ name: 'Larbol Construction' }],
  creator: 'Larbol Construction',
  publisher: 'Larbol Construction',
  openGraph: {
    title: 'Contact Us | Larbol Construction Limited',
    description:
      'Get in touch with Larbol Construction Limited headquarters in Victoria Island, Lagos for site evaluations and project quotes.',
    url: '/contact',
    siteName: 'Larbol Construction',
    images: [
      {
        url: '/web-screenshot.png',
        width: 1920,
        height: 1080,
        alt: 'Larbol Construction Contact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Larbol Construction Limited',
    description:
      'Get in touch with Larbol Construction Limited headquarters in Victoria Island, Lagos.',
    images: ['/web-screenshot.png'],
    creator: '@larbolconstruction',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/contact',
  },
  category: 'construction',
}

export default function ContactPage() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Larbol Construction Contact & Office Locations',
    description:
      'Corporate contact page for Larbol Construction Limited headquarters in Victoria Island, Lagos.',
    url: 'https://larbol-construction.vercel.app/contact',
    mainEntity: {
      '@type': 'GeneralContractor',
      name: 'Larbol Construction Limited',
      telephone: '+2348031234567',
      email: 'info@larbolconstruction.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot 14, Commercial Avenue',
        addressLocality: 'Victoria Island',
        addressRegion: 'Lagos State',
        addressCountry: 'Nigeria',
      },
    },
  }

  return (
    <main className='w-full'>
      {/* Schema.org ContactPage JSON-LD metadata for AI & Google Search with id prop */}
      <script
        id='contact-page-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdData),
        }}
      />

      <ContactHero />
      <ContactDetailsGrid />
      <ContactFormSection />
    </main>
  )
}
