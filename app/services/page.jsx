import FadeIn from '@/components/FadeIn'

import FaqSection from '@/components/FaqSection'
import ServicesQualitySection from '@/components/ServicesQualitySection'
import ServicesProcess from '@/components/ServicesProcess'
import ServicesPackage from '@/components/ServicesPackage'

const services = () => {
  return (
    <section className=' flex min-h-screen flex-col items-center justify-between'>
      <FadeIn className=' container flex flex-col items-center  justify-center w-full py-[128px_60px] px-8 md:px-67 '>
        <h1 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          SERVICES
        </h1>
        <h2 className='text-3xl md:text-6xl font-thin text-center'>PACKAGES</h2>
      </FadeIn>

      <ServicesPackage />

      <div className='bg-[#F5F5F5] w-full py-20 px-8 md:px-20'>
        <FadeIn className='container flex flex-col items-center justify-center w-full py-20 px-8 md:px-67'>
          <h3 className='text-2xl md:text-4xl font-thin text-center'>
            Lorem ipsum dolor sit amet as a consectetur. Rutrum ins
            tincidunt{' '}
          </h3>
        </FadeIn>
      </div>
      <ServicesProcess />
      <FaqSection />
      <ServicesQualitySection />
    </section>
  )
}

export default services
