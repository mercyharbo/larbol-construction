import ContactComp from '@/components/ContactComp'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Larbol Construction',
  description:
    'Get in touch with Larbol Construction. Contact us for queries, quotes, or construction services.',
  keywords: [
    'contact',
    'construction company',
    'building services',
    'quotes',
  ],
  alternates: {
    canonical: 'https://larbol-construction.vercel.app/contact',
  },
}

export default function ContactPage() {
  return <ContactComp />
}
