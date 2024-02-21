import { CSSProperties } from 'react'
import clsx from 'clsx'

import { useLibraryContext } from '@/modules/library/infrastructure/contexts/Library.context'
import { useLibraryOptionsContext } from '@/modules/library/infrastructure/contexts/LibraryOptions.context'
import { getLibraryColumnsCount } from '@/modules/library/infrastructure/helpers/library-view.helper'

import LibraryViewGridItem from './LibraryViewGridItem'
import LibraryViewGridSmallItem from './LibraryViewGridSmallItem'

import libraryViewGridStyles from '@ui/library/styles/library-view-grid.module.scss'

const LibraryViewGrid = () => {
  const { libraryItems } = useLibraryContext()
  const { libraryOptions } = useLibraryOptionsContext()

  const columnsCount = getLibraryColumnsCount(libraryOptions.gridDensity)
  const isSmallGrid = columnsCount > 4

  return (
    <ul
      style={{ '--column-count': columnsCount } as CSSProperties}
      className={clsx(libraryViewGridStyles.main, 'grid')}
      aria-label="Your playlists"
    >
      {!isSmallGrid &&
        libraryItems.map((item) => {
          return <LibraryViewGridItem key={item.id} item={item} />
        })}

      {isSmallGrid &&
        libraryItems.map((item) => {
          return <LibraryViewGridSmallItem key={item.id} item={item} />
        })}
    </ul>
  )
}

export default LibraryViewGrid
