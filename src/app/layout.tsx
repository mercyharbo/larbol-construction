import FooterComp from '@/components/footer'
import NavbarComp from '@/components/navbar'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Larbol Construction - Professional Construction Services',
  description:
    'Larbol Construction offers expert residential and commercial construction services, home remodeling, renovations, and general contracting in [Your Location]. Quality craftsmanship and reliable service.',
  keywords: [
    'construction company',
    'home renovation',
    'commercial construction',
    'general contractor',
    'remodeling services',
    'building contractor',
    'construction services',
    'home improvement',
    'custom construction',
    'larbol construction',
  ],
  openGraph: {
    title: 'Larbol Construction - Professional Construction Services',
    description:
      'Expert construction and renovation services for residential and commercial projects',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarComp />
        {children}
        <FooterComp />
      </body>
    </html>
  )
}
