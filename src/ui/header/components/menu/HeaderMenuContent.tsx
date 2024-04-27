'use client'

import { signOut } from 'next-auth/react'

import { DropdownMenuContent, DropdownMenuSeparator } from '@/ui/chadcn/components/dropdown-menu'
import { ExternalLinkIcon } from '@/ui/shared/components/icons/solid'

import { HeaderMenuItem } from './HeaderMenuItem'

export const HeaderMenuContent = () => {
  return (
    <DropdownMenuContent className="bg-gray-500 p-1" align="end">
      <HeaderMenuItem
        text="Account"
        icon={<ExternalLinkIcon height="16" width="16" className="h-4 w-4" />}
      />
      <HeaderMenuItem text="Profile" />
      <HeaderMenuItem
        text="Upgrade to Premium"
        icon={<ExternalLinkIcon height="16" width="16" className="h-4 w-4" />}
      />
      <HeaderMenuItem text="Settings" />
      <DropdownMenuSeparator className="h-px bg-white/10" />
      <HeaderMenuItem text="Log out" onClick={() => signOut()} />
    </DropdownMenuContent>
  )
}
