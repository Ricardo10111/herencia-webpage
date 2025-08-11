'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import DoorInfoBlock from './DoorInfoBlock'
import woodarts from '@/lib/data/woodarts'

import LottiePointer from './LottiePointer'

const DoorGallery = () => {
  const doorRefs = useRef([])
  const leftTextRefs = useRef([])
  const rightTextRefs = useRef([])
  const cardRefs = useRef([])
  const [activeInfoIndex, setActiveInfoIndex] = useState(null)

  useEffect(() => {
    woodarts.forEach((_, i) => {
      gsap.set(doorRefs.current[i], { x: 0, scale: 1 })
      gsap.set(leftTextRefs.current[i], {
        opacity: 0,
        rotateY: -90,
        transformOrigin: 'left center',
        transformStyle: 'preserve-3d',
        perspective: 800,
      })
      gsap.set(rightTextRefs.current[i], {
        opacity: 0,
        rotateY: 90,
        transformOrigin: 'right center',
        transformStyle: 'preserve-3d',
        perspective: 800,
      })
    })
  }, [])

  const handleMouseEnter = (i) => {
    setActiveInfoIndex(i)
    const tl = gsap.timeline()
    tl.to(doorRefs.current[i], {
      x: 120,
      scale: 1.05,
      duration: 0.5,
      ease: 'power2.out',
    })
    tl.to(
      cardRefs.current[i],
      {
        x: -200,
        rotateZ: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.inOut',
      },
      '<+0.1',
    )
    tl.to(
      leftTextRefs.current[i],
      { opacity: 1, rotateY: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.2',
    )
    tl.to(
      rightTextRefs.current[i],
      { opacity: 1, rotateY: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.6',
    )
  }

  const handleMouseLeave = (i) => {
    setActiveInfoIndex(null)
    const tl = gsap.timeline()
    tl.to([leftTextRefs.current[i], rightTextRefs.current[i]], {
      opacity: 0,
      rotateY: (el) => (el === leftTextRefs.current[i] ? -90 : 90),
      duration: 0.5,
      ease: 'power2.inOut',
    })
    tl.to(
      cardRefs.current[i],
      {
        x: 0,
        rotateZ: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      },
      '<+0.1',
    )
    tl.to(
      doorRefs.current[i],
      { x: 0, scale: 1, duration: 0.5, ease: 'power2.out' },
      '<+0.1',
    )
  }

  return (
    <div className='flex flex-col gap-16 w-full items-center'>
      {woodarts.map((woodart, i) => {
        cardRefs.current[i] = []
        return (
          <div
            key={woodart.id}
            className='relative flex items-center justify-center h-[500px] w-full max-w-5xl'
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <div className='absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[45%] px-6'>
              <div
                ref={(el) => (leftTextRefs.current[i] = el)}
                className='absolute top-0 left-0 w-full opacity-0 pointer-events-auto'
                style={{
                  transformOrigin: 'left center',
                  transformStyle: 'preserve-3d',
                  perspective: '800px',
                }}
              ></div>
              <DoorInfoBlock
                id={woodart.id}
                title={woodart.title}
                feature={woodart.feature}
                spects={woodart.spects}
                dimensions={woodart.dimensions}
                visible={activeInfoIndex === i}
              />
            </div>
            <div
              ref={(el) => (rightTextRefs.current[i] = el)}
              className='absolute right-8 top-1/2 -translate-y-1/2 z-10 select-none'
              style={{
                transformOrigin: 'right center',
                transformStyle: 'preserve-3d',
                perspective: '800px',
              }}
            >
              <h3
                className='text-9xl font-bold'
                style={{
                  backgroundImage:
                    'url(https://imgs.search.brave.com/dTRSYSKQMBQEhF4TsNQgDIO4h3KcTQtVChTGMCMAHCA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zYW4t/anVhbi1hbGljYW50/ZS1iZWFjaC1wbGF5/YS1zcGFpbi1jb3N0/YS1ibGFuY2EtMTM3/MDQ3NzE2LmpwZw)',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  WebkitBackgroundClip: 'text',
                  writingMode: 'vertical-rl',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                {woodart.name}
              </h3>
            </div>
            <div
              className='z-20 relative'
              ref={(el) => (doorRefs.current[i] = el)}
            >
              {activeInfoIndex !== i && <LottiePointer />}

              <Link href={`/portfolio/${woodart.id}`}>
                <Image
                  src={woodart.image}
                  alt={woodart.title}
                  width={260}
                  height={430}
                  className='rounded'
                  draggable={false}
                />
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DoorGallery
