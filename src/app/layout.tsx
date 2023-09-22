import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Providers from '@/lib/Redux_Provider/Providers'
import Redux_Provider from '@/components/utils/Redux_Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dine Market",
  description: "E-commerce shopping App",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Redux_Provider>
    <Providers>
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
    </Providers>
    </Redux_Provider>
  )
}
