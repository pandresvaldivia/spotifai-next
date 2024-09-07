import { getLibrary } from '@/modules/library/application/get/get-library.app'
import { createLibraryPorts } from '@/modules/library/infrastructure/library.infrastructure'

import { WelcomePlaylist } from './WelcomePlaylist'

export const WelcomePlaylists = async () => {
  const libraryPorts = createLibraryPorts()

  const library = await getLibrary(libraryPorts)

  if (!library || !library.items) return null

  const welcomePlaylists = library.items.slice(0, 8)

  return (
    <section
      className="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-10 mt-16"
      aria-label="Welcome playlists"
    >
      {welcomePlaylists.map((item, index) => (
        <WelcomePlaylist key={item.id} playlist={item} index={index} />
      ))}
    </section>
  )
}
