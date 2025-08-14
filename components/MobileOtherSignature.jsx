'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'

const MobileOtherSignature = ({ items = [] }) => {
  if (!items.length) return null

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
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className='flex flex-col items-center justify-center px-6 py-12 text-center'
          >
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className='group block'
            >
              <Image
                src={item.image}
                alt={`Slide ${item.id}`}
                width={300}
                height={400}
                className=' object-cover ml-6 mb-6'
              />
            </Link>

            {/* <h3 className='text-4xl text-[#c5a95e] mb-2'>{item.id}</h3>
            <div className='w-10 border-t border-[#c5a95e] mx-auto mb-4' />
            <h4 className='text-2xl  mb-2'>{item.title}</h4>
            <p className='text-gray-700 leading-relaxed max-w-sm'>
              {item.text}
            </p> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default MobileOtherSignature
