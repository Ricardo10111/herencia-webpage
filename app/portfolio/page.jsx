import React from 'react'

import FadeIn from '@/components/FadeIn'
import PortfolioGallery from '@/components/PortfolioGallery'
import MobileDoorCard from '@/components/MobileDoorCard' // asegúrate que esté bien la ruta
import woodarts from '@/lib/data/woodarts'

const portfolio = () => {
  return (
    <section className='flex min-h-screen flex-col items-center justify-between '>
      <FadeIn className='container flex flex-col items-center justify-center w-full py-[128px_60px] px-8 md:px-67'>
        <h1 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          PORTFOLIO
        </h1>
        <h2 className='text-3xl md:text-6xl font-thin text-center'>
          HIGHLIGHTED WORKS
        </h2>
      </FadeIn>

      {/* Desktop version */}
      <div className='hidden md:block w-full'>
        <PortfolioGallery />
      </div>

      {/* Mobile version */}
      <div className='flex flex-col gap-10 md:hidden px-6 pb-20'>
        {woodarts.map((woodart) => (
          <MobileDoorCard key={woodart.id} woodart={woodart} />
        ))}
      </div>
    </section>
  )
}

export default portfolio
