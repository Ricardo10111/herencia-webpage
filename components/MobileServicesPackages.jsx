'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'

const slides = [
  {
    image: '/about/image1.png',
    title: 'LOREM',
    text: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.',
    subtitle: 'LOREM IPSUM',
    price: '$99.99',
  },
  {
    image: '/about/image2.png',
    title: 'LOREM',
    text: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.',
    subtitle: 'LOREM IPSUM',
    price: '$99.99',
  },
  {
    image: '/about/image3.png',
    title: 'LOREM',
    text: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.',
    subtitle: 'LOREM IPSUM',
    price: '$99.99',
  },
]

const MobileServicesPackages = () => {
  return (
    <section className='w-full max-w-md mx-auto md:hidden py-5 px-6'>
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
            <h3 className='text-2xl  mb-2'>{slide.title}</h3>
            <div className='w-10  mx-auto mb-4' />
            <p className='text-gray-700 leading-relaxed max-w-sm'>
              {slide.text}
            </p>
            <h4 className='mt-5 text-[#BBA085]'>{slide.subtitle}</h4>
            <p className='text-lg font-bold mt-2'>{slide.price}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default MobileServicesPackages
