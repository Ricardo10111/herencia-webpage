import Image from 'next/image'

import FadeIn from './FadeIn'
import SlideInFromLeft from './SlideInFromLeft'

const ServicesImage = () => {
  return (
    <section className='w-full flex justify-center pb-30 px-4 md:px-8'>
      <div className='relative w-full  flex flex-col lg:flex-row items-center justify-between gap-6 my-2'>
        {/* Left image */}
        <SlideInFromLeft className='hidden lg:block w-[60%] h-full'>
          <Image
            src='/services/serviceImage.jpg'
            alt='service image'
            className='w-full h-full object-cover'
            width={800}
            height={757}
          />
        </SlideInFromLeft>

        {/* Card */}
        <FadeIn className='relative lg:absolute lg:left-[55%] z-10 w-full sm:w-[440px] h-auto lg:h-[591px] bg-white/50 backdrop-blur-md shadow-lg border border-[#B58B61] flex items-center justify-center'>
          <div className='flex flex-col items-center gap-2 w-[95%] py-8 h-full text-center'>
            <img
              src='/woodlogo4.svg'
              alt='services logo'
              className='w-[140px] h-[147px] object-cover mx-auto'
            />
            <div className='p-4 flex flex-col items-center px-6 gap-6'>
              <h4 className='text-2xl lg:text-3xl mb-2'>
                Your Story, Crafted by Masters
              </h4>
              <p className='text-[#414141] text-sm lg:text-base'>
                Each artisan channels generations of skill into a piece made
                only for you.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Right side placeholder */}
        <div className='hidden lg:block bg-[#F8F8F8] w-[451px] h-[757px]'></div>
      </div>
    </section>
  )
}

export default ServicesImage
