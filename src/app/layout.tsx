import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Spotifai',
  description:
    'Spotifai is a clone of the digital music service that gives you access to millions of songs.',
}

export default RootLayout
