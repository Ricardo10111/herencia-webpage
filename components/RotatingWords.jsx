'use client'

import { useEffect, useState } from 'react'

const words = [
  ' Neglected',
  ' Ignored',
  ' Unappreciated',
  ' Abandoned',
  ' Overlooked',
  ' Disregarded',
  ' Forgotten',
  ' Unseen',
]
const delay = 4000 // tiempo total por palabra (ms)

const RotatingWords = () => {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setFade(false), delay - 600) // empieza fade-out antes de cambiar
    const wordChangeTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length)
      setFade(true) // vuelve a mostrar
    }, delay)

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(wordChangeTimer)
    }
  }, [index])

  return (
    <span
      className={`transition-all duration-1000 text-[#C5A95E] inline-block font-medium
        ${fade ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}
      `}
    >
      {words[index]}
    </span>
  )
}

export default RotatingWords
