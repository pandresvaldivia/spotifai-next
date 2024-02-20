import { LibraryItem } from '@modules/library/domain/models/library.model'
import { getLibrarySortByValue } from '@modules/library/domain/transformations/sort.trans'
import { useLibraryContext } from '@modules/library/infrastructure/contexts/Library.context'
import { useLibraryOptionsContext } from '@modules/library/infrastructure/contexts/LibraryOptions.context'
import { LIBRARY_SORT_OPTIONS } from '@modules/library/infrastructure/data/library-sort.data'
import { DropdownMenuRadioItem } from '@ui/chadcn/components/dropdown-menu'
import LibraryOptionsGroup from '@ui/library/components/options/LibraryOptionsGroup'

const LibrarySortOptions = () => {
  const { setSortValue } = useLibraryContext()
  const { libraryOptions, setLibraryOptions } = useLibraryOptionsContext()

  const { value: sortByValue } = libraryOptions.sortBy

  function handleSortBy(value: string) {
    const sortValue = value as keyof LibraryItem

    const sortBy = getLibrarySortByValue(value, LIBRARY_SORT_OPTIONS)

    setSortValue(sortValue)

    setLibraryOptions({ ...libraryOptions, sortBy })
  }

  return (
    <LibraryOptionsGroup title="Sort by" value={sortByValue} onValueChange={handleSortBy}>
      {LIBRARY_SORT_OPTIONS.map(({ label, value }) => {
        return (
          <DropdownMenuRadioItem value={value} key={value} className="gap-2">
            <span>{label}</span>
          </DropdownMenuRadioItem>
        )
      })}
    </LibraryOptionsGroup>
  )
}

export default LibrarySortOptions
