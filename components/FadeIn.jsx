'use client'

import { motion } from 'framer-motion'

const FadeIn = ({ children, className = '', as = 'div' }) => {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={`opacity-0 ${className}`}
      initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
      transition={{ duration: 2, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.7 }}
    >
      {children}
    </MotionTag>
  )
}

export default FadeIn
