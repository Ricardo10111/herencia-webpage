import Link from 'next/link'
import { Button } from './ui/button'

//components
import Nav from './Nav'

const Header = () => {
  return (
    <header className='py-8 xl:py-7 text-[#0f2f40] bg-black/60 backdrop-blur-lg fixed top-0 left-0 right-0 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link className='lg:hidden flex justify-center' href='/'>
          <span className='text-4xl font-semibold'>Herencia</span>
        </Link>

        {/* desktop nav */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header
