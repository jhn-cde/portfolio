import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/layout/navbar/NavBar'
import Footer from './components/layout/footer/Footer'
import Social from './components/layout/social/Social'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Johan Huaman',
  description: 'Johan Wilfredo Huaman Mendoza portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        <Social />
      </body>
    </html>
  )
}
