'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function SafeImage({
  src,
  alt = '',
  width,
  height,
  className = '',
  ...rest
}) {
  const [failed, setFailed] = useState(false)

  if (!src || typeof src !== 'string' || src.trim() === '' || failed)
    return null

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setFailed(true)} // si falla -> desaparece
      {...rest}
    />
  )
}
