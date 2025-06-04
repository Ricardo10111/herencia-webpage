'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import FadeIn from '@/components/FadeIn'

const stats = [
  {
    num: 12,
    text: 'Years of Experience',
  },
  {
    num: 100,
    text: 'Masterpieces Created',
  },
  {
    num: 300,
    text: 'Happy Clients',
  },
]

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    setStartCount(inView)
  }, [inView])

  return (
    <section ref={ref} className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <FadeIn className='flex flex-col items-center justify-center w-full pb-10 px-8 md:px-67 py-20'>
        <h3 className='text-3xl md:text-6xl font-thin text-center'>
          BRINGING HANDCRAFTED WOOD ART TO LIFE FOR HOMES, SPACES, AND SPECIAL
          MOMENTS
        </h3>
      </FadeIn>

      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none'>
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex-1 flex flex-col gap-4 items-center justify-center xl:justify-start transition-opacity duration-700 ${
                startCount ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className='text-4xl xl:text-6xl text-[#c5a95e] flex-shrink-0'>
                {startCount ? <CountUp end={item.num} duration={2} /> : 0}
              </span>
              <p
                className={`${
                  item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                } leading-snug text-[#0f2f40] text-center`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
