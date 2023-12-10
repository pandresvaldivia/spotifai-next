import { ReactNode } from 'react'
import { DropdownMenuLabel, DropdownMenuRadioGroup } from '@ui/chadcn/components/dropdown-menu'
import classNames from 'classnames'

import LibraryOptionsStyles from '@ui/library/styles/library-options.module.scss'

const LibraryOptionsGroup = ({
  children,
  title,
  value,
  onValueChange,
}: LibraryOptionsGroupProps) => {
  return (
    <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
      <DropdownMenuLabel className={classNames(LibraryOptionsStyles.title, 'text-gray-200 p-3')}>
        <p className="leading-normal">{title}</p>
      </DropdownMenuLabel>
      {children}
    </DropdownMenuRadioGroup>
  )
}

type LibraryOptionsGroupProps = {
  children: ReactNode
  title: string
  value: string
  onValueChange: (value: string) => void
}

export default LibraryOptionsGroup
