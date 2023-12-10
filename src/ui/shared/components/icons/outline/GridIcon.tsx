import { IconProps } from '@/shared/domain/models/icon'

const GridIcon = ({ ...rest }: IconProps) => {
  return (
    <svg
      role="img"
      height="24"
      width="24"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
      {...rest}
    >
      <path d="M1 1h6v6H1V1zm1.5 1.5v3h3v-3h-3zM1 9h6v6H1V9zm1.5 1.5v3h3v-3h-3zM9 1h6v6H9V1zm1.5 1.5v3h3v-3h-3zM9 9h6v6H9V9zm1.5 1.5v3h3v-3h-3z" />
    </svg>
  )
}

export default GridIcon
