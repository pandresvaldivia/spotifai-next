import clsx from 'clsx'
import Image from 'next/image'

import playlistBannerPosterStyles from '@/ui/playlist/styles/playlist-banner-poster.module.scss'

export const PlaylistBannerPoster = () => {
  return (
    <div
      className={clsx(
        playlistBannerPosterStyles.main,
        'rounded overflow-hidden aspect-square shrink-0'
      )}
    >
      <Image
        src="https://i.scdn.co/image/ab67706f0000000234ce74c01990d55bad436fed"
        alt="Playlist Banner"
        width="232"
        height="232"
        className="w-full h-full"
      />
    </div>
  )
}
