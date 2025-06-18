// VibratingImage.jsx
'use client'

import { useEffect, useRef, useState, forwardRef } from 'react'
import gsap from 'gsap'

const VibratingImage = forwardRef(
  ({ children, intensity = 1, className = '' }, externalRef) => {
    const containerRef = useRef()
    const vibrationTimeline = useRef()
    const [hovered, setHovered] = useState(false)
    const timeoutRef = useRef()

    useEffect(() => {
      if (externalRef) {
        if (typeof externalRef === 'function') {
          externalRef(containerRef.current)
        } else {
          externalRef.current = containerRef.current
        }
      }
    }, [externalRef])

    const startVibration = () => {
      if (hovered) return

      vibrationTimeline.current = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
      })

      vibrationTimeline.current
        .to(containerRef.current, {
          x: `+=${intensity}`,
          y: `-=${intensity}`,
          rotation: 0.8,
          duration: 0.06,
          ease: 'power1.inOut',
        })
        .to(containerRef.current, {
          x: `-=${intensity}`,
          y: `+=${intensity}`,
          rotation: -0.8,
          duration: 0.06,
          ease: 'power1.inOut',
          repeat: 2,
          yoyo: true,
        })
        .to(containerRef.current, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.06,
          ease: 'power1.inOut',
        })
    }

    useEffect(() => {
      if (!hovered) {
        timeoutRef.current = setTimeout(startVibration, 600)
      } else {
        clearTimeout(timeoutRef.current)
        vibrationTimeline.current?.kill()
        vibrationTimeline.current = null
      }

      return () => {
        clearTimeout(timeoutRef.current)
        vibrationTimeline.current?.kill()
        vibrationTimeline.current = null
      }
    }, [hovered, intensity])

    return (
      <div
        ref={containerRef}
        className={`inline-block ${className}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </div>
    )
  },
)

VibratingImage.displayName = 'VibratingImage'
export default VibratingImage
