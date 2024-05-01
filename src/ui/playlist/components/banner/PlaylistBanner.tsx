import clsx from 'clsx'

import playlistBannerStyles from '@/ui/playlist/styles/playlist-banner.module.scss'

import { PlaylistBannerBackground } from './PlaylistBannerBackground'
import { PlaylistBannerDetails } from './PlaylistBannerDetails'
import { PlaylistBannerPoster } from './PlaylistBannerPoster'

export const PlaylistBanner = () => {
  return (
    <section className={clsx(playlistBannerStyles.main, 'relative flex items-end pb-4')}>
      <PlaylistBannerBackground />
      <div className="relative flex items-end gap-6 px-6">
        <PlaylistBannerPoster />
        <PlaylistBannerDetails />
      </div>
    </section>
  )
}
