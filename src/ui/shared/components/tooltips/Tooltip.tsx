import { ReactNode } from 'react'
import clsx from 'clsx'

import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/chadcn/components/tooltip'

const Tooltip = ({ children, tooltip, side, sideOffset, className }: TooltipProps) => {
  return (
    <TooltipProvider delayDuration={20} disableHoverableContent>
      <ShadcnTooltip>
        <TooltipTrigger className={clsx(className)} asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side} sideOffset={sideOffset}>
          {tooltip}
        </TooltipContent>
      </ShadcnTooltip>
    </TooltipProvider>
  )
}

type TooltipProps = {
  children: ReactNode
  tooltip: ReactNode
  side?: 'top' | 'right'
  sideOffset?: number
  className?: string
}

export default Tooltip
