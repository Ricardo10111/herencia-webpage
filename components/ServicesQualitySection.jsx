'use client'

import Image from 'next/image'
import FadeIn from './FadeIn'
import SlideInFromLeft from './SlideInFromLeft'
import Link from 'next/link'

const ServicesQualitySection = () => {
  return (
    <section className='relative flex flex-col lg:flex-row w-full  justify-center gap-2 px-1 py-20'>
      <SlideInFromLeft className='w-full max-w-md lg:max-w-[480px] z-10'>
        <Image
          src='/about/door2.jpg'
          alt='Quality Image'
          width={329}
          height={655}
          className='w-full object-cover hidden md:block'
        />
      </SlideInFromLeft>

      <div className='relative w-full max-w-xl z-10'>
        <div className='absolute top-0 md:top-30 right-0 md:right-30 w-[464px] h-[482px] bg-[#F5F5F5] -z-10  shadow-md' />

        <FadeIn className='relative flex flex-col items-start justify-center  px-10 py-10 gap-6 md:gap-20'>
          <h3 className='text-3xl md:text-6xl font-thin text-center'>
            Quality Service
          </h3>
          <p className='text-gray-600 leading-relaxed md:text-2xl'>
            We are committed to providing the highest quality service in the
            industry. Our team of experts ensures that every detail is taken
            care of, from the initial consultation to the final delivery.
          </p>

          <Link
            href='/contact'
            className='bg-[#C5A95E] text-white hover:bg-[#cfba75] px-20 py-4 mt-10 cursor-pointer transition'
          >
            Contact Us
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

export default ServicesQualitySection
