'use client'

import { useEffect, useRef, useState } from 'react'
import FadeIn from '@/components/FadeIn'
import SlideInFromLeft from './SlideInFromLeft'

function toEmbed(url = '') {
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtu.be')) {
      return `https://www.youtube-nocookie.com/embed/${u.pathname.slice(1)}`
    }
    if (u.pathname.startsWith('/shorts/')) {
      const id = u.pathname.split('/shorts/')[1]
      return `https://www.youtube-nocookie.com/embed/${id}`
    }
    if (u.pathname.startsWith('/embed/')) {
      return `https://www.youtube-nocookie.com${u.pathname}`
    }
    const v = u.searchParams.get('v')
    if (v) {
      return `https://www.youtube-nocookie.com/embed/${v}`
    }
  } catch {}
  return ''
}

export default function ContactSection() {
  const VIDEO_URL = 'https://www.youtube.com/watch?v=rOsHkYB9d_w'
  const base = toEmbed(VIDEO_URL)

  const [play, setPlay] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlay(true)
          } else {
            setPlay(false)
          }
        })
      },
      { threshold: 0.5 },
    )
    if (videoRef.current) observer.observe(videoRef.current)
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [])

  const embedSrc = base
    ? `${base}?modestbranding=1&rel=0&playsinline=1${play ? '&autoplay=1&mute=1' : ''}`
    : ''

  return (
    <section className='w-full'>
      {/* Título */}
      <FadeIn className='flex flex-col items-center justify-center w-full py-[128px_40px] px-8 md:px-67 '>
        <h2 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          Enquire Now!
        </h2>
        <h3 className='text-3xl md:text-6xl font-thin text-center'>
          “YOU WILL NEVER KNOW THE VALUE OF A MOMENT UNTIL IT BECOMES A MEMORY.”
        </h3>
      </FadeIn>

      <div className='relative w-full mt-12' ref={videoRef}>
        <SlideInFromLeft>
          <div className='relative w-full' style={{ paddingTop: '41.64%' }}>
            {embedSrc && (
              <iframe
                className='absolute inset-0 h-full w-full'
                src={embedSrc}
                title='YouTube video'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
                frameBorder='0'
              />
            )}
          </div>
        </SlideInFromLeft>
      </div>
    </section>
  )
}
