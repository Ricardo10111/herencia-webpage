import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SlideInFromLeft from '@/components/SlideInFromLeft'
import SlideInFromRight from '@/components/SlideInFromRight'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
function DescriptionPortfolio({ woodart }) {
  if (!woodart)
    return <div className='p-8 text-red-500'>Producto no encontrado.</div>
  return (
    <section className='flex flex-col justify-center items-center w-full gap-8 p-8'>
      <SlideInFromLeft className='flex flex-col md:flex-row justify-between w-full items-start md:items-center max-w-5xl '>
        <p className='text-2xl font-extralight'>
          Date: <span className='text-[#BBA085]'>{woodart.completeDate}</span>
        </p>
        <p className='text-2xl font-extralight'>
          Category: <span className='text-[#BBA085]'>{woodart.category}</span>
        </p>
        <p className='text-2xl font-extralight'>
          Medium(s): <span className='text-[#BBA085]'>{woodart.medium}</span>
        </p>
      </SlideInFromLeft>

      <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-8'>
        <Image
          src={woodart.image}
          alt={woodart.title}
          width={400}
          height={600}
          className='max-h-[900px] max-w-[600px] rounded-lg  object-fit'
        />
        <div className='flex flex-col justify-start items-start gap-4 max-w-md'>
          <SlideInFromRight className='bg-[#F5F5F5] p-12 flex flex-col justify-center items-center w-full gap-4 max-w-5xl '>
            <p className='text-lg font-extralight text-center max-w-lg'>
              {woodart.description}
            </p>
            <p className='text-lg font-extralight text-center max-w-lg'>
              Technique:{' '}
              <span className='text-lg font-extralight text-center max-w-lg'>
                {woodart.technique}
              </span>
            </p>
            <p className='text-lg font-extralight text-center max-w-lg'>
              Dimensions:{' '}
              <span className='text-lg font-extralight text-center max-w-lg'>
                {woodart.dimensions}
              </span>
            </p>
          </SlideInFromRight>
          <Link
            href='/contact'
            className='bg-[#c5a95e] text-white text-center hover:bg-[#cfba75] w-full px-12 py-2 mt-10 cursor-pointer transition'
          >
            Contact Us
          </Link>
          <div>
            <p className='text-sm'>Share on:</p>
            <div className='flex gap-6 text-[#9e7b55] text-xl'>
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
        </div>
      </div>
    </section>
  )
}

export default DescriptionPortfolio
