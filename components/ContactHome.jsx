'use client'

import { useState } from 'react'
import Image from 'next/image'

import FadeIn from '@/components/FadeIn'

const ContactSection = () => {
  const [imagePreview, setImagePreview] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setImagePreview(reader.result)
      reader.readAsDataURL(file)
    }
  }

  return (
    <FadeIn className='flex flex-col md:flex-row w-full min-h-screen bg-[#f8f8f8] mt-12 max-w-[1258px]'>
      {/* Left Side - Contact Form */}
      <div className='w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center'>
        <h4 className='text-[#c5a95e] text-lg tracking-widest uppercase mb-2'>
          Contact
        </h4>
        <h2 className='text-5xl md:text-6xl font-light text-[#4a5057] mb-10'>
          Get in Touch
        </h2>

        <form className='space-y-8 text-[#4a5057]'>
          <div>
            <label className='block mb-2 font-semibold'>NAME</label>
            <input
              type='text'
              className='w-full border-b border-[#4a5057] bg-transparent focus:outline-none py-2'
            />
          </div>

          <div>
            <label className='block mb-2 font-semibold'>EMAIL</label>
            <input
              type='email'
              className='w-full border-b border-[#4a5057] bg-transparent focus:outline-none py-2'
            />
          </div>

          <div>
            <label className='block mb-2 font-semibold'>MESSAGE</label>
            <textarea
              rows='4'
              className='w-full border-b border-[#4a5057] bg-transparent focus:outline-none py-2'
            />
          </div>

          <div>
            <label className='block mb-2 font-semibold'>UPLOAD IMAGE</label>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4  file:border-0 file:text-sm  file:bg-[#eae4dd] file:text-black hover:file:bg-[#d5cbbf] transition'
            />
            {imagePreview && (
              <div className='mt-4'>
                <Image
                  src={imagePreview}
                  alt='Preview'
                  width={100}
                  height={100}
                  className='rounded border'
                />
              </div>
            )}
          </div>

          <button
            type='submit'
            className='border border-[#4a5057] px-10 py-2 bg-[#eae4dd] hover:bg-[#d5cbbf] transition '
          >
            Send
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className='w-full md:w-1/2 relative h-[500px] md:h-auto hidden md:block'>
        <Image
          src='/contact/wood 1.jpg'
          alt='Contact Illustration'
          fill
          className='object-cover hidden md:block'
        />
      </div>
    </FadeIn>
  )
}

export default ContactSection
