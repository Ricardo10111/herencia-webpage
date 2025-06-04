'use client'

import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import SlideInFromLeft from './SlideInFromLeft'

const ContactSection = () => {
  return (
    <section className=' w-full'>
      {/* Título */}
      <FadeIn className='flex flex-col items-center justify-center w-full py-[128px_40px] px-8 md:px-67 '>
        <h2 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          Enquire Now!
        </h2>
        <h3 className='text-3xl md:text-6xl font-thin text-center'>
          “YOU WILL NEVER KNOW THE VALUE OF A MOMENT UNTIL IT BECOMES A MEMORY.”
        </h3>
      </FadeIn>

      {/* Imagen y Tarjeta */}
      <div className='relative w-full mt-12'>
        <SlideInFromLeft>
          <Image
            src='/contact/contactdown.jpg'
            alt='Contact Illustration'
            width={1441}
            height={600}
            className='w-full h-auto object-cover  '
          />
        </SlideInFromLeft>

        {/* Overlay para desktop */}
        <FadeIn className='hidden md:flex md:justify-between md:py-20 absolute right-10 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-md w-[436px] h-full p-10  shadow-lg text-center flex-col gap-10 z-10'>
          <ContactInfo />
        </FadeIn>
      </div>

      {/* Mobile Card */}
      <div className='md:hidden flex justify-center w-full mt-8 px-6'>
        <div className='bg-white/50 backdrop-blur-md w-full max-w-md p-8 rounded-md shadow-lg text-center flex flex-col gap-8'>
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}

const ContactInfo = () => (
  <>
    {/* Email */}
    <div className='flex flex-col items-center gap-1'>
      <img src='/contact/email.svg' alt='Email' className='w-20 h-20' />
      <h4 className='text-xl text-[#4a4a4a]'>EMAIL</h4>
      <p className='text-md text-[#333]'>contact@xyz</p>
    </div>

    {/* Address */}
    <div className='flex flex-col items-center gap-1'>
      <img src='/contact/location.svg' alt='Location' className='w-20 h-20' />
      <h4 className='text-xl text-[#4a4a4a]'>ADDRESS</h4>
      <p className='text-md text-[#333]'>PHZ Arizona</p>
    </div>

    {/* Contact */}
    <div className='flex flex-col items-center gap-1'>
      <img src='/contact/phone.svg' alt='Phone' className='w-20 h-20' />
      <h4 className='text-xl text-[#4a4a4a]'>CONTACT</h4>
      <p className='text-md text-[#333]'>+1 901 247 5467</p>
    </div>
  </>
)

export default ContactSection
