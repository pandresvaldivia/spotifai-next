'use client'

import { useRouter } from 'next/navigation'

import { NextIcon, PreviousIcon } from '@/ui/shared/components/icons/outline'

import { HeaderNavigationButton } from './HeaderNavigationButton'

export const HeaderNavigation = () => {
  const router = useRouter()

  function handleGoBack() {
    router.back()
  }

  function handleGoForward() {
    router.forward()
  }

  return (
    <div className="flex gap-2">
      <HeaderNavigationButton
        onClick={handleGoBack}
        icon={<PreviousIcon height="16" width="16" className="h-4 w-4" />}
        ariaLabel="Go back"
      />
      <HeaderNavigationButton
        onClick={handleGoForward}
        icon={<NextIcon height="16" width="16" className="h-4 w-4" />}
        ariaLabel="Go forward"
      />
    </div>
  )
}
