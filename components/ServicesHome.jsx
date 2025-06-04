'use client'

import React from 'react'
import Link from 'next/link'

import FadeIn from './FadeIn'

const servicesList = [
  {
    logo: '/woodlogo1.svg',
    title: 'Inspire Wonder and Awe',
    description: 'Design experiences that captivate and leave a mark',
    button: 'More Details',
  },
  {
    logo: '/woodlogo2.svg',
    title: 'Greater, Truer Spaces',
    description: 'Shape moments that resonate and transform your space.',
    button: 'More Details',
  },
  {
    logo: '/woodlogo3.svg',
    title: 'Ensure Your Peace of Mind',
    description: 'Experience reliability with seamless and dependable service.',
    button: 'More Details',
  },
]
const ServicesHome = () => {
  return (
    <section>
      <FadeIn className='flex flex-col items-center  justify-center w-full py-32 px-8 md:px-67 '>
        <h2 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          SERVICES
        </h2>
        <h3 className='text-3xl md:text-6xl font-thin text-center'>
          My Premium Benefits
        </h3>
      </FadeIn>

      {/* Services list */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-6'>
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
            <div className='p-4 flex flex-col items-center px-12 gap-6'>
              <h4 className='text-3xl  mb-2 text-center'>{service.title}</h4>
              <p className='text-[#5B5B5B] mb-4 text-center'>
                {service.description}
              </p>
              <Link
                href='/services'
                className='bg-[#E9E1D9] hover:bg-[#dfd3c9] px-20 py-4 mt-10 cursor-pointer transition'
              >
                View More
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default ServicesHome
