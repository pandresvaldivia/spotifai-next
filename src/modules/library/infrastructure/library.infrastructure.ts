import { LibraryPorts } from '@modules/library/application/library.ports'
import { Library, LibraryItem } from '@modules/library/domain/models/library.model'

import { spotifyApi } from '@/shared/services/http.service'

enum LIBRARY_ENDPOINT {
  CURRENT_USER_LIBRARY = '/v1/me/playlists?limit=50',
}

export const createLibraryPorts = (): LibraryPorts => {
  return {
    get: getLibrary,
    filterByName: filterLibraryByName,
  }
}

const getLibrary = async () => {
  const library = await spotifyApi<Library>({
    endpoint: LIBRARY_ENDPOINT.CURRENT_USER_LIBRARY,
  })

  return library
}

const filterLibraryByName = (value: string, items: LibraryItem[]) => {
  const cleanValue = value.trim()

  const filteredItems = items.filter((item) => {
    const name = item.name.toLowerCase()
    const searchValue = cleanValue.toLowerCase()

    return name.includes(searchValue)
  })

  return filteredItems
}
