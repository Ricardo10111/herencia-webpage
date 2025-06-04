'use client'

import { motion } from 'framer-motion'

const FadeInFromCenter = ({ children, className = '', as = 'div' }) => {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={`opacity-0 ${className}`}
      initial={{ opacity: 0, scale: 1, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0)' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </MotionTag>
  )
}

export default FadeInFromCenter
