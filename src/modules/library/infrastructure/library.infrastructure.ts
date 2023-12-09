import { LibraryService } from '@modules/library/application/library.ports'
import { Library } from '@modules/library/domain/models/library.model'

import { spotifyApi } from '@/shared/services/http.service'

enum LIBRARY_ENDPOINT {
  CURRENT_USER_LIBRARY = '/v1/me/playlists?limit=50',
}

export const createLibraryAdapter = (): LibraryService => {
  return {
    get: getLibrary,
  }
}

const getLibrary = async () => {
  const library = await spotifyApi<Library>({
    endpoint: LIBRARY_ENDPOINT.CURRENT_USER_LIBRARY,
  })

  return library
}
