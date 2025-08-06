'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const linksL = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'OUR PROCESS', path: '/services' },
]
const linksR = [
  { name: 'PORTFOLIO', path: '/portfolio' },
  { name: 'CONTACT', path: '/contact' },
]

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className='w-full max-w-screen-xl mx-auto px-4'>
      <div className='flex justify-between items-center gap-4 w-full'>
        {/* Left Links */}
        <div className='flex gap-8'>
          {linksL.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                pathname === link.path ? 'text-[#C5A95E]' : 'text-white'
              } hover:text-[#C5A95E] transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <Link href='/' className='flex justify-center'>
          <img src='/LogoHerencia.svg' alt='Herencia Logo' className='h-10' />
        </Link>

        {/* Right Links */}
        <div className='flex gap-8'>
          {linksR.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                pathname === link.path ? 'text-[#C5A95E]' : 'text-white'
              } hover:text-[#C5A95E] transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
