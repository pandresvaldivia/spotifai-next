import { LibrarySortOption, SORT_BY_PROPERTY } from '@modules/library/domain/models/sort.model'

export const LIBRARY_SORT_OPTIONS: LibrarySortOption[] = [
  {
    label: 'Recently Added',
    value: SORT_BY_PROPERTY.RECENTLY_ADDED,
  },
  {
    label: 'Alphabetical',
    value: SORT_BY_PROPERTY.ALPHABETICAL,
  },
  {
    label: 'Creator',
    value: SORT_BY_PROPERTY.CREATOR,
  },
]
