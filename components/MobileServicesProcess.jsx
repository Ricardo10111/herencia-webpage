'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: '/about/image1.png',
    title: 'BREAKING THE ICE',
    text: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam.',
  },
  {
    id: 2,
    image: '/about/image2.png',
    title: 'BREAKING THE ICE',
    text: 'Vestibulum ante ipsum primis in faucibus. Justo molestie amet vulputate aliquam.',
  },
  {
    id: 3,
    image: '/about/image3.png',
    title: 'BREAKING THE ICE',
    text: 'Nullam ac urna eu felis dapibus condimentum sit amet a augue.',
  },
  {
    id: 4,
    image: '/about/image3.png',
    title: 'BREAKING THE ICE',
    text: 'Nullam ac urna eu felis dapibus condimentum sit amet a augue.',
  },
]

const MobileServicesProcess = () => {
  return (
    <section className='w-full max-w-md mx-auto md:hidden py-20 px-6'>
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className='w-full'
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className='flex flex-col items-center justify-center px-6 py-12 text-center'
          >
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              width={300}
              height={400}
              className=' object-cover ml-6 mb-6'
            />
            <h3 className='text-4xl text-[#c5a95e] mb-2'>{slide.id}</h3>
            <div className='w-10 border-t border-[#c5a95e] mx-auto mb-4' />
            <h4 className='text-2xl  mb-2'>{slide.title}</h4>
            <p className='text-gray-700 leading-relaxed max-w-sm'>
              {slide.text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default MobileServicesProcess
