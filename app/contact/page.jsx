'use client'

import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { createInfo } from '@/lib/api'
import { toast, Toaster } from 'sonner'

import FadeIn from '@/components/FadeIn'
import FadeOnLoad from '@/components/FadeOnLoad'
import ContactSection from '@/components/ContactSection'
import { useState } from 'react'

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

      <FadeOnLoad className='flex flex-col md:flex-row w-full min-h-screen bg-[#f8f8f8] mt-12 max-w-[1258px]'>
        <div className='w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center'>
          <form
            className='space-y-8 text-[#4a5057]'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className='block mb-2 font-semibold'>NAME</label>
              <input
                {...register('name', { required: true })}
                className='w-full border-b border-[#4a5057] bg-transparent focus:outline-none py-2'
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
                className='w-full border-b border-[#4a5057] bg-transparent focus:outline-none py-2'
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
                className='w-full border-b border-[#4a5057] bg-transparent focus:outline-none py-2'
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
                className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-[#eae4dd] file:text-black hover:file:bg-[#d5cbbf] transition'
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
              className='border border-[#4a5057] px-10 py-2 bg-[#eae4dd] hover:bg-[#d5cbbf] transition'
            >
              Send
            </button>
          </form>
        </div>

        <div className='w-full md:w-1/2 relative h-[500px] md:h-auto hidden md:block'>
          <Image
            src='/contact/doorcontact.jpg'
            alt='Contact Illustration'
            fill
            className='object-cover hidden md:block'
          />
        </div>
      </FadeOnLoad>

      <ContactSection />
    </section>
  )
}

export default Contact
