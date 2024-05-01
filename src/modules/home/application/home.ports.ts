import { Categories } from '@modules/home/models/category.model'
import { CategoryPlaylists } from '@modules/home/models/category-playlist.model'

export interface HomePorts {
  getCategories: () => Promise<Categories | null>
  getCategoryPlaylists: (id: string) => Promise<CategoryPlaylists | null>
}
