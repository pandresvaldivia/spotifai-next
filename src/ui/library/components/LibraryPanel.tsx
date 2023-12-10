import { LibraryIcon } from '@icons/solid'
import { PanelTemplate } from '@ui/dashboard/components/templates'
import Library from '@ui/library/components/Library'

const LibraryPanel = () => {
  return (
    <PanelTemplate className="grid p-2 pt-4 min-h-0 h-full">
      <section aria-labelledby="library" className="flex flex-col min-h-0">
        <div className="px-4 mb-3">
          <p id="library" className="flex items-center gap-3 text-gray-200 font-bold text-sm">
            <LibraryIcon />
            <span className="mt-1">Your Library</span>
          </p>
        </div>
        <Library />
      </section>
    </PanelTemplate>
  )
}

export default LibraryPanel
