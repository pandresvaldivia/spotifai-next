import { getCurretUserPlaylists } from '@modules/dashboard/services/me.service'
import { PlaylistItem } from '@ui/dashboard/components/atoms'

const Playlist = async () => {
  const playlists = await getCurretUserPlaylists()

  if (!playlists) return null

  const { items } = playlists

  return (
    <ul aria-label="Your library" className="overflow-auto">
      {items.map((item) => {
        return <PlaylistItem key={item.id} item={item} />
      })}
    </ul>
  )
}

export default Playlist
