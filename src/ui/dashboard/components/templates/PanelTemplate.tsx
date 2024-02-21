import { ReactNode } from 'react'
import clsx from 'clsx'

const PanelTemplate = ({ children, className }: PanelTemplateProps) => {
  return <div className={clsx(className, 'rounded-lg bg-gray-700')}>{children}</div>
}

type PanelTemplateProps = {
  children: ReactNode
  className?: string
}

export default PanelTemplate
