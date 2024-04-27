import { DropdownMenu } from '@/ui/chadcn/components/dropdown-menu'

import { HeaderMenuButton } from './HeaderMenuButton'
import { HeaderMenuContent } from './HeaderMenuContent'

export const HeaderMenu = async () => {
  return (
    <DropdownMenu>
      <HeaderMenuButton />
      <HeaderMenuContent />
    </DropdownMenu>
  )
}
