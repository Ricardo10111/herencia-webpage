'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FadeOnLoad = ({ children, className = '', as = 'div' }) => {
  const [isMounted, setIsMounted] = useState(false)
  const MotionTag = motion[as] || motion.div

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <MotionTag
      className={`${className}`}
      initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
      animate={isMounted ? { opacity: 1, y: 0, filter: 'blur(0)' } : {}}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  )
}

export default FadeOnLoad
