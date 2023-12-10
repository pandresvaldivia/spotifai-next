import { LibraryPorts } from '@modules/library/application/library.ports'
import { Library, LibraryItem } from '@modules/library/domain/models/library.model'
import { LIBRARY_ENDPOINT } from '@modules/library/infrastructure/services/endpoint.service'
import { LibraryResponse } from '@modules/library/infrastructure/services/library.service'

import { spotifyApi } from '@/shared/services/http.service'

export const createLibraryPorts = (): LibraryPorts => {
  return {
    get: getLibrary,
    filterByName: filterLibraryByName,
    sortByProperty: sortLibrayByProperty,
  }
}

const getLibrary = async (): Promise<Library | null> => {
  const library = await spotifyApi<LibraryResponse>({
    endpoint: LIBRARY_ENDPOINT.CURRENT_USER_LIBRARY,
  })

  if (!library) {
    return null
  }

  const libraryItems = library.items.map((item, index) => {
    return {
      ...item,
      owner: item.owner.display_name,
      order: index,
    }
  })

  return {
    items: libraryItems,
  }
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

const sortLibrayByProperty = (items: LibraryItem[], property: keyof LibraryItem) => {
  return [...items].sort((a, b) => {
    if (a[property] < b[property]) {
      return -1
    }
    if (a[property] > b[property]) {
      return 1
    }
    return 0
  })
}
