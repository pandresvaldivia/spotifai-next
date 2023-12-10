import { LibraryViewOption } from '@modules/library/domain/models/view.model'

export function getLibraryViewValue(
  value: string,
  viewOptions: LibraryViewOption[]
): LibraryViewOption {
  return viewOptions.find((option) => option.value === value) || viewOptions[0]
}
