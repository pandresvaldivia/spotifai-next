'use client'

import { CSSProperties } from 'react'
import clsx from 'clsx'

import { useHomeBackgroundContext } from '@/modules/home/infrastructure/contexts/HomeBackground.context'
import homeBackgroundStyles from '@/ui/home/styles/home-background.module.scss'

export const HomeBackground = () => {
  const { backgroundColor } = useHomeBackgroundContext()

  return (
    <div
      style={{ '--background-color': backgroundColor } as CSSProperties}
      className={clsx(
        homeBackgroundStyles.main,
        'absolute w-full h-80 transition-colors duration-700'
      )}
    />
  )
}
