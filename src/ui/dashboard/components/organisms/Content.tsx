import { ReactNode } from 'react'
import { Footer } from '@ui/dashboard/components/organisms'
import { PanelTemplate } from '@ui/dashboard/components/templates'
import clsx from 'clsx'

const Content = ({ children, className }: ContentProps) => {
  return (
    <PanelTemplate className={clsx(className, 'grid')}>
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
