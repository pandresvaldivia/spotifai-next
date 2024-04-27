import { ReactNode } from 'react'

import { DropdownMenuItem } from '@/ui/chadcn/components/dropdown-menu'

export const HeaderMenuItem = ({ text, icon, onClick }: HeaderMenuItemProps) => {
  return (
    <DropdownMenuItem
      onClick={onClick}
      className="flex gap-3 justify-between text-xs font-medium p-3 text-white/90 hover:bg-white/10 transition-colors"
    >
      {text}
      {icon}
    </DropdownMenuItem>
  )
}

type HeaderMenuItemProps = {
  onClick?: () => void
  text: ReactNode
  icon?: JSX.Element
}
