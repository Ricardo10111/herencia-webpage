'use client'

import { useEffect, useState } from 'react'
import FadeIn from './FadeIn'
import Image from 'next/image'
import Link from 'next/link'

import woodarts from '@/lib/data/woodarts'

const PortfolioHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeState, setFadeState] = useState('fade-in')

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fade-out') // empieza salida

      setTimeout(() => {
        setCurrentIndex((prev) => (prev === woodarts.length - 1 ? 0 : prev + 1))
        setFadeState('fade-in')
      }, 700)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const woodart = woodarts[currentIndex]

  return (
    <section className='w-full'>
      <FadeIn className='flex flex-col items-center justify-center w-full pb-20 px-8 md:px-67'>
        <h2 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          PORTFOLIO
        </h2>
        <h3 className='text-3xl md:text-6xl font-thin text-center'>
          Our Galery
        </h3>
      </FadeIn>

      <div
        className={`transition-container ${fadeState} flex flex-col md:flex-row items-center justify-between gap-12 px-6 w-full`}
      >
        <div className='bg-[#F8F8F8] max-w-[572px] md:w-[600px] p-10 max-h-[323px] flex flex-col justify-center mt-40'>
          <h4 className='text-5xl font-bold text-[#c5a95e]'>{woodart.id}</h4>
          <h3 className='text-3xl text-[#4a4a4a] mb-3'>{woodart.title}</h3>
          <p className='text-[#5B5B5B] leading-relaxed'>{woodart.feature}</p>
        </div>

        <div className='relative w-[320px] h-[492px]'>
          <Image
            src={woodart.image}
            alt={woodart.title}
            layout='fill'
            objectFit='contain'
            className=''
          />
        </div>

        <div className='relative w-[320px] h-[492px]'>
          <Image
            src={woodart.image2}
            alt={`${woodart.title} detail`}
            layout='fill'
            objectFit='contain'
            className=''
          />
        </div>
      </div>

      <FadeIn className='flex justify-end w-full px-8 md:px-20 pt-10'>
        <Link
          href='/portfolio'
          className='bg-[#c5a95e] text-white px-6 py-3 rounded-md hover:bg-[#a28620] transition'
        >
          View Gallery
        </Link>
      </FadeIn>
    </section>
  )
}

export default PortfolioHome
