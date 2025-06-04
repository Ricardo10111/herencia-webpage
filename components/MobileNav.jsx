'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import { useEffect, useState } from 'react'

const links = [
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
  {
    name: 'PORTFOLIO',
    path: '/portfolio',
  },
  {
    name: 'CONTACT',
    path: '/contact',
  },
]

const MobileNav = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        {/* logo */}
        <div className='mt-32 mb-16 text-center text-2xl'>
          <Link href='/' className='flex justify-center'>
            <img src='/LogoHerencia.svg' alt='Herencia Logo' className='h-10' />
          </Link>
        </div>
        {/* nav */}
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${link.path === pathname && 'text-[#C5A95E] border-b-2 border-accent'} text-xl capitalize hover:text-[#C5A95E] transition-all`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
