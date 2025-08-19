'use client'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import SlideInFromLeft from './SlideInFromLeft'
import SlideInFromRight from './SlideInFromRight'
import SafeImage from './SafeImage'

export default function DiscoveryPortfolio({ woodart }) {
  const videoUrl =
    typeof woodart.video === 'string'
      ? woodart.video
      : woodart.videoUrl || woodart.video?.url

  return (
    <div>
      <FadeIn className='container flex items-center justify-center w-full py-[128px_60px] px-8 md:px-67'>
        <h3 className='text-3xl md:text-5xl font-thin text-center'>
          {woodart.name}'s{' '}
          <span className='text-3xl md:text-5xl font-thin text-center text-[#c5a95e]'>
            Discovery
          </span>
        </h3>
      </FadeIn>

      <div className='flex flex-row justify-between gap-12 items-center p-8'>
        <SlideInFromLeft className='hidden lg:block max-h-[1200px] w-1/2'>
          <Image
            src={woodart.image4}
            alt={woodart.name}
            width={800}
            height={1200}
            className='object-cover w-full h-full'
          />
        </SlideInFromLeft>
        <SlideInFromRight className='flex flex-col gap-4 w-full lg:w-1/2'>
          {[woodart.image2, woodart.image5].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={woodart.name}
              width={500}
              height={500}
              className='object-cover w-full h-full'
            />
          ))}
        </SlideInFromRight>
      </div>
      {woodart.image3?.trim() && (
        <div>
          <SafeImage
            src={woodart.image3}
            alt={woodart.name}
            width={800}
            height={1200}
            className='object-cover w-full h-full mb-12'
          />
        </div>
      )}

      {videoUrl && (
        <div className='px-0 md:px-8 md:pb-12 max-w-5xl mx-auto'>
          <YouTubeEmbed url={videoUrl} title={`${woodart.name} – Discovery`} />
        </div>
      )}
    </div>
  )
}
