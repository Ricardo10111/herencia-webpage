'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import FadeIn from '@/components/FadeIn'
import MobileServicesProcess from './MobileServicesProcess'
const content = [
  {
    type: 'text',
    number: '1',
    title: 'Design Consultation',
    text: 'We listen to your vision and ideas, translating them into an initial design that celebrates your unique story and style.',
  },
  {
    type: 'image',
    src: '/services/prImage1.jpg',
  },
  {
    type: 'text',
    number: '2',
    title: 'Project Approval',

    text: 'We present detailed sketches, materials, and costs for your review and approval — ensuring everything aligns perfectly with your expectations.',
  },
  {
    type: 'image',
    src: '/services/prImage2.jpg',
  },
  {
    type: 'text',
    number: '3',
    title: 'Fabrication',

    text: 'Our master artisans bring your design to life with expert craftsmanship, using the finest materials and techniques passed down through generations.',
  },
  {
    type: 'image',
    src: '/services/prImage3.jpg',
  },
  {
    type: 'text',
    number: '4',
    title: 'Signature Finishes',

    text: 'We complete meticulous finishing touches, refining every detail to uphold our highest standards of craftsmanship before your before your personal unveiling.',
  },
  {
    type: 'image',
    src: '/services/prImage4.jpg',
  },
  {
    type: 'text',
    number: '5',
    title: 'La Clasura',

    text: 'We celebrate the completion together, closing the project in a meaningful way as your new heirloom piece joins your story.',
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
