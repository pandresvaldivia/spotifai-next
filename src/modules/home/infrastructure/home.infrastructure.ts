import { HomePorts } from '@modules/home/application/home.ports'
import { CategoriesResponse } from '@modules/home/infrastructure/services/categories.service'
import { HOME_ENDPOINT } from '@modules/home/infrastructure/services/endpoint.service'
import { Categories } from '@modules/home/models/category.model'

import { spotifyApi } from '@/shared/services/http.service'

export const createHomePorts = (): HomePorts => {
  return {
    getCategories: getHomeCategories,
  }
}

async function getHomeCategories(): Promise<Categories | null> {
  const categories = await spotifyApi<CategoriesResponse>({
    endpoint: HOME_ENDPOINT.CATEGORIES,
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
