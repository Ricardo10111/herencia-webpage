'use client'

import Lottie from 'lottie-react'
import pointerAnimation from '@/animations/pointer-guide.json'

const LottiePointer = ({
  className = '',
  loop = true,
  style = { width: 150, height: 150 },
}) => {
  return (
    <div
      className={`absolute -left-10 top-1/2 -translate-y-1/2 z-30 pointer-events-none ${className}`}
    >
      <Lottie animationData={pointerAnimation} loop={loop} style={style} />
    </div>
  )
}

export default LottiePointer
