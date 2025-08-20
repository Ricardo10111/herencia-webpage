import { Playfair_Display } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

// Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})

const SITE_URL = 'https://www.herenciawoodart.com'
const TITLE = 'Herencia Wood Art'
const DESCRIPTION =
  'Herencia Wood Art: five generations of Mexican woodcarving tradition with modern design. Discover timeless handcrafted pieces that preserve heritage through purposeful craftsmanship.'

export const metadata = {
  metadataBase: new URL('https://www.herenciawoodart.com'),
  title: {
    default: 'Herencia Wood Art – Five Generations of Woodcarving Tradition',
    template: `%s | Herencia Wood Art`,
  },
  description:
    'Herencia Wood Art blends five generations of Mexican woodcarving tradition with modern design. Discover timeless handcrafted pieces that preserve heritage through purposeful craftsmanship.',
  openGraph: {
    title: 'Herencia Wood Art – Five Generations of Woodcarving Tradition',
    description:
      'Discover timeless handcrafted wood art that blends five generations of tradition with modern design.',
    url: '/',
    siteName: 'Herencia Wood Art',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Herencia Wood Art',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herencia Wood Art – Five Generations of Woodcarving Tradition',
    description:
      'Timeless handcrafted wood art preserving heritage through design.',
    images: ['/og.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Herencia Wood Art',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://www.instagram.com/herencia.cwa/',
      'https://www.facebook.com/HerenciaCWA',
      'https://www.youtube.com/@herenciacwa',
    ],
  }

  return (
    <html lang='en'>
      <body className={`${playfairDisplay.variable} antialiased`}>
        <Header />
        {children}
        <Footer />

        <Script
          id='org-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  )
}
