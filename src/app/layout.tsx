import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'TheBytePlay',
    template: '%s | TheBytePlay',
  },
  description: 'A modern web platform with live streaming, interviews, and community features',
  keywords: ['live streaming', 'interviews', 'community', 'technology', 'programming'],
  authors: [{ name: 'TheBytePlay Team' }],
  creator: 'TheBytePlay',
  publisher: 'TheBytePlay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thebyteplay.com',
    siteName: 'TheBytePlay',
    title: 'TheBytePlay - Live Streaming & Tech Interviews',
    description: 'A modern web platform with live streaming, interviews, and community features',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TheBytePlay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheBytePlay - Live Streaming & Tech Interviews',
    description: 'A modern web platform with live streaming, interviews, and community features',
    site: '@thebyteplay',
    creator: '@thebyteplay',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
