import { IconProps } from '@/shared/domain/models/icon'

const CompactIcon = ({ ...rest }: IconProps) => {
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
      <path d="M15.5 13.5H.5V12h15v1.5zm0-4.75H.5v-1.5h15v1.5zm0-4.75H.5V2.5h15V4z" />
    </svg>
  )
}

export default CompactIcon
