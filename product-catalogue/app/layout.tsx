import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/NavBar'
import { CartProvider } from './context/CartContext'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Product Catalogue Web App',
  description: 'This is a web app that showcases dynamic product catalogues.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Background */}
        <CartProvider>
          <div className="relative min-h-screen bg-[#CDD6E9]">
            {/* Content above overlay */}
            <div className="relative flex flex-col gap-10">
              <NavBar />
              {children}
            </div>
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
