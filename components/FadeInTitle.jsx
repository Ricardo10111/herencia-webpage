'use client'

import { motion } from 'framer-motion'

const FadeInTitle = ({ children, className = '' }) => {
  return (
    <motion.h1
      className={`opacity-0 ${className}`}
      initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.h1>
  )
}

export default FadeInTitle
