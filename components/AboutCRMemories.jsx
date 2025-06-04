import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AboutCRMemories = () => {
  return (
    <section>
      <div>
        <h3>CRAFTING MEMORIES</h3>
        <h4>Your Story, My Art</h4>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat
            nec potenti. Justo molestie amet vulputate aliquam viverra ut
            viverra lorem. Velit tellus vitae massa sed egestas ornare pretium.
          </p>
        </div>

        <Link href='/portfolio'>View Gallery</Link>
      </div>
      <div>
        <Image
          src='/Perfil/perfil.jpg'
          alt='Crafting Memories Image'
          width={572}
          height={858}
          className='rounded-lg shadow-lg'
        />
        <Image
          src='/Perfil/perfil.jpg'
          alt='Crafting Memories Image'
          width={572}
          height={858}
          className='rounded-lg shadow-lg'
        />
      </div>
    </section>
  )
}

export default AboutCRMemories
