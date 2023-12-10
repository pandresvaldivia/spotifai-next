import { getLibrary } from '@modules/library/application/get/get-library.app'
import { LibraryProvider } from '@modules/library/infrastructure/contexts'
import { createLibraryPorts } from '@modules/library/infrastructure/library.infrastructure'
import { ScrollArea } from '@ui/chadcn/components/scroll-area'
import LibraryFilter from '@ui/library/components/LibraryFilter'
import LibraryList from '@ui/library/components/LibraryList'
import LibraryOptions from '@ui/library/components/options/LibraryOptions'

const Library = async () => {
  const libraryPorts = createLibraryPorts()

  const library = await getLibrary(libraryPorts)

  if (!library || !library.items) return null

  const { items } = library

  return (
    <LibraryProvider items={items}>
      <ScrollArea>
        <div className="flex justify-between mb-2 px-2">
          <LibraryFilter />
          <LibraryOptions />
        </div>
        <LibraryList />
      </ScrollArea>
    </LibraryProvider>
  )
}

export default Library
