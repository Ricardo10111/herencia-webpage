'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import FadeIn from '@/components/FadeIn'
import SlideInFromLeft from './SlideInFromLeft'
import SlideInFromRight from './SlideInFromRight'

const AboutFacts = () => {
  return (
    <section className='py-20 px-6  w-full'>
      <FadeIn className='text-center mb-16'>
        <h2 className='text-[#c5a95e] text-2xl md:text-4xl font-thin'>
          GET TO KNOW ME
        </h2>
        <h3 className='text-3xl md:text-6xl font-thin'>
          A Few Facts About Myself
        </h3>
      </FadeIn>

      {/* Desktop Grid */}
      <div className=' grid md:grid-cols-2 gap-20 lg:max-w-6xl md:max-w-5xl mx-auto px-12'>
        <SlideInFromLeft>
          <Image
            src='/about/image1.jpg'
            alt='About Image 1'
            width={360}
            height={460}
            className='rounded-md object-cover w-full h-auto'
          />
        </SlideInFromLeft>
        <SlideInFromRight className='flex flex-col justify-center items-center gap-6'>
          <h3 className='text-2xl md:text-4xl font-thin'>
            OUR <span className='text-[#c5a95e]'>GROWING </span>LEGACY{' '}
          </h3>
          <p>
            What started in a small Arizona workshop now touches families and
            homes across the U.S. Every piece we craft becomes a bridge — from
            past to present, from here to wherever your story lives.
          </p>
        </SlideInFromRight>
        <SlideInFromLeft className='flex flex-col justify-center items-center gap-6'>
          <h3 className='text-2xl md:text-4xl font-thin'>
            OUR <span className='text-[#c5a95e]'>TOP </span>MEDIUMS{' '}
          </h3>
          <Image
            src='/about/image2.jpg'
            alt='About Image 2'
            width={360}
            height={460}
            className='rounded-md object-cover w-full h-auto'
          />
        </SlideInFromLeft>
        <SlideInFromRight className='flex flex-col justify-center items-center gap-6'>
          <h3 className='text-2xl md:text-4xl font-thin'>
            OUR <span className='text-[#c5a95e]'>TOP </span>STYLES
          </h3>
          <p className='font-extralight text-xs text-[#c5a95e]'>
            Larger = More
          </p>
          <Image
            src='/about/image3.jpg'
            alt='About Image 3'
            width={360}
            height={460}
            className='rounded-md object-cover w-full h-auto'
          />
        </SlideInFromRight>
      </div>
    </section>
  )
}

export default AboutFacts
