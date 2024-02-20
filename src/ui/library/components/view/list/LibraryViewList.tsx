'use client'

import { useLibraryContext } from '@modules/library/infrastructure/contexts/Library.context'
import LibraryViewListItem from '@ui/library/components/view/list/LibraryViewListItem'

const LibraryViewList = () => {
  const { libraryItems } = useLibraryContext()

  return (
    <ul aria-label="Your playlists">
      {libraryItems.map((item) => {
        return <LibraryViewListItem key={item.id} item={item} />
      })}
    </ul>
  )
}

export default LibraryViewList
