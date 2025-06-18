// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import gsap from 'gsap'
// import DoorInfoContent from './DoorInfoContent'
// import VibratingImage from './VibratingImage'

// const MobileDoorCard = ({ woodart }) => {
//   const [flipped, setFlipped] = useState(false)
//   const cardRef = useRef()

//   const handleFlip = () => setFlipped((prev) => !prev)

//   useEffect(() => {
//     gsap.to(cardRef.current, {
//       rotateY: flipped ? 180 : 0,
//       duration: 0.8,
//       ease: 'power2.inOut',
//     })
//   }, [flipped])

//   return (
//     <div
//       className='md:hidden w-[300px] h-[450px] mx-auto perspective-[1200px]'
//       onClick={handleFlip}
//     >
//       <div
//         ref={cardRef}
//         className='relative w-full h-full transition-transform duration-700'
//         style={{
//           transformStyle: 'preserve-3d',
//         }}
//       >
//         {/* Front face */}
//         <div
//           className='absolute w-full h-full backface-hidden z-20'
//           style={{
//             backfaceVisibility: 'hidden',
//             WebkitBackfaceVisibility: 'hidden',
//           }}
//         >
//           <VibratingImage intensity={2} className='w-full h-full'>
//             <Image
//               src={woodart.image}
//               alt={woodart.title}
//               width={300}
//               height={450}
//               className='rounded-lg shadow-xl w-full h-full object-contain'
//             />
//           </VibratingImage>
//         </div>

//         {/* Back face */}
//         <div
//           className='absolute w-full h-full z-10 bg-white rounded-lg p-4 overflow-hidden'
//           style={{
//             transform: 'rotateY(180deg)',
//             backfaceVisibility: 'hidden',
//             WebkitBackfaceVisibility: 'hidden',
//             transformStyle: 'preserve-3d',
//           }}
//         >
//           <DoorInfoContent
//             id={woodart.id}
//             title={woodart.title}
//             feature={woodart.feature}
//             spects={woodart.spects}
//             dimensions={woodart.dimensions}
//             visible={flipped}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MobileDoorCard

'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DoorInfoContent from './DoorInfoContent'
import VibratingImage from './VibratingImage'

gsap.registerPlugin(ScrollTrigger)

const MobileDoorCard = ({ woodart }) => {
  const [flipped, setFlipped] = useState(false)
  const cardRef = useRef()

  const handleFlip = () => setFlipped((prev) => !prev)

  useEffect(() => {
    gsap.to(cardRef.current, {
      rotateY: flipped ? 180 : 0,
      duration: 0.8,
      ease: 'power2.inOut',
    })
  }, [flipped])

  useEffect(() => {
    if (!cardRef.current) return

    const trigger = ScrollTrigger.create({
      trigger: cardRef.current,
      start: 'top 90%',
      end: 'bottom top',
      onLeave: () => {
        if (flipped) setFlipped(false)
      },
    })

    return () => trigger.kill()
  }, [flipped])

  return (
    <div
      className='md:hidden w-[300px] h-[450px] mx-auto perspective-[1200px]'
      onClick={handleFlip}
    >
      <div
        ref={cardRef}
        className='relative w-full h-full transition-transform duration-700'
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front face */}
        <div
          className='absolute w-full h-full backface-hidden z-20'
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <VibratingImage intensity={2} className='w-full h-full'>
            <Image
              src={woodart.image}
              alt={woodart.title}
              width={300}
              height={450}
              className='rounded-lg  w-full h-full object-contain'
            />
          </VibratingImage>
        </div>

        {/* Back face */}
        <div
          className='absolute w-full h-full z-10 bg-white rounded-lg p-4 overflow-hidden'
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
          }}
        >
          <DoorInfoContent
            id={woodart.id}
            title={woodart.title}
            feature={woodart.feature}
            spects={woodart.spects}
            dimensions={woodart.dimensions}
            visible={flipped}
          />
        </div>
      </div>
    </div>
  )
}

export default MobileDoorCard
