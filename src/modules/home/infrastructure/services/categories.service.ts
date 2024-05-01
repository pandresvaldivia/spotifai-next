export interface CategoriesResponse {
  categories: CategoriesResponseContent
}

interface CategoriesResponseContent {
  href: string
  limit: number
  next: string
  offset: number
  previous: null
  total: number
  items: CategoriesResponseItem[]
}

interface CategoriesResponseItem {
  href: string
  icons: CategoriesResponseItemPoster[]
  id: string
  name: string
}

interface CategoriesResponseItemPoster {
  url: string
  height: number
  width: number
}
