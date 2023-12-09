import { getLibrary } from '@modules/library/application/get/get-library.app'
import { LibraryProvider } from '@modules/library/infrastructure/contexts'
import { createLibraryPorts } from '@modules/library/infrastructure/library.infrastructure'
import LibraryFilter from '@ui/library/LibraryFilter'
import LibraryList from '@ui/library/LibraryList'
import { LibraryIcon } from '@ui/shared/icons/solid'

const Library = async () => {
  const libraryPorts = createLibraryPorts()

  const library = await getLibrary(libraryPorts)

  if (!library || !library.items) return null

  const { items } = library

  return (
    <section aria-labelledby="library" className="flex flex-col min-h-0">
      <div className="px-4 mb-3">
        <p id="library" className="flex items-center gap-3 text-gray-200 font-bold text-sm">
          <LibraryIcon />
          <span className="mt-1">Your Library</span>
        </p>
      </div>
      <LibraryProvider items={items}>
        <div className="overflow-auto">
          <div className="mb-2 px-2">
            <LibraryFilter />
          </div>
          <LibraryList />
        </div>
      </LibraryProvider>
    </section>
  )
}

export default Library
