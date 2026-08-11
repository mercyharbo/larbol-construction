import type { Metadata } from 'next'
import AboutHero from './components/AboutHero'
import ExecutiveLeadership from './components/ExecutiveLeadership'
import FaqSection from './components/FaqSection'
import MissionPillars from './components/MissionPillars'
import PerformanceStats from './components/PerformanceStats'

export const metadata: Metadata = {
  title: 'About Us - Larbol Construction | Building Dreams, Crafting Reality',
  description:
    'Discover Larbol Construction Limited, a leading structural engineering and civil construction company in Nigeria with over 15 years of expertise delivering landmark commercial, civil, and residential projects.',
  keywords: [
    'construction company',
    'about Larbol Construction',
    'construction expertise',
    'sustainable building',
    'civil engineering Nigeria',
    'building solutions Lagos',
    'construction team',
    'COREN registered engineers',
    'building excellence',
    'construction projects',
    'construction services',
    'construction company Nigeria',
  ],
  authors: [{ name: 'Larbol Construction' }],
  creator: 'Larbol Construction',
  publisher: 'Larbol Construction',
  openGraph: {
    title: 'About Us - Larbol Construction Limited',
    description:
      'Discover Larbol Construction Limited, a leading structural engineering and civil construction company in Nigeria.',
    url: '/about',
    siteName: 'Larbol Construction',
    images: [
      {
        url: '/web-screenshot.png',
        width: 1920,
        height: 1080,
        alt: 'Larbol Construction About Us',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Larbol Construction Limited',
    description:
      'Discover Larbol Construction Limited, a leading structural engineering and civil construction company in Nigeria.',
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
    canonical: '/about',
  },
  category: 'construction',
}

export default function AboutPage() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'GeneralContractor',
      name: 'Larbol Construction Limited',
      url: 'https://larbol-construction.vercel.app/about',
      founder: 'Afolabi Adebola Khadijah',
      foundingDate: '2012',
      description:
        'Larbol Construction Limited is a premier structural engineering and civil construction firm operating in Nigeria.',
    },
  }

  return (
    <main className='w-full'>
      {/* Schema.org Organization Metadata for AI & Google Search with id prop */}
      <script
        id='about-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdData),
        }}
      />

      <AboutHero />
      <MissionPillars />
      <PerformanceStats />
      <ExecutiveLeadership />
      <FaqSection />
    </main>
  )
}
