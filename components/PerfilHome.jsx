'use client'

import Image from 'next/image'
import Link from 'next/link'

import FadeIn from './FadeIn'
import SlideInFromLeft from './SlideInFromLeft'

const PerfilHome = () => {
  return (
    <section className='w-full py-20 px-2 md:px-20'>
      <div className='flex flex-col lg:flex-row items-center justify-between  mx-auto'>
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
            <h3 className='text-5xl'>Our Founder | Juan Avila</h3>
            <span className='text-lg md:text-xl text-gray-600 max-w-2xl'>
              Juan Avila, founder of Herencia, carries five generations of
              carving tradition with a modern eye. His mission: to preserve
              heritage through purposeful design. <br />
              <br />
              With over 30 years of inherited artistry and engineering
              precision, Juan leads Herencia in honoring history through each
              handcrafted piece.
            </span>
            <img src='/logoprofile.svg' alt='flower Logo' className='h-12' />
            <Link
              href='/about'
              className='bg-[#C5A95E] text-white text-xl hover:bg-[#dfd3c9] px-20 py-4 mt-10 cursor-pointer transition'
            >
              More about us
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default PerfilHome
