import { LibraryPorts } from '@modules/library/application/library.ports'
import { LibraryItem } from '@modules/library/domain/models/library.model'

export const sortLibrayByProperty = ({ ports, items, property }: sortLibrayByCreatorArgs) => {
  return ports.sortByProperty(items, property)
}

type sortLibrayByCreatorArgs = {
  ports: LibraryPorts
  items: LibraryItem[]
  property: keyof LibraryItem
}
