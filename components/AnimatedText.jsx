'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from '@react-intersection-observer'
import { useEffect } from 'react'

const AnimatedText = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.h2
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
          color: '#333333', // gris
        },
        visible: {
          opacity: 1,
          y: 0,
          color: '#dc2626', // rojo (Tailwind text-red-600)
          transition: { duration: 1, ease: 'easeOut' },
        },
      }}
      className='text-3xl md:text-6xl font-thin text-center'
    >
      {children}
    </motion.h2>
  )
}

export default AnimatedText
