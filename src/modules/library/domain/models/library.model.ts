export interface Library {
  items: LibraryItem[]
}

export interface LibraryItem {
  id: string
  name: string
  order: number
  images: LibraryItemImage[]
  owner: string
  type: LibraryItemType
}

export interface LibraryItemImage {
  url: string
  height: number | null
  width: number | null
}

export enum LibraryItemType {
  Playlist = 'playlist',
}
