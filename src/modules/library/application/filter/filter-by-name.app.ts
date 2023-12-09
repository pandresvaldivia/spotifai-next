import { LibraryPorts } from '@modules/library/application/library.ports'
import { LibraryItem } from '@modules/library/domain/models/library.model'

export const filterLibraryByName = ({
  ports,
  value,
  items,
}: FilterLibraryByNameArgs): LibraryItem[] => {
  return ports.filterByName(value, items)
}

type FilterLibraryByNameArgs = {
  ports: LibraryPorts
  value: string
  items: LibraryItem[]
}
