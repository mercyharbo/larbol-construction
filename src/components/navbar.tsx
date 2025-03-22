'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Caveat } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaBarsStaggered } from 'react-icons/fa6'

const caveatFont = Caveat({
  subsets: ['latin'], // Specify the character subsets needed
  weight: ['400', '700'], // Include font weights if desired
})

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Blog', href: '/blog' },
]

export default function NavbarComp() {
  const pathname = usePathname()
  const [toggleNav, setToggleNav] = useState(false)

  const handleToggleNav = () => {
    setToggleNav(!toggleNav)
  }

  useGSAP(() => {
    const tl = gsap.timeline()

    if (toggleNav) {
      tl.to('.navbar-container', {
        duration: 0.5,
        ease: 'power3.out',
      })
        .from('header', {
          opacity: 0,
          y: 20,
          duration: 0.3,
        })
        .from('nav a', {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.3,
        })
        .from('nav button', {
          opacity: 0,
          y: 20,
          duration: 0.3,
        })
    } else {
      // Animation for closing the navbar
      gsap.to('.navbar-container', {
        y: -800,
        duration: 0.5,
        ease: 'power3.in',
      })
    }
  }, [toggleNav])

  return (
    <nav className='flex justify-between items-center w-full h-20 px-10 text-white bg-[var(--primary)]'>
      <h1
        className={`text-[var(--accent)] text-[1.5rem] capitalize ${caveatFont.className}`}
      >
        lb construction
      </h1>

      <div className='hidden lg:flex justify-center items-center gap-5'>
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`font-normal ${
              pathname === item.href
                ? 'text-[var(--accent)]'
                : 'hover:text-[var(--accent)]'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <button className='bg-[var(--accent)] text-black px-4 py-2 rounded-md hover:opacity-80 hidden lg:block'>
        Get Started
      </button>

      <button
        type='button'
        onClick={handleToggleNav}
        className='text-[var(--accent)] text-2xl lg:hidden'
      >
        <FaBarsStaggered />
      </button>

      {toggleNav && (
        <div className='navbar-container bg-[var(--primary)] absolute top-0 left-0 z-20 text-white w-full h-3/4 p-5 rounded-md flex flex-col gap-[3rem] overflow-hidden'>
          <header className='flex justify-between items-center w-full'>
            <h1
              className={`text-[var(--accent)] text-[1.5rem] capitalize ${caveatFont.className}`}
            >
              lb construction
            </h1>

            <button
              type='button'
              onClick={handleToggleNav}
              className='text-[var(--accent)] text-2xl'
            >
              <CgClose />
            </button>
          </header>

          <div className='flex flex-col justify-start items-start gap-5 w-full'>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-normal ${
                  pathname === item.href
                    ? 'text-[var(--accent)]'
                    : 'hover:text-[var(--accent)]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button className='bg-[var(--accent)] text-black px-4 py-3 rounded-md hover:opacity-80'>
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}
