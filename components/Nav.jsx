'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const linksL = [
  {
    name: 'HOME',
    path: '/',
  },
  {
    name: 'ABOUT',
    path: '/about',
  },
  {
    name: 'SERVICES',
    path: '/services',
  },
]
const linksR = [
  {
    name: 'PORTFOLIO',
    path: '/work',
  },
  {
    name: 'CONTACT',
    path: '/contact',
  },
]

const Nav = () => {
  const pathname = usePathname()
  return (
    <nav className='flex gap-10 text-sm lg:text-base font-semibold'>
      <section className='container flex gap-60 justify-between items-center'>
        <div className='flex gap-10 lg:gap-20'>
          {linksL.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                pathname === link.path ? 'text-[#C5A95E]' : 'text-white'
              } hover:text-[#0f2f40] transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* logo */}
        <Link className='flex justify-center' href='/'>
          <span className='text-4xl font-semibold'>Herencia</span>
        </Link>

        <div className='hidden lg:flex gap-10'>
          {linksR.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                pathname === link.path ? 'text-[#C5A95E]' : 'text-white'
              } hover:text-[#0f2f40] transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </section>
    </nav>
  )
}

export default Nav
