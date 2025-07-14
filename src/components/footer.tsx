'use client'

import type React from 'react'

import {
  ArrowRight,
  Award,
  Building,
  CheckCircle,
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Shield,
  Star,
  Twitter,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const services = [
  'Commercial Construction',
  'Residential Construction',
  'Infrastructure Development',
  'Green Construction',
  'Project Management',
  'Renovation & Remodeling',
]

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/bolaafoo',
    icon: Facebook,
    color: 'hover:text-blue-500',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/olatayoadebola',
    icon: Instagram,
    color: 'hover:text-pink-500',
  },
  { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-500' },
]

export default function FooterComp() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-20" />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10' />
      </div>

      {/* Floating particles */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-white/20 rounded-full animate-pulse'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        {/* Newsletter Section */}
        <div className='py-12 border-b border-slate-700'>
          <div className='max-w-4xl mx-auto text-center space-y-5'>
            <h3 className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Stay Updated with Our Latest Projects
            </h3>
            <p className='text-slate-400 max-w-2xl mx-auto'>
              Subscribe to our newsletter and get the latest updates on
              construction trends, project showcases, and exclusive offers.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'
            >
              <div className='flex-1 relative'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email address'
                  className='w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  required
                />
              </div>
              <button
                type='submit'
                disabled={subscribed}
                className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50'
              >
                {subscribed ? (
                  <>
                    <CheckCircle size={16} />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Subscribe
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className='py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
            {/* Company Info */}
            <div className='lg:col-span-1'>
              <Link href='/' className='group inline-block mb-6'>
                <div className='flex items-center gap-3'>
                  <div className='relative'>
                    <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      <Building className='text-white' size={24} />
                    </div>
                    <div className='absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center'>
                      <Award size={12} className='text-black' />
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-2xl font-bebas-neue tracking-wider bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300'>
                      LARBOL
                    </span>
                    <span className='text-sm font-playfair tracking-widest text-slate-400 uppercase group-hover:text-blue-400 transition-colors duration-300'>
                      Construction
                    </span>
                  </div>
                </div>
              </Link>

              <p className='text-slate-400 mb-6 leading-relaxed'>
                Building Excellence, Crafting Dreams. Your trusted partner in
                construction and development with over 25 years of experience
                delivering quality projects.
              </p>

              {/* Stats */}
              <div className='grid grid-cols-2 gap-4 mb-6'>
                <div className='text-center p-3 bg-slate-800/50 rounded-lg'>
                  <div className='text-2xl font-bold text-blue-400'>500+</div>
                  <div className='text-xs text-slate-500'>Projects</div>
                </div>
                <div className='text-center p-3 bg-slate-800/50 rounded-lg'>
                  <div className='text-2xl font-bold text-green-400'>25+</div>
                  <div className='text-xs text-slate-500'>Years</div>
                </div>
              </div>

              {/* Certifications */}
              <div className='flex items-center gap-2 text-sm text-slate-400'>
                <Shield size={16} className='text-green-400' />
                <span>Licensed & Insured</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className='text-xl font-semibold mb-6 text-white flex items-center gap-2'>
                <Building size={20} className='text-blue-400' />
                Our Services
              </h3>
              <ul className='space-y-3'>
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={`/services/${service
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                      className='text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group'
                    >
                      <ArrowRight
                        size={14}
                        className='text-blue-400 group-hover:translate-x-1 transition-transform'
                      />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='text-xl font-semibold mb-6 text-white flex items-center gap-2'>
                <ExternalLink size={20} className='text-blue-400' />
                Quick Links
              </h3>
              <ul className='space-y-3'>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className='text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group'
                    >
                      <ArrowRight
                        size={14}
                        className='text-blue-400 group-hover:translate-x-1 transition-transform'
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className='text-xl font-semibold mb-6 text-white flex items-center gap-2'>
                <Phone size={20} className='text-blue-400' />
                Contact Info
              </h3>

              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <MapPin
                    size={18}
                    className='text-blue-400 mt-1 flex-shrink-0'
                  />
                  <div>
                    <p className='text-white font-medium'>Address</p>
                    <p className='text-slate-400 text-sm'>
                      123 Construction Avenue, Oshogbo, Osun State, Nigeria
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <Phone
                    size={18}
                    className='text-green-400 mt-1 flex-shrink-0'
                  />
                  <div>
                    <p className='text-white font-medium'>Phone</p>
                    <a
                      href='tel:+2348123456789'
                      className='text-slate-400 text-sm hover:text-green-400 transition-colors'
                    >
                      +234 812 345 6789
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <Mail
                    size={18}
                    className='text-purple-400 mt-1 flex-shrink-0'
                  />
                  <div>
                    <p className='text-white font-medium'>Email</p>
                    <a
                      href='mailto:info@larbolconstruction.ng'
                      className='text-slate-400 text-sm hover:text-purple-400 transition-colors'
                    >
                      info@larbolconstruction.ng
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <Clock
                    size={18}
                    className='text-yellow-400 mt-1 flex-shrink-0'
                  />
                  <div>
                    <p className='text-white font-medium'>Business Hours</p>
                    <p className='text-slate-400 text-sm'>
                      Mon - Fri: 8:00 AM - 6:00 PM
                    </p>
                    <p className='text-slate-400 text-sm'>
                      Sat: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className='mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg'>
                <div className='flex items-center gap-2 mb-2'>
                  <Phone className='text-red-400' size={16} />
                  <span className='text-sm font-semibold text-red-400'>
                    24/7 Emergency
                  </span>
                </div>
                <a
                  href='tel:+2348123456789'
                  className='text-sm text-slate-300 hover:text-red-400 transition-colors'
                >
                  +234 812 345 6789
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='py-8 border-t border-slate-700'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
            {/* Copyright */}
            <div className='text-slate-400 text-sm text-center lg:text-left'>
              <p>&copy; 2024 Larbol Construction. All rights reserved.</p>
              <p className='mt-1'>
                Built with ❤️ in Nigeria |{' '}
                <Link
                  href='/privacy'
                  className='hover:text-white transition-colors'
                >
                  Privacy Policy
                </Link>{' '}
                |{' '}
                <Link
                  href='/terms'
                  className='hover:text-white transition-colors'
                >
                  Terms of Service
                </Link>
              </p>
            </div>

            {/* Social Links */}
            <div className='flex items-center gap-4'>
              <span className='text-slate-400 text-sm'>Follow us:</span>
              <div className='flex gap-3'>
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`w-10 h-10 bg-slate-800/50 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 text-slate-400 ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Rating */}
            <div className='flex items-center gap-2 text-sm'>
              <div className='flex items-center gap-1'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className='text-yellow-400 fill-current'
                  />
                ))}
              </div>
              <span className='text-slate-400'>4.9/5 (500+ reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
