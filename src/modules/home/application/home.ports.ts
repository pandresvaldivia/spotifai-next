import { Categories } from '@modules/home/domain/models/category.model'
import { CategoryPlaylists } from '@modules/home/domain/models/category-playlist.model'

export interface HomePorts {
  getCategories: () => Promise<Categories | null>
  getCategoryPlaylists: (id: string) => Promise<CategoryPlaylists | null>
}
