import { HomePorts } from '@modules/home/application/home.ports'
import { CategoriesResponse } from '@modules/home/infrastructure/services/categories.service'
import { CategoryPlaylistsResponse } from '@modules/home/infrastructure/services/category-playlists.service'
import { CATEGORY_ENDPOINT } from '@modules/home/infrastructure/services/endpoint.service'
import { Categories } from '@modules/home/models/category.model'
import { CategoryPlaylists } from '@modules/home/models/category-playlist.model'

import { spotifyApi } from '@/shared/services/http.service'

export function createHomePorts(): HomePorts {
  return {
    getCategories: getHomeCategories,
    getCategoryPlaylists: getCategoryPlaylists,
  }
}

async function getHomeCategories(): Promise<Categories | null> {
  const categories = await spotifyApi<CategoriesResponse>({
    endpoint: CATEGORY_ENDPOINT.ALL,
  })

  if (!categories) {
    return null
  }

  const { items } = categories.categories

  const homeCategories = items.map((category) => {
    return {
      id: category.id,
      name: category.name,
      poster: category.icons[0].url,
      href: category.href,
    }
  })

  return {
    items: homeCategories,
  }
}

async function getCategoryPlaylists(id: string): Promise<CategoryPlaylists | null> {
  const playlists = await spotifyApi<CategoryPlaylistsResponse>({
    endpoint: CATEGORY_ENDPOINT.PLAYLISTS(id),
  })

  if (!playlists) {
    return null
  }

  const { items } = playlists.playlists

  const categoryPlaylists = items.map((playlist, index) => {
    return {
      id: `${playlist.id}${index}`,
      name: playlist.name,
      description: playlist.description,
      poster: playlist.images[0].url,
      href: playlist.href,
    }
  })

  return {
    items: categoryPlaylists,
  }
}
