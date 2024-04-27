'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { useHomeBackgroundContext } from '@/modules/home/infrastructure/contexts/HomeBackground.context'
import { LibraryItem } from '@/modules/library/domain/models/library.model'
import { COLORS } from '@/shared/infrastructure/data/color.data'
import welcomePlaylistStyles from '@/ui/home/styles/welcome-playlist.module.scss'
import PlayButton from '@/ui/shared/components/buttons/PlayButton'

export const WelcomePlaylist = ({ playlist, index }: WelcomePlaylistProps) => {
  const { setBackgroundColor } = useHomeBackgroundContext()

  const { images, name } = playlist
  const image = images[0].url

  function handleMouseEnter() {
    setBackgroundColor(COLORS[index])
  }

  return (
    <Link href="/">
      <article
        className={clsx(
          welcomePlaylistStyles.main,
          'group flex rounded overflow-hidden hover:bg-white/20 transition-colors'
        )}
        onMouseEnter={handleMouseEnter}
      >
        <div>
          <Image
            src={image}
            alt={name}
            width="64"
            height="64"
            className="h-16 aspect-square object-cover"
          />
        </div>
        <div className="flex items-center pl-4 grow">
          <h3 className="text-white text-sm font-bold grow">{name}</h3>
          <div className="px-2">
            <PlayButton
              className={clsx(
                'opacity-0 transition-all duration-300 hover:scale-110',
                'group-hover:opacity-100'
              )}
            />
          </div>
        </div>
      </article>
    </Link>
  )
}

type WelcomePlaylistProps = {
  playlist: LibraryItem
  index: number
}
