'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowHeader(currentScrollY < lastScrollY)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } bg-black/60 backdrop-blur-lg`}
    >
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        <Link className='lg:hidden flex justify-center' href='/'>
          <img src='/LogoHerencia.svg' alt='Herencia Logo' className='h-10' />
        </Link>

        {/* Desktop Nav */}
        <div className='hidden xl:flex items-center container mx-auto px-6'>
          <Nav />
        </div>

        {/* Mobile Nav */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
