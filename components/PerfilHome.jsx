'use client'

import Image from 'next/image'
import { Button } from './ui/button'

import FadeIn from './FadeIn'
import SlideInFromLeft from './SlideInFromLeft'

const PerfilHome = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-between w-full '>
      <SlideInFromLeft className='hidden lg:block'>
        <Image
          src='/Perfil/perfil.jpg'
          alt='Perfil Image'
          width={572}
          height={858}
          className=''
        />
      </SlideInFromLeft>
      <Image
        src='/Perfil/perfil.jpg'
        alt='Perfil Image'
        width={150}
        height={100}
        className='flex lg:hidden rounded-full mt-5 mb-6 '
      />

      <div className=' px-6 md:px-20'>
        <FadeIn className='flex flex-col items-center justify-center gap-12 w-full h-full text-center'>
          <img src='/points.svg' alt='points Logo' className='h-10' />
          <h3 className='text-5xl'>Hello, My Name is Juan</h3>
          <span className='text-lg md:text-xl text-gray-600 max-w-2xl'>
            Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
            tristique purus vehicula felis velit ac. Tempus velit morbi accumsan
            id sit interdum lacus turpis ac. Integer malesuada sagittis placerat
            eget. Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
            tristique purus vehicula felis velit ac. Tempus velit morbi accumsan
            id sit interdum lacus turpis ac. Integer malesuada sagittis
            placerat.
          </span>
          <img src='/Flower.svg' alt='flower Logo' className='h-10' />
          <h3 className='text-5xl'>Juan</h3>
          <Button>Learn More</Button>
        </FadeIn>
      </div>
    </section>
  )
}

export default PerfilHome
