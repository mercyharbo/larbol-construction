import ServicesComp from '@/components/ServicesComp'
import {
  contentSections,
  faqs,
  processSteps,
  servicesData,
} from '@/data/services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Construction Services | Larbol Construction - Building Excellence',
  description:
    'Discover our comprehensive range of professional construction services including road construction, bridge development, building construction, drainage systems, infrastructure planning, and project management. Trust Larbol Construction for quality and expertise.',
  keywords: [
    'construction services',
    'road construction',
    'bridge development',
    'building construction',
    'drainage systems',
    'infrastructure planning',
    'project management',
    'construction company',
    'construction Nigeria',
    'civil engineering',
    'construction solutions',
    'building services',
    'construction expertise',
    'sustainable construction',
  ],
  authors: [{ name: 'Code With Mercy' }],
  creator: 'Code With Mercy',
  publisher: 'Larbol Construction',
  openGraph: {
    title: 'Construction Services | Larbol Construction - Building Excellence',
    description:
      'Discover our comprehensive range of professional construction services including road construction, bridge development, building construction, drainage systems, infrastructure planning, and project management.',
    url: 'https://larbol-construction.vercel.app/services',
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
    title: 'Construction Services | Larbol Construction - Building Excellence',
    description:
      'Discover our comprehensive range of professional construction services including road construction, bridge development, building construction, drainage systems, infrastructure planning, and project management.',
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
    canonical: 'https://larbol-construction.vercel.app/services',
  },
  category: 'construction',
}

export default function ServicesPage() {
  return (
    <ServicesComp
      servicesData={servicesData}
      contentSections={contentSections}
      processSteps={processSteps}
      faqs={faqs}
    />
  )
}
