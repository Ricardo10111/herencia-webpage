'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import FadeIn from './FadeIn'

const faqs = [
  {
    question: 'HOW LONG DOES IT TAKE TO COMPLETE A COSTUM PIECE?',
    answer:
      'Our custom pieces typically take 3 to 4 months to complete. This timeframe gives our artisans the space to craft every detail with care, so your piece arrives with the quality and presence it deserves.',
  },
  {
    question: 'HOW MUCH DOES A CUSTOM PIECE COST?',
    answer:
      'Each piece is as unique as the person commissioning it. Pricing depends on the intricacy of your design, the mediums involved, and the craftsmanship needed to achieve your vision.',
  },
  {
    question: 'CAN I REQUEST REVISIONS OR CHANGES DURING THE PROCESS?',
    answer:
      'We include up to three design revisions as part of your custom piece. This allows us to refine your vision together before moving into production. Additional changes beyond that are available through formal design change orders.',
  },
]

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className='max-w-3xl mx-auto px-4 py-4'>
      <FadeIn className=' container flex flex-col items-center  justify-center w-full py-[20px_60px] px-8 md:px-67 '>
        <h2 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          FAQ
        </h2>
        <h3 className='text-3xl md:text-6xl font-thin text-center'>
          Any Queries?
        </h3>
      </FadeIn>

      <FadeIn>
        {faqs.map((faq, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className='border-b border-gray-200 py-5 cursor-pointer transition-colors group'
          >
            <div className='flex items-start gap-4'>
              <span className='text-[#c5a95e] text-2xl font-bold select-none'>
                +
              </span>
              <div className='flex-1'>
                <h3 className='text-lg text-gray-700 '>{faq.question}</h3>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className='text-gray-500 mt-2 overflow-hidden text-sm leading-relaxed'
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </FadeIn>
    </section>
  )
}

export default FaqSection
