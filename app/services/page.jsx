import FadeIn from '@/components/FadeIn'

import FaqSection from '@/components/FaqSection'
import ServicesQualitySection from '@/components/ServicesQualitySection'
import ServicesProcess from '@/components/ServicesProcess'

const services = () => {
  return (
    <section className=' flex min-h-screen flex-col items-center justify-between max-w-[1600px] mx-auto'>
      <FadeIn className=' container flex flex-col items-center  justify-center w-full py-[128px_60px] px-8 md:px-67 '>
        <h1 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          SERVICES
        </h1>
        <h2 className='text-3xl md:text-6xl font-thin text-center'>
          What to Expect
        </h2>
      </FadeIn>

      <ServicesProcess />
      <FaqSection />
      <ServicesQualitySection />
    </section>
  )
}

export default services
