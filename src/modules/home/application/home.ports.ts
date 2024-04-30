import { Categories } from '@modules/home/models/category.model'

export interface HomePorts {
  getCategories: () => Promise<Categories | null>
}
