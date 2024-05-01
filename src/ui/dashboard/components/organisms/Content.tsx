import { ReactNode } from 'react'
import { Footer } from '@ui/dashboard/components/organisms'
import { PanelTemplate } from '@ui/dashboard/components/templates'
import clsx from 'clsx'

import { ScrollArea } from '@/ui/chadcn/components/scroll-area'
import contentStyles from '@/ui/dashboard/styles/dashboard-content.module.scss'
import { Header } from '@/ui/header/components/Header'

const Content = ({ children, className }: ContentProps) => {
  return (
    <PanelTemplate className={clsx(contentStyles.main, className, 'relative grid overflow-hidden')}>
      <Header />
      <ScrollArea>
        {children}
        <Footer />
      </ScrollArea>
    </PanelTemplate>
  )
}

type ContentProps = {
  children: ReactNode
  className?: string
}

export default Content
