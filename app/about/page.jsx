import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import SlideInFromLeft from '@/components/SlideInFromLeft'
import FadeIn from '@/components/FadeIn'
import FadeOnLoad from '@/components/FadeOnLoad'

import AboutCarrucel from '@/components/AutoScrollCarousel'
import AboutFacts from '@/components/AboutFacts'
import AboutCRMemories from '@/components/AboutCRMemories'

const about = () => {
  return (
    <section className='max-w-[1600px] mx-auto  flex min-h-screen flex-col items-center justify-between'>
      <FadeIn className='  flex flex-col items-center  justify-center w-full py-[128px_60px] px-8 md:px-67 '>
        <h1 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          ABOUT
        </h1>
        <h2 className='text-3xl md:text-6xl font-thin text-center'>
          Our Founder, Juan Avila
        </h2>
      </FadeIn>

      <div className='flex flex-col lg:flex-row items-center justify-between w-full '>
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
          <FadeOnLoad className='flex flex-col items-center justify-center gap-12 w-full h-full text-center'>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl'>
              Juan, a hardworking, ambitious, and artistic individual honed his
              wood carving skills over three decades. Raised in Tijuana, Mexico,
              by his father, Jesus Avila, he inherited timeless ancestral
              techniques. While mastering the art of wood sculpting, Juan also
              earned a bachelor's degree in Civil Engineering from the Instituto
              Tecnológico de Tijuana.
            </p>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl'>
              Despite these notable achievements, Juan remained eager to broaden
              his horizons and elevate his artistry. Taking a bold step, he
              moved to Arizona, where he has lived for over 14 years. There, he
              founded Herencia, driven by his enduring passion for traditional
              craftsmanship. Through Herencia, Juan brings his unique talents
              directly to clients—crafted exclusively for you.
            </p>

            <img src='/logoprofile.svg' alt='flower Logo' className='h-12' />
            <Link
              href='/portfolio'
              className='bg-[#E9E1D9] hover:bg-[#dfd3c9] px-20 py-4 mt-10 cursor-pointer transition'
            >
              View Portfolio
            </Link>
          </FadeOnLoad>
        </div>
      </div>
      <AboutCarrucel />
      <AboutFacts />
      <AboutCRMemories />
    </section>
  )
}

export default about
