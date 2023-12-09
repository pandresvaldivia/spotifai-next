import { Library, LibraryItem } from '@modules/library/domain/models/library.model'

export interface LibraryPorts {
  get: () => Promise<Library | null>
  filterByName: (value: string, items: LibraryItem[]) => LibraryItem[]
}
