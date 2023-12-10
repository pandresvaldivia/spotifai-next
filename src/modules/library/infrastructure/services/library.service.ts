import { LibraryItemImage, LibraryItemType } from '@modules/library/domain/models/library.model'

export interface LibraryResponse {
  items: LibraryResponseItem[]
}

export interface LibraryResponseItem {
  id: string
  name: string
  images: LibraryItemImage[]
  owner: LibraryResponseItemOwner
  type: LibraryItemType
}

export interface LibraryResponseItemOwner {
  display_name: string
}
