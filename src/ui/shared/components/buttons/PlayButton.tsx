import { PlayIcon } from '@icons/solid'
import clsx from 'clsx'

import playButtonStyles from '@ui/shared/styles/components/buttons/play-button.module.scss'

const PlayButton = ({ className }: PlayButtonProps) => {
  return (
    <button
      className={clsx(
        playButtonStyles.main,
        className,
        'inline-flex items-center justify-center h-12 w-12 bg-green-100 rounded-full'
      )}
      aria-label="Play playlist"
    >
      <PlayIcon className="h-1/2" aria-hidden />
    </button>
  )
}

type PlayButtonProps = {
  className?: string
}

export default PlayButton
