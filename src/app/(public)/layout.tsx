import { ReactNode } from 'react'
import classNames from 'classnames'

import { PublicFooter, PublicHeader } from '@/ui/public/components/organisms'

import publicLayoutStyles from '@ui/public/styles/layout.module.scss'

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classNames(publicLayoutStyles.main, 'grid h-screen')}>
      <PublicHeader />
      <main className={classNames(publicLayoutStyles.content, 'p-8')}>{children}</main>
      <PublicFooter />
    </div>
  )
}

export default PublicLayout
