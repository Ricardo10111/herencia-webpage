import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#F4F4F4] py-16 px-6 text-[#4a4a4a] mt-20'>
      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start text-center lg:text-left gap-12 lg:gap-0'>
        {/* Logo and description */}
        <div className='flex flex-col items-center lg:items-start gap-4'>
          <img src='/LogoHerencia.svg' alt='Logo' className='w-14' />
          <p className='max-w-xs text-sm leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur. Morbi volut tempus posuere
            viverra massa fames sed. Dignissim urisus et ac egestas dignissim.
          </p>
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
          Lorem ipsum dolor sit amet consectetur. Morbi volut tempus posuere
          viverra massa fames sed. Dignissim urisus et ac egestas dignissim.
        </p>
        <div className='flex gap-6 text-[#9e7b55] text-xl'>
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
        <p className='text-sm mt-4'>Copyright 2024 All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
