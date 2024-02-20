import { getLibrary } from '@modules/library/application/get/get-library.app'
import { LibraryOptionsProvider, LibraryProvider } from '@modules/library/infrastructure/contexts'
import { createLibraryPorts } from '@modules/library/infrastructure/library.infrastructure'
import { ScrollArea } from '@ui/chadcn/components/scroll-area'
import LibraryFilter from '@ui/library/components/LibraryFilter'
import LibraryOptions from '@ui/library/components/options/LibraryOptions'
import LibraryView from '@ui/library/components/view/LibraryView'

import { LIBRARY_SORT_OPTIONS } from '@/modules/library/infrastructure/data/library-sort.data'
import { LIBRARY_VIEW_OPTIONS } from '@/modules/library/infrastructure/data/library-view.data'

const Library = async () => {
  const libraryPorts = createLibraryPorts()

  const library = await getLibrary(libraryPorts)

  if (!library || !library.items) return null

  const { items } = library

  const [sortBy] = LIBRARY_SORT_OPTIONS
  const [view] = LIBRARY_VIEW_OPTIONS

  return (
    <ScrollArea>
      <LibraryProvider items={items} sortBy={sortBy.value}>
        <LibraryOptionsProvider sortBy={sortBy} view={view}>
          <div className="flex justify-between mb-2 px-2">
            <LibraryFilter />
            <LibraryOptions />
          </div>
          <LibraryView />
        </LibraryOptionsProvider>
      </LibraryProvider>
    </ScrollArea>
  )
}

export default Library
