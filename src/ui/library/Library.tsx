import { LibraryProvider } from '@modules/library/infrastructure/contexts'
import { createLibraryAdapter } from '@modules/library/infrastructure/library.infrastructure'
import LibraryHeader from '@ui/library/LibraryHeader'
import LibraryList from '@ui/library/LibraryList'

const Library = async () => {
  const libraryService = createLibraryAdapter()

  const library = await libraryService.get()

  if (!library || !library.items) return null

  const { items } = library

  return (
    <div className="grid min-h-0">
      <LibraryProvider items={items}>
        <LibraryHeader />
        <LibraryList />
      </LibraryProvider>
    </div>
  )
}

export default Library
