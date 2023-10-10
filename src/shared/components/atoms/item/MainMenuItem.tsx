'use client'

import { ReactElement } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MainMenuItem = ({
  href,
  text,
  outlineIcon: OutlineIcon,
  solidIcon: SolidIcon,
}: MainMenuItemProps) => {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <li
      className={classNames(
        { 'text-white': isActive, 'text-gray-100 hover:text-white transition-colors': !isActive },
        'p-3 font-bold text-sm'
      )}
    >
      <Link href={href} className="flex items-center gap-5">
        {isActive && SolidIcon}
        {!isActive && OutlineIcon}
        <span>{text}</span>
      </Link>
    </li>
  )
}

type MainMenuItemProps = {
  href: string
  text: string
  outlineIcon: ReactElement
  solidIcon: ReactElement
}

export default MainMenuItem
