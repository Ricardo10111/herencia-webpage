'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DoorInfoContent from './DoorInfoContent'

const DoorInfoBlock = ({ id, title, feature, spects, dimensions, visible }) => {
  const infoRef = useRef()
  const timelineRef = useRef()

  useEffect(() => {
    gsap.set(infoRef.current, { opacity: 0, x: -100, rotateY: -50 })

    if (visible) {
      timelineRef.current = gsap.timeline()
      timelineRef.current.to(infoRef.current, {
        x: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
    } else {
      timelineRef.current?.reverse()
    }
  }, [visible])

  return (
    <div
      className='relative w-full h-[400px]'
      style={{ perspective: 800 }}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <div
        ref={infoRef}
        className='absolute bottom-15 left-16 w-full h-full p-4'
        style={{ zIndex: 10, transformStyle: 'preserve-3d' }}
      >
        <DoorInfoContent
          id={id}
          title={title}
          feature={feature}
          spects={spects}
          dimensions={dimensions}
          visible={visible}
        />
      </div>
    </div>
  )
}

export default DoorInfoBlock
