import FadeIn from '@/components/FadeIn'

import FaqSection from '@/components/FaqSection'
import ServicesQualitySection from '@/components/ServicesQualitySection'
import ServicesProcess from '@/components/ServicesProcess'

const services = () => {
  return (
    <section className=' flex min-h-screen flex-col items-center justify-between max-w-[2000px] mx-auto'>
      <FadeIn className='  flex flex-col items-center justify-center w-full md:py-[128px_60px] py-[128px_2px] px-8 md:px-67 '>
        <h1 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          YOUR JOURNEY
        </h1>
        <h2 className='text-3xl md:text-6xl font-thin text-center'>
          The 5 Steps to Your Heritage{' '}
        </h2>
      </FadeIn>

      <ServicesProcess />
      <FaqSection />
      <ServicesQualitySection />
    </section>
  )
}

export default services
