'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const MotionGuide = ({
  className = '',
  arrowColor = '#C5A95E',
  strokeWidth = 2,
  delay = 0,
}) => {
  const arrowRef = useRef(null)

  useEffect(() => {
    if (!arrowRef.current) return

    gsap.to(arrowRef.current, {
      duration: 2.5,
      repeat: -1,
      ease: 'power1.inOut',
      delay,
      motionPath: {
        path: '#motion-guide-path',
        align: '#motion-guide-path',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    })
  }, [delay])

  return (
    <svg
      width='140'
      height='100'
      className={`absolute -left-28 top-1/2 -translate-y-1/2 pointer-events-none ${className}`}
    >
      <path
        id='motion-guide-path'
        d='M 0 80 Q 70 0, 140 80'
        stroke={arrowColor}
        fill='none'
        strokeWidth={strokeWidth}
        strokeDasharray='4 2'
      />
      <polygon ref={arrowRef} points='0,0 14,7 0,14 4,7' fill={arrowColor} />
    </svg>
  )
}

export default MotionGuide
