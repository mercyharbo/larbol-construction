'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function NavbarComp() {
  const pathname = usePathname()
  const [toggleNav, setToggleNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => {
    setToggleNav(false)
  }, [pathname])

  const handleToggleNav = () => {
    setToggleNav(!toggleNav)
  }

  useGSAP(() => {
    const tl = gsap.timeline()

    if (toggleNav) {
      // Mobile menu open animation
      tl.to('.mobile-menu', {
        x: 0,
        opacity: 1,
        duration: 0.35,
        ease: 'power3.out',
      }).from('.mobile-nav-item', {
        opacity: 0,
        y: 15,
        stagger: 0.08,
        duration: 0.3,
        ease: 'power2.out',
      })
    } else {
      tl.to('.mobile-menu', {
        x: '-100%',
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      })
    }
  }, [toggleNav])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md py-3'
            : 'bg-white py-3.5'
        }`}
      >
        <div className='px-5 md:px-5 lg:px-10'>
          <div className='flex justify-between items-center h-12'>
            {/* Logo */}
            <Link href='/' className='flex items-center gap-2.5 group'>
              <div className='flex items-baseline gap-1'>
                <span className='text-2xl font-bold tracking-tight text-brand-dark font-sans'>
                  larbol
                </span>
                <span className='w-1.5 h-1.5 rounded-full bg-lime-accent inline-block mb-1' />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className='hidden md:flex items-center gap-7 lg:gap-9'>
              {navigationItems.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                      isActive
                        ? 'text-brand-dark font-semibold'
                        : 'text-brand-muted hover:text-brand-dark'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className='absolute bottom-0 left-0 w-full h-0.5 bg-brand-dark rounded-full' />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Right Action Items */}
            <div className='hidden md:flex items-center gap-6'>
              <div className='hidden xl:flex items-center gap-2 text-sm text-brand-muted font-medium'>
                <span>Call Us:</span>
                <Link
                  href='tel:+00412345688'
                  className='text-brand-dark font-semibold hover:underline'
                >
                  +(004) 123 - 456 88
                </Link>
              </div>

              <Link
                href='/contact'
                className='inline-flex items-center justify-center gap-2 bg-lime-accent hover:bg-lime-hover text-brand-dark font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]'
              >
                <span>Get in Touch</span>
                <div className='w-6 h-6 rounded-full bg-brand-dark text-white flex items-center justify-center text-xs ml-0.5'>
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </div>
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={handleToggleNav}
              aria-label='Toggle Navigation'
              className='md:hidden p-2.5 rounded-full bg-neutral-100 text-brand-dark hover:bg-neutral-200 transition-colors'
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`mobile-menu fixed top-0 left-0 z-[100] w-full max-w-sm h-screen transform -translate-x-full md:hidden bg-brand-bg flex flex-col justify-between`}
      >
        <div className='p-5'>
          {/* Mobile Header */}
          <div className='flex justify-between items-center pb-6 border-b border-brand-border'>
            <Link
              href='/'
              className='flex items-center gap-2'
              onClick={() => setToggleNav(false)}
            >
              <div className='w-8 h-8 bg-brand-dark rounded-lg flex items-center justify-center text-white'>
                <span className='font-bold text-lg leading-none'>l</span>
              </div>
              <span className='text-xl font-bold tracking-tight text-brand-dark'>
                larbol
              </span>
            </Link>
            <button
              onClick={handleToggleNav}
              className='p-2 text-brand-muted hover:text-brand-dark hover:bg-neutral-200/60 rounded-full transition-colors'
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className='pt-8 space-y-4'>
            {navigationItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <div key={item.href} className='mobile-nav-item'>
                  <Link
                    href={item.href}
                    onClick={() => setToggleNav(false)}
                    className={`flex items-center justify-between text-lg font-medium py-2 transition-colors ${
                      isActive
                        ? 'text-brand-dark font-bold'
                        : 'text-brand-muted hover:text-brand-dark'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <div className='w-2 h-2 rounded-full bg-lime-accent' />
                    )}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Footer Area */}
        <div className='p-6 border-t border-brand-border space-y-4 bg-white/50'>
          <div className='text-center text-sm text-brand-muted font-medium'>
            <p className='text-xs text-neutral-400 uppercase tracking-wider mb-1'>
              Have questions?
            </p>
            <Link
              href='tel:+2348031234567'
              className='text-brand-dark font-semibold hover:underline block text-base'
            >
              +234 (0) 803 123 4567
            </Link>
          </div>

          <Link
            href='/contact'
            onClick={() => setToggleNav(false)}
            className='w-full inline-flex items-center justify-center gap-2 bg-lime-accent hover:bg-lime-hover text-brand-dark font-semibold text-base py-3 rounded-full transition-all duration-200'
          >
            <span>Get in Touch</span>
            <div className='w-6 h-6 rounded-full bg-brand-dark text-white flex items-center justify-center text-xs'>
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {toggleNav && (
        <div
          className='fixed inset-0 bg-brand-dark/40 backdrop-blur-xs z-[90] md:hidden transition-opacity'
          onClick={() => setToggleNav(false)}
        />
      )}
    </>
  )
}
