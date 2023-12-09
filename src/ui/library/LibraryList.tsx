'use client'

import { useLibraryContext } from '@modules/library/infrastructure/contexts/Library.context'
import LibraryListItem from '@ui/library/LibraryListItem'

const LibraryList = () => {
  const { libraryItems } = useLibraryContext()

  return (
    <ul aria-label="Your library">
      {libraryItems.map((item) => {
        return <LibraryListItem key={item.id} item={item} />
      })}
    </ul>
  )
}

export default LibraryList
