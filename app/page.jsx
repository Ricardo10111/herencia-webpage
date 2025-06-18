'use client'

import Image from 'next/image'
import Link from 'next/link'

import RotatingWords from '@/components/RotatingWords'
import PerfilHome from '@/components/PerfilHome'
import FadeInTitle from '@/components/FadeInTitle'
import FadeInFromCenter from '@/components/FadeInFromCenter'
import ServicesHome from '@/components/ServicesHome'
import ServicesImage from '@/components/ServicesImage'
import PortfolioHome from '@/components/PortfolioHome'
import ReviewHome from '@/components/ReviewHome'
import Stats from '@/components/Stats'
import ContactHome from '@/components/ContactHome'
import GsapHeroContent from '@/components/GsapHeroContent'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      {/* Image in the hero */}
      <section className='relative w-full h-[100vh] overflow-hidden'>
        {/* Imagen de fondo */}
        <div className='absolute inset-0 -z-10 aspect-w-16 aspect-h-9'>
          <Image
            src='/hero/woodhero.jpg'
            alt='Wooden carved door'
            layout='fill'
            objectFit='cover'
            quality={100}
            priority
          />
          <div className='absolute inset-0 bg-black/20' />
          {/* Overlay oscurecido */}
        </div>

        <GsapHeroContent />
      </section>

      <section className='flex flex-col items-center bg-[#F4F4F4] justify-center w-full py-32 px-8 md:px-67 '>
        <FadeInTitle className='text-3xl md:text-6xl font-thin text-center'>
          Your Heritage Deserves to Be Built, Not <span></span>
          <RotatingWords />
        </FadeInTitle>
      </section>

      <PerfilHome />
      <ServicesHome />
      <ServicesImage />
      <PortfolioHome />
      <ReviewHome />
      <Stats />
      <ContactHome />
    </main>
  )
}
