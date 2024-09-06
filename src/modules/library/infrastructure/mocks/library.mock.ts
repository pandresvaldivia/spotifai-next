import { LibraryItem, LibraryItemType } from '../../domain/models/library.model'

export const LIBRARY_ITEMS_MOCK: LibraryItem[] = [
  {
    id: '3cEYpjA9oz9GiPac4AsH4n',
    name: '2. lets dance',
    owner: '2pac',
    order: 1,
    images: [
      {
        height: null,
        width: null,
        url: 'https://wwww.image.com/2',
      },
    ],
    type: LibraryItemType.Playlist,
  },
  {
    id: '3WrXzXEhhcRii5pOu3axHR',
    name: 'a. lets go party',
    owner: 'pandres',
    order: 0,
    images: [
      {
        url: 'https://wwww.image.com/1',
        height: 640,
        width: 640,
      },
    ],
    type: LibraryItemType.Playlist,
  },
  {
    id: '4ZySE89jNaCVNZmoXZOyXu',
    name: 'B. disco',
    owner: 'P. Sherman',
    order: 2,
    images: [
      {
        url: 'https://wwww.image.com/3',
        height: null,
        width: null,
      },
    ],
    type: LibraryItemType.Playlist,
  },
]
