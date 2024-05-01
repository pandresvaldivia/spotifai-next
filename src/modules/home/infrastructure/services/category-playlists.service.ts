export interface CategoryPlaylistsResponse {
  message: string
  playlists: CategoryPlaylistsResponseContent
}

interface CategoryPlaylistsResponseContent {
  href: string
  limit: number
  next: string
  offset: number
  previous: null
  total: number
  items: CategoryPlaylistsResponseItem[]
}

interface CategoryPlaylistsResponseItem {
  collaborative: boolean
  description: string
  external_urls: CategoryPlaylistsResponseUrl
  href: string
  id: string
  images: CategoryPlaylistsResponseImage[]
  name: string
  owner: Owner
  public: boolean
  snapshot_id: string
  tracks: CategoryPlaylistsResponseTracks
  type: string
  uri: string
  primary_color: string
}

interface CategoryPlaylistsResponseUrl {
  spotify: string
}

interface CategoryPlaylistsResponseImage {
  url: string
  height: null
  width: null
}

interface Owner {
  external_urls: CategoryPlaylistsResponseUrl
  href: string
  id: string
  type: string
  uri: string
  display_name: string
}

interface CategoryPlaylistsResponseTracks {
  href: string
  total: number
}
