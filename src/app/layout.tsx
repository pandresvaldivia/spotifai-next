import classNames from 'classnames'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import '@styles/global.scss'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={classNames(montserrat.variable)}>
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Spotifai',
  description:
    'Spotifai is a clone of the digital music service that gives you access to millions of songs.',
}

export default RootLayout
