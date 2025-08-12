'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

const DoorInfoContent = ({
  id,
  title,
  feature,
  spects,
  dimensions,
  visible,
}) => {
  const containerRef = useRef()
  const borderEffectRef = useRef()
  const topRef = useRef()
  const middleRef = useRef()
  const bottomLineRef = useRef()
  const titleLineRef = useRef()
  const buttonWrapperRef = useRef()
  const contentTimeline = useRef()

  useEffect(() => {
    if (visible) {
      gsap.set(borderEffectRef.current, {
        clipPath: 'inset(50% 0 50% 0)',
        opacity: 0,
      })
      gsap.set([topRef.current, middleRef.current], {
        opacity: 0,
        scale: 0.9,
      })
      gsap.set([titleLineRef.current, bottomLineRef.current], {
        clipPath: 'inset(0 100% 0 0)',
        opacity: 0,
      })
      gsap.set(buttonWrapperRef.current, { opacity: 0, x: 50, scale: 0.8 })

      contentTimeline.current = gsap.timeline()
      contentTimeline.current
        .to(titleLineRef.current, {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.inOut',
        })
        .to(
          borderEffectRef.current,
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
          },
          '+=0.1',
        )
        .to(
          topRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          },
          '+=0.1',
        )
        .to(
          middleRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
          },
          '+=0.2',
        )
        .to(
          bottomLineRef.current,
          {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
          },
          '+=0.1',
        )
        .to(
          buttonWrapperRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          '+=0.2',
        )
    } else {
      gsap.to([topRef.current, middleRef.current], {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.in',
      })
      gsap.to([titleLineRef.current, bottomLineRef.current], {
        opacity: 0,
        clipPath: 'inset(0 100% 0 0)',
        duration: 0.3,
        ease: 'power2.in',
      })
      gsap.to(buttonWrapperRef.current, {
        opacity: 0,
        x: 50,
        scale: 0.8,
        duration: 0.4,
        ease: 'power2.in',
      })
      gsap.to(borderEffectRef.current, {
        opacity: 0,
        clipPath: 'inset(50% 0 50% 0)',
        duration: 0.4,
        ease: 'power2.in',
      })
    }
  }, [visible])

  return (
    <div
      ref={containerRef}
      className='relative flex flex-col justify-between items-center text-center h-full px-4 py-6'
    >
      <div className='relative z-10 flex flex-col justify-between h-full w-full'>
        <div ref={topRef} className='pb-4'>
          <h3 className='text-xl md:text-4xl leading-snug font-semibold text-[#CBAE6B]'>
            {title}
          </h3>
          <div
            ref={titleLineRef}
            className='border border-gray-300 w-full mt-2'
          ></div>
        </div>
        <div ref={middleRef} className='py-4 text-gray-900 space-y-4 text-md'>
          <div>
            <p className='font-semibold'>Special Features</p>
            <p className='font-normal'>{feature}</p>
          </div>
          <div>
            <p className='font-semibold'>Style Specs</p>
            <p className='font-normal'>{spects}</p>
          </div>
          <div>
            <p className='font-semibold'>Dimensions</p>
            <p className='font-normal'>{dimensions}</p>
          </div>
          <div ref={bottomLineRef} className='border border-gray-300'></div>
        </div>
        <div ref={buttonWrapperRef} className='pt-4'>
          <Link href={`/portfolio/${id}`} className='block'>
            <button className='px-6 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition-all duration-300'>
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DoorInfoContent
