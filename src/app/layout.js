import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

// Refined serif for British luxury aesthetic
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: 'swap',
});

// Clean sans-serif for body text
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: 'swap',
});

export const metadata = {
  title: 'The Whisky Drip | Whisky-Aged Washed Coffee',
  description: 'Experience sophistication in every drip. Premium whisky-aged washed coffee from Honduras, crafted in Thailand for the discerning palate.',
  keywords: 'whisky coffee, premium coffee, Honduras coffee, specialty coffee, non-alcoholic whisky coffee',
  authors: [{ name: 'The Whisky Drip' }],
  openGraph: {
    title: 'The Whisky Drip',
    description: 'Whisky-aged washed coffee, crafted for depth & aroma.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" sizes="any" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}