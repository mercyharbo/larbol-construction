'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Blog', href: '/blog' },
]

export default function NavbarComp() {
  const pathname = usePathname()

  return (
    <nav className='flex justify-between items-center w-full h-20 px-10 text-white bg-[var(--primary)]'>
      <h1>logo</h1>

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
    </nav>
  )
}
