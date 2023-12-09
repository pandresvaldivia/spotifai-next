import { PanelTemplate } from '@ui/dashboard/components/templates'
import Library from '@ui/library/Library'

const LibraryPanel = () => {
  return (
    <PanelTemplate className="grid p-2 min-h-0">
      <Library />
    </PanelTemplate>
  )
}

export default LibraryPanel
