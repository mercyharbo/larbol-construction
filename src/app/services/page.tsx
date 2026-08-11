import type { Metadata } from 'next'
import EngineeringProcess from './components/EngineeringProcess'
import ServicesCta from './components/ServicesCta'
import ServicesGrid from './components/ServicesGrid'
import ServicesHero from './components/ServicesHero'

export const metadata: Metadata = {
  title: 'Engineering & Construction Services | Larbol Construction',
  description:
    'Explore Larbol Construction Limited comprehensive structural engineering, civil highway construction, commercial building development, and project management services in Nigeria.',
  keywords: [
    'construction services',
    'road construction Nigeria',
    'highway engineering Lagos',
    'building construction',
    'civil infrastructure',
    'project management',
    'construction company Nigeria',
    'COREN civil engineers',
    'commercial building contractor',
  ],
  authors: [{ name: 'Larbol Construction' }],
  creator: 'Larbol Construction',
  publisher: 'Larbol Construction',
  openGraph: {
    title: 'Engineering & Construction Services | Larbol Construction Limited',
    description:
      'Comprehensive structural engineering, civil highway construction, and commercial building development in Nigeria.',
    url: '/services',
    siteName: 'Larbol Construction',
    images: [
      {
        url: '/web-screenshot.png',
        width: 1920,
        height: 1080,
        alt: 'Larbol Construction Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering & Construction Services | Larbol Construction Limited',
    description:
      'Comprehensive structural engineering, civil highway construction, and commercial building development in Nigeria.',
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
    canonical: '/services',
  },
  category: 'construction',
}

export default function ServicesPage() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Construction & Civil Engineering',
    provider: {
      '@type': 'GeneralContractor',
      name: 'Larbol Construction Limited',
      url: 'https://larbol-construction.vercel.app/services',
    },
    areaServed: 'Nigeria',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Services Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Civil & Highway Engineering',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial & Multi-Family Towers',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Industrial & Logistics Parks',
          },
        },
      ],
    },
  }

  return (
    <main className='w-full'>
      {/* Schema.org Service catalog JSON-LD metadata with id prop */}
      <script
        id='services-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdData),
        }}
      />

      <ServicesHero />
      <ServicesGrid />
      <EngineeringProcess />
      <ServicesCta />
    </main>
  )
}
