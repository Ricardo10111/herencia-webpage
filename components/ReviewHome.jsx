'use client'

import { useEffect, useState } from 'react'
import FadeIn from './FadeIn'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reviewList = [
  {
    id: 1,
    name: 'John Doe',
    description:
      'The attention to detail in the woodwork is unparalleled. Every piece tells a story.',
    image: '/review/imagereview.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    description:
      'The designs are not only beautiful but also timeless, making them perfect for any home.',
    image: '/review/image2.png',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    description:
      'I love that they use sustainable wood, making my purchase eco-friendly.',
    image: '/review/image3.png',
  },
]

const ReviewHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewList.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviewList.length - 1 ? 0 : prev + 1))
  }

  const currentReview = reviewList[currentIndex]

  return (
    <section className='w-full'>
      <FadeIn className='flex flex-col items-center justify-center w-full pb-10 px-8 md:px-67 py-20'>
        <h3 className='text-3xl md:text-6xl font-thin text-center'>
          The{' '}
          <span className='text-3xl md:text-6xl font-thin text-[#C5A95E]'>
            Impact{' '}
          </span>
          of Our Masterpieces
        </h3>
      </FadeIn>

      <div className='bg-[#F8F8F8] h-auto px-6 py-12 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10 relative transition-opacity duration-700 ease-in-out'>
        {/* Arrow left */}
        <button
          onClick={handlePrev}
          className='absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white z-10'
        >
          <ChevronLeft size={24} />
        </button>

        {/* Review box */}
        <FadeIn className='max-w-lg text-center bg-white shadow-md p-10'>
          <p className='text-4xl text-[#c5a95e] mb-4'>“</p>
          <p className='text-xl text-gray-700 mb-6'>
            {currentReview.description}
          </p>
          <p className='text-md font-semibold text-gray-600'>
            {currentReview.name}
          </p>
        </FadeIn>

        {/* Reviewer image */}
        <FadeIn>
          <div className='relative w-[300px] h-[300px]  overflow-hidden shadow-md'>
            <Image
              src={currentReview.image}
              alt={currentReview.name}
              layout='fill'
              objectFit='cover'
              className=''
            />
          </div>
        </FadeIn>

        {/* Arrow right */}
        <button
          onClick={handleNext}
          className='absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white z-10'
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}

export default ReviewHome
