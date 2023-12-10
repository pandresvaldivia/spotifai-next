'use client'

import { LibraryOptionsProvider } from '@modules/library/infrastructure/contexts'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from '@ui/chadcn/components/dropdown-menu'
import LibraryOptionButton from '@ui/library/components/options/LibraryOptionButton'
import LibrarySortOptions from '@ui/library/components/options/LibrarySortOptions'
import LibraryViewOptions from '@ui/library/components/options/LibraryViewOptions'

const LibraryOptions = () => {
  return (
    <LibraryOptionsProvider>
      <DropdownMenu>
        <LibraryOptionButton />
        <DropdownMenuContent className="w-40 bg-gray-500" align="end">
          <LibrarySortOptions />
          <DropdownMenuSeparator className="bg-white/10 my-1" />
          <LibraryViewOptions />
        </DropdownMenuContent>
      </DropdownMenu>
    </LibraryOptionsProvider>
  )
}

export default LibraryOptions
