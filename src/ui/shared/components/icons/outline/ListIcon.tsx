import { IconProps } from '@/shared/domain/models/icon'

const ListIcon = ({ ...rest }: IconProps) => {
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
      <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z" />
    </svg>
  )
}

export default ListIcon
