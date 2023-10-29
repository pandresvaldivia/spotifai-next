import { ReactNode } from 'react'
import classNames from 'classnames'

import { Footer } from '@/app/(dashboard)/components/organisms'
import { PanelTemplate } from '@/app/(dashboard)/components/templates'

const Content = ({ children, className }: ContentProps) => {
  return (
    <PanelTemplate className={classNames(className, 'grid')}>
      <div>{children}</div>
      <Footer />
    </PanelTemplate>
  )
}

type ContentProps = {
  children: ReactNode
  className?: string
}

export default Content
