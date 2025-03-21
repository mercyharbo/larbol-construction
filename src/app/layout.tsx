import FooterComp from '@/components/footer'
import NavbarComp from '@/components/navbar'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Larbol Construction - Transforming Spaces, Building Dreams',
  description:
    'Larbol Construction delivers exceptional residential and commercial construction services, including custom home remodeling, innovative renovations, and expert general contracting in [Your Location]. Trusted for quality, precision, and reliability, we bring your visions to life.',
  keywords: [
    'expert construction services',
    'home renovation experts',
    'commercial construction solutions',
    'reliable general contractors',
    'premium remodeling services',
    'innovative building contractor',
    'custom construction designs',
    'home improvement professionals',
    'trusted construction company',
    'Larbol Construction services',
  ],
  openGraph: {
    title: 'Larbol Construction - Transforming Spaces, Building Dreams',
    description:
      'Discover premium construction and remodeling services for residential and commercial projects. From innovative designs to flawless execution, Larbol Construction turns your vision into reality.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} `}>
        <NavbarComp />
        {children}
        <FooterComp />
      </body>
    </html>
  )
}
