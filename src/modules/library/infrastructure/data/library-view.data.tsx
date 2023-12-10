import { CompactIcon, GridIcon, ListIcon } from '@icons/outline'
import { LIBRARY_VIEW, LibraryViewOption } from '@modules/library/domain/models/view.model'

export const LIBRARY_VIEW_OPTIONS: LibraryViewOption[] = [
  {
    label: 'Compact',
    value: LIBRARY_VIEW.COMPACT,
    icon: <CompactIcon height="16" width="16" className="w-4 h-4" />,
  },
  {
    label: 'List',
    value: LIBRARY_VIEW.LIST,
    icon: <ListIcon height="16" width="16" className="w-4 h-4" />,
  },
  {
    label: 'Grid',
    value: LIBRARY_VIEW.GRID,
    icon: <GridIcon height="16" width="16" className="w-4 h-4" />,
  },
]
