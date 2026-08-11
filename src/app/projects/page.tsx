import type { Metadata } from 'next'
import ProjectsCta from './components/ProjectsCta'
import ProjectsGrid from './components/ProjectsGrid'
import ProjectsHero from './components/ProjectsHero'

export const metadata: Metadata = {
  title: 'Project Portfolio | Larbol Construction - Completed Engineering Works',
  description:
    'Explore Larbol Construction Limited portfolio of completed commercial towers, civil highway networks, industrial logistics parks, and luxury residential developments in Nigeria.',
  keywords: [
    'construction projects Nigeria',
    'building portfolio Lagos',
    'commercial towers Abuja',
    'civil highway bridge project',
    'industrial logistics park',
    'luxury residential estates',
    'Larbol Construction projects',
  ],
  authors: [{ name: 'Larbol Construction' }],
  creator: 'Larbol Construction',
  publisher: 'Larbol Construction',
  openGraph: {
    title: 'Project Portfolio | Larbol Construction Limited',
    description:
      'Explore Larbol Construction Limited portfolio of completed commercial towers, civil highway networks, and industrial parks in Nigeria.',
    url: '/projects',
    siteName: 'Larbol Construction',
    images: [
      {
        url: '/web-screenshot.png',
        width: 1920,
        height: 1080,
        alt: 'Larbol Construction Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Portfolio | Larbol Construction Limited',
    description:
      'Explore Larbol Construction Limited portfolio of completed commercial towers, civil highway networks, and industrial parks in Nigeria.',
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
    canonical: '/projects',
  },
  category: 'construction',
}

export default function ProjectsPage() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Larbol Construction Project Portfolio',
    description:
      'Landmark civil infrastructure, commercial towers, and industrial facilities built by Larbol Construction Limited.',
    url: 'https://larbol-construction.vercel.app/projects',
    publisher: {
      '@type': 'GeneralContractor',
      name: 'Larbol Construction Limited',
    },
  }

  return (
    <main className='w-full'>
      {/* Schema.org CollectionPage JSON-LD metadata for AI & Google Search with id prop */}
      <script
        id='projects-portfolio-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdData),
        }}
      />

      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsCta />
    </main>
  )
}
