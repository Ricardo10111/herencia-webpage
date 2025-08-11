'use client'

import Hero from '@/components/Hero'
import PerfilHome from '@/components/PerfilHome'
import ServicesHome from '@/components/ServicesHome'
import ServicesImage from '@/components/ServicesImage'
import PortfolioHome from '@/components/PortfolioHome'
import ReviewHome from '@/components/ReviewHome'
import Stats from '@/components/Stats'
import ContactHome from '@/components/ContactHome'

export default function Home() {
  return (
    <main className='max-w-[2000px] mx-auto'>
      <Hero />
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
