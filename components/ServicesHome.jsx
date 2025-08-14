'use client'

import React from 'react'
import Link from 'next/link'

import FadeIn from './FadeIn'

const servicesList = [
  {
    logo: '/woodlogo1.svg',
    title: 'Inspire Wonder and Awe',
    description: 'Design experiences that captivate and leave a mark',
    button: 'View Our Portfolio',
    href: '/portfolio',
  },
  {
    logo: '/woodlogo2.svg',
    title: 'Elevate Every Space',
    description: 'Transform ordinary rooms into living statements of identity.',
    button: 'Learn About Our Process',
    href: '/services',
  },
  {
    logo: '/woodlogo3.svg',
    title: 'Craft Peace of Mind',
    description:
      'Enjoy exceptional service and unwavering craftsmanship you can rely on.',
    button: 'More About Us',
    href: '/about',
  },
]
const ServicesHome = () => {
  return (
    <section className='w-full flex flex-col items-center pb-30'>
      <FadeIn className='flex flex-col items-center  justify-center w-full py-32 px-8 md:px-67 '>
        <h2 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          Our Promise
        </h2>
        <h3 className='text-3xl md:text-6xl font-thin text-center'>
          The Premium Ambience You Deserve
        </h3>
      </FadeIn>

      {/* Services list */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 p-6'>
        {servicesList.map((service, index) => (
          <FadeIn
            key={index}
            className='flex flex-col items-center bg-[#F8F8F8] w-[370px] h-[552px] gap-8 shadow-lg  overflow-hidden hover:shadow-2xl transition-shadow duration-300'
          >
            <img
              src={service.logo}
              alt={service.title}
              className='w-[140px] h-[147px] object-cover'
            />
            <div className='p-4 flex flex-col items-center  gap-8'>
              <h4 className='text-3xl  mb-2 text-center'>{service.title}</h4>
              <p className='text-[#5B5B5B] mb-4 text-center'>
                {service.description}
              </p>
              <Link
                href={service.href}
                className='bg-[#C5A95E] text-white flex items-center justify-center w-50 hover:bg-[#cfba75] px- py-4 mt-10 cursor-pointer transition'
              >
                {service.button}
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default ServicesHome
