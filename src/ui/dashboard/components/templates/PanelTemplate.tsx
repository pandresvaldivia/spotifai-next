import { ReactNode } from 'react'
import classNames from 'classnames'

const PanelTemplate = ({ children, className }: PanelTemplateProps) => {
  return <div className={classNames(className, 'rounded-lg bg-gray-700')}>{children}</div>
}

type PanelTemplateProps = {
  children: ReactNode
  className?: string
}

export default PanelTemplate
