import { getPlaylistDescription } from '@modules/home/infrastructure/helpers/playlist.helper'
import { CategoryPlaylist } from '@modules/home/models/category-playlist.model'
import clsx from 'clsx'
import Image from 'next/image'

import PlayButton from '@/ui/shared/components/buttons/PlayButton'

export const CategoryLibraryCard = ({ playlist, className }: CategoryLibraryCardProps) => {
  const { poster, name, description } = playlist

  const playlistDescription = getPlaylistDescription(description)

  return (
    <div
      className={clsx(
        className,
        'group flex flex-col gap-2 p-3 rounded-md cursor-pointer transition-colors hover:bg-gray-600'
      )}
    >
      <div className="relative rounded-md overflow-hidden">
        <Image src={poster} alt={name} width="169" height="169" className="w-full aspect-square" />
        <PlayButton className="absolute bottom-2 right-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110" />
      </div>
      <div className="font-semibold">
        <p className="text-white text-sm truncate mb-0.5">{name}</p>
        <p className="text-gray-200 text-xs line-clamp-2 break-words">{playlistDescription}</p>
      </div>
    </div>
  )
}

type CategoryLibraryCardProps = {
  playlist: CategoryPlaylist
  className?: string
}
