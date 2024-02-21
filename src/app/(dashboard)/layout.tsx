import { ReactNode } from 'react'
import { Content, Navbar, Player } from '@ui/dashboard/components/organisms'
import clsx from 'clsx'

import dashboardLayoutStyles from '@ui/dashboard/styles/dashboard-layout.module.scss'

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className={clsx(dashboardLayoutStyles.main, 'p-2 grid gap-2 h-screen')}>
      <Navbar className={clsx(dashboardLayoutStyles.navbar)} />
      <Player className={clsx(dashboardLayoutStyles.player)} />
      <Content className={clsx(dashboardLayoutStyles.content)}>{children}</Content>
    </div>
  )
}

export default DashboardLayout
