'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import FadeIn from '@/components/FadeIn'
import MobileServicesProcess from './MobileServicesProcess'
const content = [
  {
    type: 'image',
    src: '/about/image1.png',
  },
  {
    type: 'text',
    number: '1',
    title: 'BREAKING THE ICE',
    text: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.',
  },
  {
    type: 'image',
    src: '/about/image2.png',
  },
  {
    type: 'text',
    number: '2',
    title: 'BREAKING THE ICE',

    text: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.',
  },
  {
    type: 'image',
    src: '/about/image3.png',
  },
  {
    type: 'text',
    number: '3',
    title: 'BREAKING THE ICE',

    text: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.',
  },
  {
    type: 'image',
    src: '/about/image3.png',
  },
  {
    type: 'text',
    number: '4',
    title: 'BREAKING THE ICE',

    text: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.',
  },
  {
    type: 'image',
    src: '/about/image3.png',
  },
]

const ServicesProcess = () => {
  return (
    <section className='py-20 px-6'>
      {/* Desktop Grid */}
      <div className='hidden md:grid grid-cols-3 gap-10 max-w-6xl mx-auto'>
        {content.map((item, index) =>
          item.type === 'image' ? (
            <Image
              key={index}
              src={item.src}
              alt={`about-${index}`}
              width={360}
              height={460}
              className='rounded-md object-cover w-full h-auto'
            />
          ) : (
            <div
              key={index}
              className='text-center flex flex-col items-center justify-center'
            >
              <h3 className='text-6xl text-[#B58B61] font-semibold mb-4 border-[0_0_1px_0] border-[#B58B61] pb-6 w-20 h-20 flex items-center justify-center'>
                {item.number}
              </h3>
              <h4 className='text-2xl  mb-2'>{item.title}</h4>
              <p className='max-w-xs mx-auto text-[#4a4a4a]'>{item.text}</p>
            </div>
          ),
        )}
      </div>

      {/* Mobile Swiper */}
      <MobileServicesProcess />
    </section>
  )
}

export default ServicesProcess
