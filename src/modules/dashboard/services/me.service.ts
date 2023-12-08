import { PLAYLIST_ENDPOINT } from '@modules/dashboard/constants/service'
import { CurrentUserPlaylist } from '@modules/dashboard/domain/models/me.model'
import { spotifyApi } from '@services/http.service'

export const getCurretUserPlaylists = async (): Promise<CurrentUserPlaylist | null> => {
  const data = await spotifyApi<CurrentUserPlaylist>({
    endpoint: PLAYLIST_ENDPOINT.CURRENT_USER_PLAYLISTS,
  })

  return data
}
