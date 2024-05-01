import clsx from 'clsx'

import playlistBannerBackgroundStyles from '@/ui/playlist/styles/playlist-banner-background.module.scss'

export const PlaylistBannerBackground = () => {
  return (
    <div
      className={clsx(playlistBannerBackgroundStyles.main, 'absolute w-full h-full left-0 top-0')}
    />
  )
}
