'use client'

import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { createInfo } from '@/lib/api'
import { toast, Toaster } from 'sonner'

import FadeIn from '@/components/FadeIn'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'

import ContactSection from '@/components/ContactSection'
import { useState } from 'react'
import SlideInFromLeft from '@/components/SlideInFromLeft'
import SlideInFromRight from '@/components/SlideInFromRight'
import FadeOnLoad from '@/components/FadeOnLoad'

const Contact = () => {
  const [imagePreview, setImagePreview] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const toastId = toast.loading('Sending...')
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('phone', data.phone || '')
    formData.append('textArea', data.textArea || '')
    if (data.image && data.image[0]) {
      formData.append('image', data.image[0])
    }

    try {
      await createInfo(formData)
      toast.success('Form sent successfully!', {
        id: toastId,
        duration: 3000,
      })
      reset()
      setImagePreview(null)
    } catch (error) {
      toast.error('Failed to send form.', {
        id: toastId,
        duration: 3000,
      })
    }
  }

  const handleImagePreview = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setImagePreview(reader.result)
      reader.readAsDataURL(file)
    }
  }

  return (
    <section className='flex min-h-screen flex-col items-center justify-between max-w-[1600px] mx-auto'>
      <Toaster richColors position='top-center' />
      <FadeIn className='container flex flex-col items-center justify-center w-full py-[128px_60px] px-8 md:px-67'>
        <h1 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          CONTACT
        </h1>
        <h2 className='text-3xl md:text-6xl font-thin text-center'>
          Get in Touch
        </h2>
      </FadeIn>
      <FadeOnLoad className='flex flex-col-reverse justify-between md:flex-row w-full min-h-screen mt-2 md:mt-10 max-w-[2000px] mx-auto px-2 md:px-20'>
        <SlideInFromLeft className='w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-start items-start'>
          <div className='mb-10 border-b border-[#c5a95e] pb-4 w-3/5'>
            <p className='text-3xl mb-4'>Location</p>
            <p className='text-lg text-[#C5A95E]'>Phoenix, Arizona</p>
          </div>
          <div className='mb-10 border-b border-[#c5a95e] pb-4 w-3/5'>
            <p className='text-3xl mb-4'>Text Us</p>
            <p className='text-lg text-[#C5A95E]'>(623) 498-5789</p>
            <p className='text-lg text-[#C5A95E]'>(602) 799-7522</p>
          </div>
          <div className='mb-10 border-b border-[#c5a95e] pb-4 w-3/5'>
            <p className='text-3xl mb-4'>Any Questions?</p>
            <p className='text-lg'>Give us an email to get in touch asap</p>
            <p className='text-lg text-[#C5A95E]'>herencia.cwa@gmail.com</p>
          </div>
          <div className='mb-10 '>
            <p className='text-3xl'>Follow us</p>
            <div className='flex gap-6 text-[#9e7b55] text-xl mt-4'>
              {/* Social Media Icons */}
              <a
                href='https://www.facebook.com/HerenciaCWA?mibextid=wwXIfr&rdid=cTU4c3vUW1NQ7YkW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19fnL9H3QG%2F%3Fmibextid%3DwwXIfr'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebookF />
              </a>

              <a
                href='https://www.youtube.com/@herenciacwa'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </a>
              <a
                href='https://www.instagram.com/herencia.cwa/?utm_source=qr'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </SlideInFromLeft>
        <div className='flex flex-col   min-h-screen bg-[#f8f8f8] mt-12 py-12 max-w-[1258px]'>
          <div className='flex flex-col items-start justify-start w-full pb-12 md:py-12 px-8 md:px-20 gap-4'>
            <h3 className='text-2xl md:text-5xl font-thin '>
              We are here to Help
            </h3>
            <h3 className='text-md md:text-2xl font-extralight text-[#353535]'>
              Herencia is dedicated to provide to you an empowering experience
              with unmatched expertise.
            </h3>
          </div>

          <div className='w-full px-10 md:px-20 flex flex-col justify-center'>
            <form
              className='space-y-8 text-[#4a5057]'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className='block mb-2 font-semibold'>NAME</label>
                <input
                  {...register('name', { required: true })}
                  className='w-full md:w-1/2 border-b border-[#4a5057] bg-transparent focus:outline-none py-2'
                />
                {errors.name && (
                  <span className='text-red-500 text-sm'>
                    Este campo es obligatorio.
                  </span>
                )}
              </div>

              <div>
                <label className='block mb-2 font-semibold'>EMAIL</label>
                <input
                  type='email'
                  {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  className='w-full md:w-1/2 border-b border-[#4a5057] bg-transparent focus:outline-none py-2'
                />
                {errors.email && (
                  <span className='text-red-500 text-sm'>
                    Ingresa un correo válido.
                  </span>
                )}
              </div>

              <div>
                <label className='block mb-2 font-semibold'>PHONE</label>
                <input
                  type='tel'
                  {...register('phone')}
                  className='w-full md:w-1/2 border-b border-[#4a5057] bg-transparent focus:outline-none py-2'
                />
              </div>

              <div>
                <label className='block mb-2 font-semibold'>MESSAGE</label>
                <textarea
                  rows='4'
                  {...register('textArea')}
                  className='w-full border-b border-[#4a5057] bg-transparent focus:outline-none py-2'
                />
              </div>

              <div>
                <label className='block mb-2 font-semibold'>UPLOAD IMAGE</label>
                <input
                  type='file'
                  accept='image/*'
                  {...register('image')}
                  onChange={handleImagePreview}
                  className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-[#c5a95e] file:text-white hover:file:bg-[#cfba75] transition hover:file:cursor-pointer'
                />
                {imagePreview && (
                  <div className='mt-4 flex items-center gap-4'>
                    <Image
                      src={imagePreview}
                      alt='Preview'
                      width={100}
                      height={100}
                      className='rounded border'
                    />
                    <button
                      type='button'
                      onClick={() => {
                        setImagePreview(null)
                        const fileInput =
                          document.querySelector('input[type="file"]')
                        if (fileInput) fileInput.value = ''
                      }}
                      className='px-3 py-1 bg-[#c5a95e] text-white rounded hover:bg-red-600 transition hover:cursor-pointer'
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              <button
                type='submit'
                className='border text-white border-[#c5a95e] px-10 py-2 w-full bg-[#c5a95e] hover:bg-[#cfba75] transition hover:cursor-pointer'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </FadeOnLoad>

      <ContactSection />
    </section>
  )
}

export default Contact
