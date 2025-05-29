'use client'

import Image from 'next/image'

import RotatingWords from '@/components/RotatingWords'
import PerfilHome from '@/components/PerfilHome'
import FadeInTitle from '@/components/FadeInTitle'
import FadeIn from '@/components/FadeIn'
import ServicesHome from '@/components/ServicesHome'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      {/* Image in the hero */}
      <section className='relative w-full h-[100vh] overflow-hidden'>
        {/* Imagen de fondo */}
        <div className='absolute inset-0 -z-10 aspect-w-16 aspect-h-9'>
          <Image
            src='/hero/HeroImage.jpg'
            alt='Wooden carved door'
            layout='fill'
            objectFit='cover'
            quality={100}
            priority
          />
          <div className='absolute inset-0 bg-black/20' />{' '}
          {/* Overlay oscurecido */}
        </div>

        {/* Contenido del Hero */}
        <div className='flex flex-col justify-center items-start h-full px-6 md:px-20 text-white prose lg:prose-xl prose-slate'>
          <FadeInTitle className='text-4xl md:text-6xl font-bold leading-tight mb-4'>
            Your Vision,
            <br />
            Carved in Wood
          </FadeInTitle>
          <FadeIn className='text-lg md:text-xl mb-6'>
            Find One-Of-A-Kind Wooden Solutions
          </FadeIn>
          <button className='bg-[#c5a95e] text-white px-6 py-3 text-base rounded-md hover:bg-[#a28620] transition'>
            View Gallery
          </button>
        </div>
      </section>

      <section className='flex flex-col items-center bg-[#F4F4F4] justify-center w-full py-32 px-8 md:px-67 '>
        <FadeInTitle className='text-3xl md:text-6xl font-thin text-center'>
          Your Heritage Deserves to Be Built, Not <RotatingWords />
        </FadeInTitle>
      </section>

      <PerfilHome />
      <ServicesHome />
    </main>
  )
}
