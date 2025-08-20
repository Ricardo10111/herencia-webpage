'use client'

import { useEffect, useState } from 'react'
import FadeIn from './FadeIn'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

// const PLACE_ID = '0x82f15fb580f9525:0x7f8792ddf6c7c12a'
// const GOOGLE_REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${PLACE_ID}`
// const GOOGLE_WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`

const reviewList = [
  {
    id: 1,
    name: 'David Rivas',
    description:
      'AWESOME work! Juan was very professional and courteous. He listened to what I wanted and gave me more than I had ever imagined...',
    sources: 'Fuente: Google Reviews',
    image: '/review/image.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Victor Cisneros',
    description:
      'I am thrilled with the custom-made flowerpot stands from Herencia. They were beautifully crafted and fit the space perfectly, even with the uncommon angles in the corner. Their attention to detail made all the difference!',
    sources: 'Fuente: Google Reviews',
    image: '/review/image.png',
    rating: 5,
  },
  {
    id: 3,
    name: 'Raquel Martinez',
    description:
      'Herencia custom wood art is amazing, we are so happy with our wooden stairs !! Im so surprised that he was able to install them in 1 day,! I would definitely recommend them 100%...',
    sources: 'Fuente: Google Reviews',
    image: '/review/image.png',
    rating: 5,
  },
  {
    id: 4,
    name: 'Angel Ramos-Rojas',
    description:
      'Juan Pablo did our closets for the garage, laundry and office. He went above and beyond and exceeded our expectations. He was punctual and left the worksite clean everyday.',
    sources: 'Fuente: Google Reviews',
    image: '/review/image.png',
    rating: 5,
  },
  {
    id: 5,
    name: 'Glenn Burnett',
    description:
      "Great experience!! On time, excellent quality product, can't recommend them highly enough! Will definitely use them for phase 2 of my kitchen project.",
    sources: 'Fuente: Google Reviews',
    image: '/review/image.png',
    rating: 5,
  },
]

function Stars({ value = 5 }) {
  const n = Math.round(Number(value))
  return (
    <div
      className='flex gap-1 justify-center text-[#c5a95e]'
      aria-label={`${n} out of 5 stars`}
    >
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < n ? '#c5a95e' : 'none'}
          stroke='#c5a95e'
        />
      ))}
    </div>
  )
}

export default function ReviewHome() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviewList.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewList.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviewList.length - 1 ? 0 : prev + 1))
  }

  const r = reviewList[currentIndex]

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
          aria-label='Previous review'
          className='absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white z-10'
        >
          <ChevronLeft size={24} />
        </button>

        {/* Review box */}
        <FadeIn className='max-w-lg text-center bg-white shadow-md p-10'>
          <p className='text-4xl text-[#c5a95e] mb-4'>“</p>
          <p className='text-xl text-gray-700 mb-4'>{r.description}</p>
          <div className='mb-3'>
            <Stars value={r.rating} />
          </div>
          <p className='text-md font-semibold text-gray-600'>{r.name}</p>
          <p className='text-sm text-gray-500'>{r.sources}</p>
        </FadeIn>

        {/* Reviewer image */}
        <FadeIn className='hidden md:block'>
          <div className='relative w-[300px] h-[300px] overflow-hidden'>
            <Image
              src={r.image}
              alt={r.name}
              fill
              className='object-cover rounded-full'
              sizes='300px'
              priority={currentIndex === 0}
            />
          </div>
        </FadeIn>

        {/* Arrow right */}
        <button
          onClick={handleNext}
          aria-label='Next review'
          className='absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white z-10'
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Attribution + buttons */}
      {/* <div className='mt-6 flex flex-col items-center gap-3'>
        <p className='text-xs text-gray-500'>
          Reviews shown are curated testimonials. See more on Google.
        </p>
        <div className='flex gap-3'>
          <a
            href={GOOGLE_REVIEWS_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center px-4 py-2 bg-[#c5a95e] text-white rounded hover:opacity-90 hover:cursor-pointer'
          >
            See all reviews on Google
          </a>
          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center px-4 py-2 border border-[#c5a95e] text-[#c5a95e] rounded hover:bg-[#c5a95e]/10 hover:cursor-pointer'
          >
            Write a review
          </a>
        </div>
      </div> */}
    </section>
  )
}
