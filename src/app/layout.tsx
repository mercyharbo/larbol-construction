import FooterComp from '@/components/footer'
import NavbarComp from '@/components/navbar'
import type { Metadata } from 'next'
import { Bebas_Neue, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
})
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Larbol Construction - Building Tomorrow with Excellence',
  description:
    'Larbol Construction is a premier construction company specializing in road networks, bridge development, and infrastructure projects. With over 10 years of expertise, we deliver innovative and sustainable construction solutions.',
  keywords: [
    'construction company',
    'road construction',
    'bridge development',
    'infrastructure projects',
    'construction services',
    'building company',
    'construction Nigeria',
    'civil engineering',
    'construction management',
    'sustainable construction',
    'construction innovation',
    'building excellence',
  ],
  authors: [{ name: 'Code With Mercy' }],
  creator: 'Code With Mercy',
  publisher: 'Larbol Construction',
  openGraph: {
    title: 'Larbol Construction - Building Tomorrow with Excellence',
    description:
      'Larbol Construction is a premier construction company specializing in road networks, bridge development, and infrastructure projects. With over 10 years of expertise, we deliver innovative and sustainable construction solutions.',
    url: 'https://larbol-construction.vercel.app/',
    siteName: 'Larbol Construction',
    images: [
      {
        url: '/assets/indexpagescreenshot.png',
        width: 1920,
        height: 1080,
        alt: 'Larbol Construction - Building Tomorrow',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Larbol Construction - Building Tomorrow with Excellence',
    description:
      'Larbol Construction is a premier construction company specializing in road networks, bridge development, and infrastructure projects.',
    images: ['/assets/indexpagescreenshot.png'],
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} ${bebasNeue.variable} ${playfairDisplay.variable} flex flex-col gap-10`}
      >
        <NavbarComp />
        {children}
        <FooterComp />
      </body>
    </html>
  )
}
