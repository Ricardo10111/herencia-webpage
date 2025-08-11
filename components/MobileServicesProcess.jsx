'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: '/services/prImage1.jpg',
    title: 'Design Consultation',
    text: 'We listen to your vision and ideas, translating them into an initial design that celebrates your unique story and style.',
  },
  {
    id: 2,
    image: '/services/prImage2.jpg',
    title: 'Project Approval',
    text: 'We present detailed sketches, materials, and costs for your review and approval — ensuring everything aligns perfectly with your expectations.',
  },
  {
    id: 3,
    image: '/services/prImage3.jpg',
    title: 'Fabrication',
    text: 'Our master artisans bring your design to life with expert craftsmanship, using the finest materials and techniques passed down through generations.',
  },
  {
    id: 4,
    image: '/services/prImage4.jpg',
    title: 'Signature Finishes',
    text: 'We complete meticulous finishing touches, refining every detail to uphold our highest standards of craftsmanship before your personal unveiling.',
  },
  {
    id: 5,
    image: '/services/prImage4.jpg',
    title: 'La Clasura',
    text: 'We celebrate the completion together, closing the project in a meaningful way as your new heirloom piece joins your story.',
  },
]

const MobileServicesProcess = () => {
  return (
    <section className='w-full max-w-md mx-auto md:hidden py-2 px-6'>
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
