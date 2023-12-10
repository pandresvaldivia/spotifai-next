import { LibrarySortOption } from '../models/sort.model'

export function getLibrarySortByValue(
  value: string,
  sortOptions: LibrarySortOption[]
): LibrarySortOption {
  return sortOptions.find((option) => option.value === value) || sortOptions[0]
}
