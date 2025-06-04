import { Playfair_Display } from 'next/font/google'
import './globals.css'

//Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})

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
        <Footer />
      </body>
    </html>
  )
}
