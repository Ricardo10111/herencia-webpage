import Image from 'next/image'

import FadeIn from './FadeIn'
import SlideInFromLeft from './SlideInFromLeft'

const ServicesImage = () => {
  return (
    <div className='flex flex-col w-full md:flex-row items-center justify-between gap-8 my-2'>
      <SlideInFromLeft>
        <Image
          src='/services/serviceImage.jpg'
          alt='service image'
          objectFit='cover'
          quality={100}
          className='hidden lg:block'
          width={1024}
          height={683}
        />
      </SlideInFromLeft>

      {/* middle card */}

      <FadeIn className='md:absolute  md:right-[160px] z-10 w-[95%] md:w-[440px] h-[591px] bg-white/50 backdrop-blur-md flex items-center justify-center'>
        <div className='flex flex-col items-center  gap-2 shadow-lg  overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-[1px] w-[95%] h-[95%] border-[#B58B61]'>
          <img
            src='/woodlogo4.svg'
            alt='services logo'
            className='w-[140px] h-[147px] object-cover'
          />
          <div className='p-4 flex flex-col items-center px-12 gap-6'>
            <h4 className='text-3xl  mb-2 text-center'>
              Creative, Passionate, Artistic
            </h4>
            <p className='text-[#414141] mb-4 text-center'>
              Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
              tristique purus vehicula felis velit ac. Tempus velit morbi
              accumsan
            </p>
          </div>
        </div>
      </FadeIn>
      {/* Placeholder for the right side image */}
      <div className='hidden md:block bg-[#F8F8F8] w-[351px] h-[757px]'></div>
    </div>
  )
}

export default ServicesImage
