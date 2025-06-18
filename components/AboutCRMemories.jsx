import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import FadeIn from '@/components/FadeIn'
import SlideInFromLeft from '@/components/SlideInFromLeft'

const AboutCRMemories = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-20 pt-20'>
      {/* Texto */}
      <SlideInFromLeft className='flex-1 max-w-xl'>
        <h3 className='text-[#C5A95E] tracking-widest mb-2 text-sm'>
          CRAFTING MEMORIES
        </h3>
        <h4 className='text-4xl md:text-6xl font-thin mb-6'>
          Your Story, My Art
        </h4>
        <p className='text-[#4A4A4A] leading-relaxed bg-[#F5F5F5] p-6 mb-8'>
          Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec
          potenti. Justo molestie amet vulputate aliquam viverra ut viverra
          lorem. Velit tellus vitae massa sed egestas ornare pretium.
        </p>
        <Link
          href='/portfolio'
          className='bg-[#E9E1D9] hover:bg-[#d6c9c1] px-8 py-4 transition text-[#4A4A4A]'
        >
          View Gallery
        </Link>
      </SlideInFromLeft>

      {/* Imágenes */}
      <FadeIn className='flex-1 grid grid-cols-2  gap-4 max-w-lg'>
        <div className='col-span-1 row-span-1'>
          <Image
            src='/Perfil/perfil.jpg'
            alt='Crafting Memories 1'
            width={400}
            height={400}
            className='object-cover w-full h-full rounded-lg shadow-md'
          />
        </div>
        <div className='col-span-1 row-span-1 mt-36'>
          <Image
            src='/Perfil/perfil.jpg'
            alt='Crafting Memories 2'
            width={400}
            height={400}
            className='object-cover w-full h-full rounded-lg shadow-md'
          />
        </div>
      </FadeIn>
    </section>
  )
}

export default AboutCRMemories
