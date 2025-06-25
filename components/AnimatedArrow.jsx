'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const AnimatedArrow = () => {
  const arrowRef = useRef(null)

  useEffect(() => {
    if (!arrowRef.current) return

    gsap.to(arrowRef.current, {
      duration: 2,
      repeat: -1,
      ease: 'power1.inOut',
      motionPath: {
        path: '#guide-path',
        align: '#guide-path',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    })
  }, [])

  return (
    <svg
      className='absolute -left-24 top-1/2 -translate-y-1/2 pointer-events-none'
      width='100'
      height='100'
    >
      <path
        id='guide-path'
        d='M 10 50 Q 50 10, 90 50'
        stroke='#C5A95E'
        fill='none'
        strokeWidth='2'
      />
      <polygon
        ref={arrowRef}
        id='arrow'
        points='0,0 15,7 0,14 4,7'
        fill='#C5A95E'
      />
    </svg>
  )
}

export default AnimatedArrow
