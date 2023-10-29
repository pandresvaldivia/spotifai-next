import { ReactNode } from 'react'

const SocialMediaMenuItem = ({ href, icon }: SocialMediaMenuItemProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-gray-300 hover:bg-gray-100/50 text-white h-10 w-10 rounded-full transition-colors"
    >
      {icon}
    </a>
  )
}

type SocialMediaMenuItemProps = {
  icon: ReactNode
  href: string
}

export default SocialMediaMenuItem
