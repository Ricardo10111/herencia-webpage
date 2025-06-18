'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

import SlideInFromLeft from './SlideInFromLeft'

gsap.registerPlugin(SplitText)

const GsapHeroContent = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Split words from title and subtitle
    const splitTitle = new SplitText(titleRef.current, { type: 'words' })
    const splitSubtitle = new SplitText(subtitleRef.current, { type: 'words' })

    tl.from(splitTitle.words, {
      duration: 0.5,
      y: 10,
      stagger: 0.1,
      autoAlpha: 0,
      filter: 'blur(4px)',
    })
    // bajar el blur
    tl.from(
      splitSubtitle.words,
      {
        duration: 0.5,
        y: 10,
        stagger: 0.1,
        autoAlpha: 0,
        filter: 'blur(4px)',
      },
      '+=0.1',
    )

    return () => {
      splitTitle.revert()
      splitSubtitle.revert()
    }
  }, [])

  return (
    <div className='flex flex-col justify-center items-start h-full px-6 md:px-20 text-white'>
      <h1
        ref={titleRef}
        className='text-4xl md:text-7xl font-bold leading-tight mb-4'
      >
        Your Vision, <br />
        Carved in Wood
      </h1>
      <p ref={subtitleRef} className='text-lg md:text-3xl mb-6'>
        Find One-Of-A-Kind Wooden Solutions
      </p>
      <SlideInFromLeft>
        <Link
          href='/portfolio'
          className='bg-[#c5a95e] text-white px-6 py-3 text-base rounded-md hover:bg-[#a28620] transition'
        >
          View Gallery
        </Link>
      </SlideInFromLeft>
    </div>
  )
}

export default GsapHeroContent
