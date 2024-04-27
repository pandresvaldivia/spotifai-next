import React from 'react'

export const HeaderNavigationButton = ({
  onClick,
  ariaLabel,
  icon,
}: HeaderNavigationButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex items-center justify-center rounded-full h-8 aspect-square bg-black/70 text-white"
    >
      {icon}
    </button>
  )
}

type HeaderNavigationButtonProps = {
  onClick: () => void
  ariaLabel: string
  icon: JSX.Element
}
