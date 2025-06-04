'use client'

import Image from 'next/image'

import FadeOnLoad from './FadeOnLoad'
import MobileServicesPackages from './MobileServicesPackages'

const packageList = [
  {
    type: 'image',
    src: '/about/image1.png',
  },
  {
    type: 'image',
    src: '/about/image1.png',
  },
  {
    type: 'image',
    src: '/about/image1.png',
  },
  {
    type: 'text',
    title: 'LOREM',
    text: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.',
    subtitle: 'LOREM IPSUM',
    price: '$99.99',
  },
  {
    type: 'text',
    title: 'LOREM',
    text: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.',
    subtitle: 'LOREM IPSUM',
    price: '$99.99',
  },
  {
    type: 'text',
    title: 'LOREM',
    text: 'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.',
    subtitle: 'LOREM IPSUM',
    price: '$99.99',
  },
]
const ServicesPackage = () => {
  return (
    <section className=' w-full py-1 px-8 md:px-20'>
      <FadeOnLoad className='container  hidden md:block mx-auto px-6 py-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {packageList.map((item, index) => (
            <div key={index} className='  flex flex-col items-center'>
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={`Package Image ${index + 1}`}
                  width={300}
                  height={200}
                  className='w-full h-auto mb-4 '
                />
              ) : (
                <div className=''>
                  <h3 className='text-2xl text-center mb-6'>{item.title}</h3>
                  <div className='flex flex-col justify-start border-[0_0_0_1px] border-[#BBA085] px-[60px_130px] gap-4'>
                    <p className='text-gray-600 mb-4'>{item.text}</p>
                    <p className='text-[#BBA085] text-center font-medium'>
                      {item.subtitle}
                    </p>
                    <span className='text-3xl text-center '>{item.price}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-20'>
          <button className='border-[#c5a95e] hover:text-white px-6 py-3 hover:bg-[#a28620] transition ease-in-out duration-300 border-[1px]  text-lg cursor-pointer'>
            GET IN TOUCH
          </button>
        </div>
      </FadeOnLoad>

      <MobileServicesPackages />
    </section>
  )
}

export default ServicesPackage
