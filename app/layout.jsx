import { Playfair_Display } from 'next/font/google'
import './globals.css'

//Components
import Header from '@/components/Header'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})

// const playfairDisplaySc = Playfair_Display_SC({
//   subsets: ['latin'],
//   weight: '400',
//   variable: '--font-playfair-display-sc',
// })

export const metadata = {
  title: 'Herencia Wood Art',
  description: 'Web site for Herencia Wood Art',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${playfairDisplay.variable}  antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
