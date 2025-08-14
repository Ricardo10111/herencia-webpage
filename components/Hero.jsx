import Image from 'next/image'
import FadeInTitle from './FadeInTitle'
import GsapHeroContent from './GsapHeroContent'
import RotatingWords from './RotatingWords'
import FadeInFromCenter from './FadeInFromCenter'

export default function Hero() {
  return (
    <section className='flex min-h-screen flex-col items-center justify-between max-w-[2400px] mx-auto '>
      <FadeInFromCenter className='relative w-full h-[100vh] overflow-hidden'>
        <div className='absolute inset-0 -z-10 aspect-w-16 aspect-h-9 '>
          <Image
            src='/hero/woodhero.jpg'
            alt='Wooden carved door'
            layout='fill'
            objectFit='cover'
            quality={100}
            priority
          />
          <div className='absolute inset-0 bg-black/20' />
        </div>

        <GsapHeroContent />
      </FadeInFromCenter>

      <div className='flex flex-col items-center bg-[#F4F4F4] justify-center w-full py-32 px-8 md:px-24 '>
        <FadeInTitle className='text-3xl md:text-6xl font-thin text-start md:text-center'>
          Your Heritage Deserves to Be Built,
          <br />
          <div className='text-start'>
            Not <RotatingWords />
          </div>
        </FadeInTitle>
      </div>
    </section>
  )
}
