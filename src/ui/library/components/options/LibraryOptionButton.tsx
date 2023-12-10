import { useLibraryOptionsContext } from '@modules/library/infrastructure/contexts/LibraryOptions.context'
import { DropdownMenuTrigger } from '@ui/chadcn/components/dropdown-menu'

const LibraryOptionButton = () => {
  const { libraryOptions } = useLibraryOptionsContext()

  const { label } = libraryOptions.sortBy
  const { icon } = libraryOptions.view

  return (
    <DropdownMenuTrigger className="flex items-center gap-1 text-gray-200 text-xs font-medium outline-none py-1 px-3 hover:scale-105 hover:text-white transition-all">
      {label} {icon}
    </DropdownMenuTrigger>
  )
}

export default LibraryOptionButton
