import { sortLibrayByProperty } from '@modules/library/application/sort/sort-by-property.app'
import { LibraryItem } from '@modules/library/domain/models/library.model'
import { getLibrarySortByValue } from '@modules/library/domain/transformations/sort.trans'
import { useLibraryContext } from '@modules/library/infrastructure/contexts/Library.context'
import { useLibraryOptionsContext } from '@modules/library/infrastructure/contexts/LibraryOptions.context'
import { LIBRARY_SORT_OPTIONS } from '@modules/library/infrastructure/data/library-sort.data'
import { createLibraryPorts } from '@modules/library/infrastructure/library.infrastructure'
import { DropdownMenuRadioItem } from '@ui/chadcn/components/dropdown-menu'
import LibraryOptionsGroup from '@ui/library/components/options/LibraryOptionsGroup'

const LibrarySortOptions = () => {
  const { setLibraryItems, libraryItems } = useLibraryContext()
  const { libraryOptions, setLibraryOptions } = useLibraryOptionsContext()

  const libraryPorts = createLibraryPorts()

  const { value: sortByValue } = libraryOptions.sortBy

  function handleSortBy(value: string) {
    const sortValue = value as keyof LibraryItem

    const sortBy = getLibrarySortByValue(value, LIBRARY_SORT_OPTIONS)

    const sortedItems = sortLibrayByProperty({
      ports: libraryPorts,
      items: libraryItems,
      property: sortValue,
    })

    setLibraryOptions({ ...libraryOptions, sortBy })
    setLibraryItems(sortedItems)
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
