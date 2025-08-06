'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

import FadeIn from './FadeIn'

const images = [
  '/carousel/image1.png',
  '/carousel/image2.jpg',
  '/carousel/image3.JPG',
  '/carousel/image4.jpg',
  '/carousel/image5.jpg',
  '/carousel/image6.jpg',

  // agrega más imágenes según necesites
]

const SmoothInfiniteCarousel = () => {
  return (
    <FadeIn className='w-full overflow-hidden mt-20'>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2.5} // en desktop
        spaceBetween={20}
        speed={6000} // más alto = más lento pero suave
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={true}
        breakpoints={{
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
        className='mySwiper'
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className='w-full h-[430px] object-cover shadow-lg'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </FadeIn>
  )
}

export default SmoothInfiniteCarousel
