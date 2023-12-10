import { LibraryItem } from '@modules/library/domain/models/library.model'

export const SORT_BY_PROPERTY: Record<string, keyof LibraryItem> = {
  RECENTLY_ADDED: 'order',
  ALPHABETICAL: 'name',
  CREATOR: 'owner',
}

export type LibrarySortOption = {
  label: string
  value: keyof LibraryItem
}
