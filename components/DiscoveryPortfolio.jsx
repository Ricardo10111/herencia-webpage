// import React from 'react'
// import FadeIn from '@/components/FadeIn'
// import Image from 'next/image'
// import YouTubeEmbed from '@/components/YouTubeEmbed'

// function DiscoveryPortfolio({ woodart }) {
//   // soporta string directo o { url: '...' }
//   const videoUrl =
//     typeof woodart.video === 'string'
// //       ? woodart.video
//       : woodart.video?.url || woodart.videoUrl

//   return (
//     <div>
//       <FadeIn className='container flex items-center justify-center w-full py-[128px_60px] px-8 md:px-67'>
//         <h3 className='text-3xl md:text-5xl font-thin text-center'>
//           {woodart.name}'s{' '}
//           <span className='text-3xl md:text-5xl font-thin text-center text-[#c5a95e]'>
//             Discovery
//           </span>
//         </h3>
//       </FadeIn>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8'>
//         <Image
//           src={woodart.image}
//           alt={woodart.name}
//           width={500}
//           height={500}
//           className='object-cover w-full h-full'
//         />
//         <Image
//           src={woodart.image}
//           alt={woodart.name}
//           width={500}
//           height={500}
//           className='object-cover w-full h-full'
//         />
//         <Image
//           src={woodart.image}
//           alt={woodart.name}
//           width={500}
//           height={500}
//           className='object-cover w-full h-full'
//         />
//       </div>

//       {/* Bloque del video */}
//       {videoUrl ? (
//         <div className='px-8 pb-12 max-w-5xl mx-auto'>
//           <YouTubeEmbed
//             url={videoUrl}
//             title={`${woodart.name} – Discovery`}
//             autoplay={false}
//             muted={false}
//             rounded
//           />
//         </div>
//       ) : null}
//     </div>
//   )
// }

// export default DiscoveryPortfolio

// components/DiscoveryPortfolio.jsx
'use client'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import YouTubeEmbed from '@/components/YouTubeEmbed'

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

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8'>
        {[woodart.image, woodart.image, woodart.image].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={woodart.name}
            width={500}
            height={500}
            className='object-cover w-full h-full'
          />
        ))}
      </div>

      {videoUrl && (
        <div className='px-0 md:px-8 md:pb-12 max-w-5xl mx-auto'>
          <YouTubeEmbed url={videoUrl} title={`${woodart.name} – Discovery`} />
        </div>
      )}
    </div>
  )
}
