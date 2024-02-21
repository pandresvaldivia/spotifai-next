import clsx from 'clsx'

const Player = ({ className }: PlayerProps) => {
  return <div className={clsx(className)}>Player</div>
}

type PlayerProps = {
  className?: string
}

export default Player
