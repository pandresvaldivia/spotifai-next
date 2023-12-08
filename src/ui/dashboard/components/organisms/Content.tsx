import { ReactNode } from 'react'
import { Footer } from '@ui/dashboard/components/organisms'
import { PanelTemplate } from '@ui/dashboard/components/templates'
import classNames from 'classnames'

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
