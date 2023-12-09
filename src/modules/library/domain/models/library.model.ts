export interface Library {
  items: LibraryItem[]
}

export interface LibraryItem {
  id: string
  name: string
  images: LibraryItemImage[]
  owner: LibraryItemOwner
  type: LibraryItemType
}

export interface LibraryItemImage {
  url: string
  height: number | null
  width: number | null
}

export interface LibraryItemOwner {
  display_name: string
}

export enum LibraryItemType {
  Playlist = 'playlist',
}
