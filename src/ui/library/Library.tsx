import { getLibrary } from '@modules/library/application/get/get-library.app'
import { LibraryProvider } from '@modules/library/infrastructure/contexts'
import { createLibraryPorts } from '@modules/library/infrastructure/library.infrastructure'
import LibraryHeader from '@ui/library/LibraryHeader'
import LibraryList from '@ui/library/LibraryList'

const Library = async () => {
  const libraryPorts = createLibraryPorts()

  const library = await getLibrary(libraryPorts)

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
