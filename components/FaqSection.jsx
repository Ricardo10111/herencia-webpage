'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import FadeIn from './FadeIn'

const faqs = [
  {
    question: 'HOW LONG DOES IT TAKE TO COMPLETE A COSTUM PIECE?',
    answer:
      'It usually takes between 2 to 4 weeks depending on complexity and design revisions.',
  },
  {
    question: 'HOW MUCH DOES A CUSTOM PIECE COST?',
    answer:
      'Prices vary based on size, materials, and detail. A quote is provided after consultation.',
  },
  {
    question: 'CAN I REQUEST REVISIONS OR CHANGES DURING THE PROCESS?',
    answer:
      'Yes, we include one round of revisions. Additional changes may incur extra costs.',
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
