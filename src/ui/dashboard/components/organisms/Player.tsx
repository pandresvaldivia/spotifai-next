import classNames from 'classnames'

const Player = ({ className }: PlayerProps) => {
  return <div className={classNames(className)}>Player</div>
}

type PlayerProps = {
  className?: string
}

export default Player
