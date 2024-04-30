export interface CategoriesResponse {
  categories: CategoriesResponseContent
}

export interface CategoriesResponseContent {
  href: string
  limit: number
  next: string
  offset: number
  previous: null
  total: number
  items: CategoriesResponseItem[]
}

export interface CategoriesResponseItem {
  href: string
  icons: CategoriesResponseItemPoster[]
  id: string
  name: string
}

export interface CategoriesResponseItemPoster {
  url: string
  height: number
  width: number
}
