import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#F4F4F4] py-16 px-6 text-[#4a4a4a] mt-10'>
      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start text-center lg:text-left gap-12 lg:gap-0'>
        {/* Logo and description */}
        <div className='flex flex-col items-center lg:items-start gap-4'>
          <img src='/LogoHerencia.svg' alt='Logo' className='w-14' />
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16'>
          {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map(
            (item, idx) => (
              <Link
                key={idx}
                href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
              >
                <span className='hover:text-[#C5A95E] transition-colors'>
                  {item}
                </span>
              </Link>
            ),
          )}
        </div>
      </div>

      {/* Centered text and icons */}
      <div className='mt-16 text-center flex flex-col items-center gap-6'>
        <p className='max-w-2xl text-sm'>
          “Our passion lies in preserving timeless craftsmanship while bringing
          your vision to life. Every design is a reflection of your story —
          built with care, tradition, and purpose.”
        </p>
        <div className='flex gap-6 text-[#9e7b55] text-xl'>
          {/* Social Media Icons */}
          <a
            href='https://www.facebook.com/HerenciaCWA?mibextid=wwXIfr&rdid=cTU4c3vUW1NQ7YkW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19fnL9H3QG%2F%3Fmibextid%3DwwXIfr'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebookF />
          </a>

          <a
            href='https://www.youtube.com/@herenciacwa'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube />
          </a>
          <a
            href='https://www.instagram.com/herencia.cwa/?utm_source=qr'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
        </div>

        <p className='text-sm mt-4'>Copyright 2024 All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
