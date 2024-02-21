import { ReactNode } from 'react'
import clsx from 'clsx'

import { PublicFooter, PublicHeader } from '@/ui/public/components/organisms'

import publicLayoutStyles from '@ui/public/styles/layout.module.scss'

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={clsx(publicLayoutStyles.main, 'grid h-screen')}>
      <PublicHeader />
      <main className={clsx(publicLayoutStyles.content, 'p-8')}>{children}</main>
      <PublicFooter />
    </div>
  )
}

export default PublicLayout
