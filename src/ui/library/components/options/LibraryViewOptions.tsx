import { getLibraryViewValue } from '@modules/library/domain/transformations/view.trans'
import { useLibraryOptionsContext } from '@modules/library/infrastructure/contexts/LibraryOptions.context'
import { LIBRARY_VIEW_OPTIONS } from '@modules/library/infrastructure/data/library-view.data'
import { DropdownMenuRadioItem } from '@ui/chadcn/components/dropdown-menu'
import LibraryOptionsGroup from '@ui/library/components/options/LibraryOptionsGroup'

const LibraryViewOptions = () => {
  const { libraryOptions, setLibraryOptions } = useLibraryOptionsContext()

  const { value: viewValue } = libraryOptions.view

  function handleViewAs(value: string) {
    const view = getLibraryViewValue(value, LIBRARY_VIEW_OPTIONS)

    setLibraryOptions({ ...libraryOptions, view })
  }

  return (
    <LibraryOptionsGroup title="View as" value={viewValue} onValueChange={handleViewAs}>
      {LIBRARY_VIEW_OPTIONS.map(({ label, value, icon }) => {
        return (
          <DropdownMenuRadioItem value={value} key={value} className="gap-2">
            {icon}
            <span>{label}</span>
          </DropdownMenuRadioItem>
        )
      })}
    </LibraryOptionsGroup>
  )
}

export default LibraryViewOptions
