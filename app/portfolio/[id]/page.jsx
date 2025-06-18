'use client'

import { useParams, useRouter } from 'next/navigation'
import woodarts from '@/lib/data/woodarts'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeIn from '@/components/FadeIn'
import SlideInFromLeft from '@/components/SlideInFromLeft'
import SlideInFromRight from '@/components/SlideInFromRight'

const DoorDetail = () => {
  const { id } = useParams()
  const router = useRouter()
  const woodart = woodarts.find((d) => d.id === parseInt(id))

  if (!woodart)
    return <div className='p-8 text-red-500'>Producto no encontrado.</div>

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className=' flex min-h-screen flex-col items-center justify-between'
    >
      <FadeIn className=' container flex flex-col items-center  justify-center w-full py-[128px_60px] px-8 md:px-67 '>
        <h1 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          GALLERY
        </h1>
        <h2 className='text-3xl md:text-6xl font-thin text-center'>
          {woodart.name}
        </h2>
      </FadeIn>

      <div className='flex flex-col justify-center items-center w-full gap-8 p-8'>
        <SlideInFromLeft className='flex flex-col md:flex-row justify-between w-full items-center max-w-5xl '>
          <button
            onClick={() => router.back()}
            className='bg-[#E9E1D9] hover:bg-[#dfd3c9] px-10 py-4 relative md:right-10 cursor-pointer transition'
          >
            ← Back to Gallery
          </button>
          <p className='text-2xl font-extralight'>
            Date: <span className='text-[#BBA085]'>{woodart.date}</span>
          </p>
          <p className='text-2xl font-extralight'>
            Category: <span className='text-[#BBA085]'>{woodart.category}</span>
          </p>
        </SlideInFromLeft>
        <Image
          src={woodart.image2}
          alt={woodart.title}
          width={1134}
          height={567}
        />
        <SlideInFromRight className='flex flex-col md:flex-row justify-between items-center w-full max-w-5xl md:gap-72'>
          <p className='text-2xl font-extralight text-center max-w-lg'>
            {woodart.description}
          </p>
          <p className='text-4xl font-extralight'>{woodart.costNumber}</p>
        </SlideInFromRight>
      </div>
    </motion.div>
  )
}

export default DoorDetail
