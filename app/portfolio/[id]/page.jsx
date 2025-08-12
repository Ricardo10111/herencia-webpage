// app/portfolio/[id]/page.jsx (o donde tengas DoorDetail)
'use client'

import { motion } from 'framer-motion'
import FadeIn from '@/components/FadeIn'
import woodarts from '@/lib/data/woodarts'
import { useParams } from 'next/navigation'

import DescriptionPortfolio from '@/components/DescriptionPortfolio'
import DiscoveryPortfolio from '@/components/DiscoveryPortfolio'
import OtherSignature from '@/components/OtherSignature'

const DoorDetail = () => {
  const { id } = useParams()
  const woodart = woodarts.find((d) => String(d.id) === String(id))

  // Si quieres otros del MISMO category:
  // const others = woodarts
  //   .filter(w => w.id !== woodart.id && w.category === woodart.category)
  //   .slice(0, 4)

  // O simplemente los demás:
  const others = woodarts.filter((w) => w.id !== woodart?.id).slice(0, 4)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className='max-w-[2000px] mx-auto flex min-h-screen flex-col items-center'
    >
      <FadeIn className='container flex flex-col items-center justify-center w-full py-[128px_60px] px-8 md:px-67'>
        <h1 className='text-2xl md:text-4xl font-thin text-center text-[#c5a95e]'>
          GALLERY
        </h1>
        <h2 className='text-3xl md:text-6xl font-thin text-center'>
          {woodart?.name}
        </h2>
      </FadeIn>

      <DescriptionPortfolio woodart={woodart} />
      <DiscoveryPortfolio woodart={woodart} />

      {/* 👉 sección de “Other Signature Projects” */}
      <OtherSignature items={others} />
    </motion.div>
  )
}

export default DoorDetail
