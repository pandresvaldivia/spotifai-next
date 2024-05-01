'use client'

import { CSSProperties } from 'react'
import { CategoryPlaylist } from '@modules/home/domain/models/category-playlist.model'
import { usePlaylistsCount } from '@modules/home/infrastructure/hooks/usePlaylistsCount'
import clsx from 'clsx'

import categoryLibraryListStyles from '@/ui/home/styles/category-library-list.module.scss'

import { CategoryLibraryCard } from './CategoryLibraryCard'

export const CategoryLibraryList = ({ playlists }: CategoryLibraryListProps) => {
  const { itemsCount } = usePlaylistsCount()

  const libraryPlaylists = playlists.slice(0, itemsCount)

  return (
    <section
      style={{ '--playlist-columns': itemsCount } as CSSProperties}
      className={clsx(categoryLibraryListStyles.main, 'grid -mx-3')}
    >
      {libraryPlaylists.map((playlist) => (
        <CategoryLibraryCard key={`${playlist.id}-${playlist.name}`} playlist={playlist} />
      ))}
    </section>
  )
}

type CategoryLibraryListProps = {
  playlists: CategoryPlaylist[]
}
