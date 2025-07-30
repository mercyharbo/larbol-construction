'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {
  Award,
  Bell,
  Briefcase,
  Building,
  ChevronDown,
  Home,
  Info,
  Menu,
  Phone,
  Search,
  Settings,
  X,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Info },
  { name: 'Projects', href: '/projects', icon: Briefcase },
  { name: 'Services', href: '/services', icon: Settings },
  { name: 'Contact Us', href: '/contact', icon: Phone },
]

const servicesDropdown = [
  { name: 'Commercial Construction', href: '/services/commercial' },
  { name: 'Residential Construction', href: '/services/residential' },
  { name: 'Infrastructure Development', href: '/services/infrastructure' },
  { name: 'Green Construction', href: '/services/green' },
]

export default function NavbarComp() {
  const pathname = usePathname()
  const [toggleNav, setToggleNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
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
        duration: 0.4,
        ease: 'power3.out',
      })
        .from('.mobile-menu-bg', {
          scale: 0.8,
          opacity: 0,
          duration: 0.3,
          ease: 'back.out(1.7)',
        })
        .from('.mobile-menu-header', {
          opacity: 0,
          y: -20,
          duration: 0.3,
        })
        .from('.mobile-nav-item', {
          opacity: 0,
          x: -30,
          stagger: 0.1,
          duration: 0.3,
        })
        .from('.mobile-menu-footer', {
          opacity: 0,
          y: 20,
          duration: 0.3,
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

  // Navbar scroll animation
  useGSAP(() => {
    gsap.to('.navbar', {
      backgroundColor: scrolled
        ? 'rgba(15, 23, 42, 0.95)'
        : 'rgba(15, 23, 42, 0.8)',
      backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
      borderBottom: scrolled
        ? '1px solid rgba(59, 130, 246, 0.3)'
        : '1px solid transparent',
      duration: 0.3,
      ease: 'power2.out',
    })
  }, [scrolled])

  return (
    <>
      <nav
        className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 px-5 lg:px-10 ${
          scrolled
            ? 'backdrop-blur-xl bg-slate-900/95 border-b border-blue-500/30'
            : 'backdrop-blur-md bg-slate-900/80'
        }`}
      >
        <div className='container mx-auto '>
          <div className='flex justify-between items-center h-20'>
            <Link href='/' className='group relative'>
              <div className='flex items-center gap-3'>
                <div className='relative'>
                  <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <Building className='text-white' size={20} />
                  </div>
                  <div className='absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center'>
                    <Award size={10} className='text-black' />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <span className='text-2xl font-bebas-neue tracking-wider bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300'>
                    LARBOL
                  </span>
                  <span className='text-xs font-playfair tracking-widest text-slate-400 uppercase group-hover:text-blue-400 transition-colors duration-300'>
                    Construction
                  </span>
                </div>
              </div>
            </Link>

            <div className='hidden lg:flex items-center gap-8'>
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                const isServices = item.name === 'Servicesss'

                return (
                  <div key={item.href} className='relative'>
                    {isServices ? (
                      <div
                        className='relative'
                        onMouseEnter={() => setShowServicesDropdown(true)}
                        onMouseLeave={() => setShowServicesDropdown(false)}
                      >
                        <button className='flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-white/10 hover:text-blue-400 group'>
                          <Icon size={16} />
                          {item.name}
                          {/* <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 ${
                              showServicesDropdown ? 'rotate-180' : ''
                            }`}
                          /> */}
                        </button>

                
                        {/* {showServicesDropdown && (
                          <div className='absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl overflow-hidden'>
                            <div className='p-2'>
                              {servicesDropdown.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className='block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-blue-600/20 rounded-lg transition-all duration-200'
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )} */}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 group ${
                          isActive
                            ? 'text-blue-400 bg-blue-500/20'
                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <Icon size={16} />
                        {item.name}
                        {isActive && (
                          <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full' />
                        )}
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>

            <div className='hidden lg:flex items-center gap-4'>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className='p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200'
              >
                <Search size={20} />
              </button>

              {/* <button className='relative p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200'>
                <Bell size={20} />
                <div className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full' />
              </button> */}

              <Link
                href='/contact'
                className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2'
              >
                <Zap size={16} />
                Get Quote
              </Link>
            </div>

            <button
              onClick={handleToggleNav}
              className='lg:hidden p-2 text-blue-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200'
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className='border-t border-slate-700 bg-slate-800/50 backdrop-blur-xl'>
            <div className='container mx-auto px-4 lg:px-8 py-4'>
              <div className='relative max-w-md mx-auto'>
                <Search
                  className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'
                  size={20}
                />
                <input
                  type='text'
                  placeholder='Search services, projects...'
                  className='w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </nav>

      {toggleNav && (
        <div className='mobile-menu fixed top-0 left-0 z-[100] w-full h-screen transform -translate-x-full lg:hidden'>
          <div className='mobile-menu-bg absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl' />

          <div className='relative z-10 flex flex-col h-full'>
            <div className='mobile-menu-header flex justify-between items-center p-6 border-b border-slate-700'>
              <Link href='/' className='group'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
                    <Building className='text-white' size={20} />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-xl font-bebas-neue tracking-wider text-gradient'>
                      LARBOL
                    </span>
                    <span className='text-xs font-playfair tracking-widest text-slate-400 uppercase'>
                      Construction
                    </span>
                  </div>
                </div>
              </Link>

              <button
                onClick={handleToggleNav}
                className='p-2 text-blue-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200'
              >
                <X size={24} />
              </button>
            </div>

            <div className='flex-1 p-6'>
              <div className='space-y-2'>
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href

                  console.log('isActive', isActive)
                  console.log('items', item)

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={` flex items-center gap-4 px-4 py-4 rounded-xl font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-blue-400 bg-blue-500/20 border border-blue-500/30'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                      onClick={() => setToggleNav(false)}
                    >
                      <Icon size={20} />
                      {item.name}
                      {isActive && (
                        <div className='ml-auto w-2 h-2 bg-blue-400 rounded-full' />
                      )}
                    </Link>
                  )
                })}
              </div>

              <div className='mt-8'>
                <h3 className='text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4'>
                  Our Services
                </h3>
                <div className='space-y-2'>
                  {servicesDropdown.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className='block px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200'
                      onClick={() => setToggleNav(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className='mobile-menu-footer p-6 border-t border-slate-700'>
              <Link
                href='/contact'
                className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2'
                onClick={() => setToggleNav(false)}
              >
                <Zap size={20} />
                Get Free Quote
              </Link>

              <div className='flex items-center justify-center gap-4 mt-4 text-slate-400'>
                <span className='text-sm'>Follow us:</span>
                <div className='flex gap-2'>
                  <div className='w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center'>
                    <span className='text-xs font-bold'>f</span>
                  </div>
                  <div className='w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center'>
                    <span className='text-xs font-bold'>ig</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {toggleNav && (
        <div
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] lg:hidden'
          onClick={() => setToggleNav(false)}
        />
      )}
    </>
  )
}
