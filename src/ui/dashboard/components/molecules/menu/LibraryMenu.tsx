import { Playlist } from '@ui/dashboard/components/molecules'
import { PanelTemplate } from '@ui/dashboard/components/templates'

const LibraryMenu = () => {
  return (
    <PanelTemplate className="grid p-2 min-h-0">
      <Playlist />
    </PanelTemplate>
  )
}

export default LibraryMenu
