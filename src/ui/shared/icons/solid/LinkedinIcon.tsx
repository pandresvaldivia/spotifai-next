import { IconProps } from '@/shared/domain/models/icon'

const LinkedinIcon = ({ ...rest }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M4.75 1.875C4.18641 1.875 3.64591 2.09888 3.2474 2.4974C2.84888 2.89591 2.625 3.43641 2.625 4C2.625 4.56359 2.84888 5.10409 3.2474 5.5026C3.64591 5.90112 4.18641 6.125 4.75 6.125C5.31359 6.125 5.85409 5.90112 6.2526 5.5026C6.65112 5.10409 6.875 4.56359 6.875 4C6.875 3.43641 6.65112 2.89591 6.2526 2.4974C5.85409 2.09888 5.31359 1.875 4.75 1.875ZM2.75 7.875C2.71685 7.875 2.68505 7.88817 2.66161 7.91161C2.63817 7.93505 2.625 7.96685 2.625 8V21C2.625 21.069 2.681 21.125 2.75 21.125H6.75C6.78315 21.125 6.81495 21.1118 6.83839 21.0884C6.86183 21.0649 6.875 21.0332 6.875 21V8C6.875 7.96685 6.86183 7.93505 6.83839 7.91161C6.81495 7.88817 6.78315 7.875 6.75 7.875H2.75ZM9.25 7.875C9.21685 7.875 9.18505 7.88817 9.16161 7.91161C9.13817 7.93505 9.125 7.96685 9.125 8V21C9.125 21.069 9.181 21.125 9.25 21.125H13.25C13.2832 21.125 13.3149 21.1118 13.3384 21.0884C13.3618 21.0649 13.375 21.0332 13.375 21V14C13.375 13.5027 13.5725 13.0258 13.9242 12.6742C14.2758 12.3225 14.7527 12.125 15.25 12.125C15.7473 12.125 16.2242 12.3225 16.5758 12.6742C16.9275 13.0258 17.125 13.5027 17.125 14V21C17.125 21.069 17.181 21.125 17.25 21.125H21.25C21.2832 21.125 21.3149 21.1118 21.3384 21.0884C21.3618 21.0649 21.375 21.0332 21.375 21V12.38C21.375 9.953 19.265 8.055 16.85 8.274C16.1028 8.34202 15.3709 8.52694 14.681 8.822L13.375 9.382V8C13.375 7.96685 13.3618 7.93505 13.3384 7.91161C13.3149 7.88817 13.2832 7.875 13.25 7.875H9.25Z" />
    </svg>
  )
}

export default LinkedinIcon
