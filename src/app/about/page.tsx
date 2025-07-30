import AboutContent from '@/components/AboutContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Larbol Construction | Building Dreams, Crafting Reality',
  description:
    'Discover Larbol Construction, a leading construction company with over 10 years of expertise in delivering innovative and sustainable building solutions. Learn about our mission, team, and commitment to excellence.',
  keywords: [
    'construction company',
    'about Larbol Construction',
    'construction expertise',
    'sustainable building',
    'construction innovation',
    'building solutions',
    'construction team',
    'construction mission',
    'building excellence',
    'construction projects',
    'construction services',
    'construction company Nigeria',
  ],
  authors: [{ name: 'Code With Mercy' }],
  creator: 'Code With Mercy',
  publisher: 'Larbol Construction',
  openGraph: {
    title: 'About Us - Larbol Construction | Building Dreams, Crafting Reality',
    description:
      'Discover Larbol Construction, a leading construction company with over 10 years of expertise in delivering innovative and sustainable building solutions.',
    url: 'https://larbolconstruction.com/about',
    siteName: 'Larbol Construction',
    images: [
      {
        url: '/web-screenshot.png',
        width: 1920,
        height: 1080,
        alt: 'Larbol Construction Homepage',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Larbol Construction | Building Dreams, Crafting Reality',
    description:
      'Discover Larbol Construction, a leading construction company with over 10 years of expertise in delivering innovative and sustainable building solutions.',
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
    canonical: 'https://larbol-construction.vercel.app/',
  },
  category: 'construction',
}

export default function AboutPage() {
  return <AboutContent />
}
