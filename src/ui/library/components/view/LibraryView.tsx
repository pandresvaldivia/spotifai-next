'use client'

import { LIBRARY_VIEW } from '@modules/library/domain/models/view.model'
import { useLibraryOptionsContext } from '@modules/library/infrastructure/contexts/LibraryOptions.context'
import LibraryViewCompact from '@ui/library/components/view/compact/LibraryViewCompact'
import LibraryViewList from '@ui/library/components/view/list/LibraryViewList'

const LibraryView = () => {
  const { libraryOptions } = useLibraryOptionsContext()

  const { value } = libraryOptions.view

  if (value === LIBRARY_VIEW.COMPACT) return <LibraryViewCompact />

  if (value === LIBRARY_VIEW.LIST) return <LibraryViewList />

  return <div>Grid</div>
}

export default LibraryView
