'use client'

import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export default function OtherSignature({ items = [] }) {
  if (!items.length) return null

  return (
    <section className='flex flex-col items-center justify-center w-full py-20 px-6 md:px-20'>
      <FadeIn className='flex flex-col items-center justify-center w-full pb-10 px-8 md:px-67 py-12'>
        <h3 className='text-3xl md:text-6xl font-thin text-center'>
          Other <span className='text-[#C5A95E]'>Signature </span>Projects
        </h3>
      </FadeIn>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full'>
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/portfolio/${item.id}`}
            className='group block'
          >
            <div className='overflow-hidden rounded-lg shadow-md'>
              <Image
                src={item.image}
                alt={item.title || item.name}
                width={800}
                height={800}
                className='h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105'
                priority={false}
              />
            </div>
            {/* <h4 className='text-xl font-semibold mt-4 text-center'>
              {item.name}
            </h4>
            {item.category ? (
              <p className='text-sm text-gray-500 text-center'>
                {item.category}
              </p>
            ) : null} */}
          </Link>
        ))}
      </div>
    </section>
  )
}
