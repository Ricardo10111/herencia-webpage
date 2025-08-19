'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { createInfo } from '@/lib/api'
import Image from 'next/image'

import FadeIn from '@/components/FadeIn'

const ContactSection = () => {
  const [imagePreview, setImagePreview] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const handleImagePreview = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setImagePreview(reader.result)
      reader.readAsDataURL(file)
    }
  }

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
      toast.success('Form sent successfully!', { id: toastId })
      reset()
      setImagePreview(null)
    } catch (error) {
      toast.error('Failed to send form.', { id: toastId })
    }
  }

  return (
    <section className='w-full mx-auto pb-14'>
      <Toaster richColors position='top-center' />

      <FadeIn className='flex flex-col justify-center md:flex-row min-h-screen  bg-cover bg-center mt-12 '>
        <div
          className='flex items-center justify-center flex-col md:flex-row w-full min-h-screen  bg-cover bg-center mt-12 max-w-[2000px]'
          style={{ backgroundImage: "url('/contact/wood1.jpg')" }}
        >
          {/* Left Side - Contact Form */}
          <div className='w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center'>
            <h4 className='text-[#c5a95e] text-lg tracking-widest text-center uppercase mb-2'>
              Contact
            </h4>
            <h2 className='text-5xl text-white md:text-6xl font-light  mb-10 text-center'>
              Get in Touch
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-8 text-white'
            >
              <div>
                <label className='block mb-2 font-semibold text-white'>
                  NAME
                </label>
                <input
                  type='text'
                  {...register('name', { required: true })}
                  className='w-full border-b border-whitebg-transparent focus:outline-none py-2'
                />
                {errors.name && (
                  <span className='text-red-500 text-sm'>
                    Este campo es obligatorio.
                  </span>
                )}
              </div>

              <div>
                <label className='block mb-2 font-semibold text-white'>
                  EMAIL
                </label>
                <input
                  type='email'
                  {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  className='w-full border-b border-white bg-transparent focus:outline-none py-2'
                />
                {errors.email && (
                  <span className='text-red-500 text-sm'>
                    Ingresa un correo válido.
                  </span>
                )}
              </div>
              <div>
                <label className='block mb-2 font-semibold text-white'>
                  PHONE
                </label>
                <input
                  type='tel'
                  {...register('phone')}
                  className='w-full border-b border-white bg-transparent focus:outline-none py-2'
                />
              </div>

              <div>
                <label className=' text-white block mb-2 font-semibold'>
                  MESSAGE
                </label>
                <textarea
                  rows='4'
                  {...register('textArea')}
                  className='w-full border-b border-white bg-transparent focus:outline-none py-2'
                />
              </div>

              <div className='w-full '>
                <label className='block mb-2 font-semibold text-white'>
                  UPLOAD IMAGE
                </label>
                <input
                  type='file'
                  accept='image/*'
                  {...register('image')}
                  onChange={handleImagePreview}
                  className=' block max-w-fit text-sm text-white file:mr-4 file:py-2 file:px-4  file:border-0 file:text-sm  file:bg-[#c5a95e] file:text-white hover:file:bg-[#cfba75] transition'
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
                className='w-full px-10 py-2 bg-[#c5a95e] hover:bg-[#cfba75] transition '
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

export default ContactSection
