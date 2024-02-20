import classNames from 'classnames'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import '@ui/shared/styles/global.scss'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={classNames(montserrat.variable)}>
      <body className="overflow-hidden">{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Spotifai',
  description:
    'Spotifai is a clone of the digital music service that gives you access to millions of songs.',
}

export default RootLayout
