export interface CurrentUserPlaylist {
  href: string
  items: CurrentUserPlaylistItem[]
  limit: number
  next: string
  offset: number
  previous: null
  total: number
}

export interface CurrentUserPlaylistItem {
  collaborative: boolean
  description: string
  external_urls: CurrentUserPlaylistUrls
  href: string
  id: string
  images: CurrentUserPlaylistItemImage[]
  name: string
  owner: CurrentUserPlaylistOwner
  primary_color: null
  public: boolean
  snapshot_id: string
  tracks: CurrentUserPlaylistItemTracks
  type: ItemType
  uri: string
}

export interface CurrentUserPlaylistUrls {
  spotify: string
}

export interface CurrentUserPlaylistItemImage {
  height: number | null
  url: string
  width: number | null
}

export interface CurrentUserPlaylistOwner {
  display_name: string
  external_urls: CurrentUserPlaylistUrls
  href: string
  id: string
  type: OwnerType
  uri: string
}

export interface CurrentUserPlaylistItemTracks {
  href: string
  total: number
}

export enum OwnerType {
  User = 'user',
}

export enum ItemType {
  Playlist = 'playlist',
}
