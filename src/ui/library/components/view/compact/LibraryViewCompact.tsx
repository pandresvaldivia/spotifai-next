import { useLibraryContext } from '@/modules/library/infrastructure/contexts/Library.context'

import LibraryViewCompactItem from './LibraryViewCompactItem'

const LibraryViewCompact = () => {
  const { libraryItems } = useLibraryContext()

  return (
    <ul aria-label="Your playlists">
      {libraryItems.map((item) => {
        return <LibraryViewCompactItem key={item.id} item={item} />
      })}
    </ul>
  )
}

export default LibraryViewCompact
