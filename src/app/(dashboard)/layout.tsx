import { ReactNode } from 'react'
import { Content, Navbar, Player } from '@ui/dashboard/components/organisms'
import classNames from 'classnames'

import dashboardLayoutStyles from '@ui/dashboard/styles/dashboard-layout.module.scss'

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className={classNames(dashboardLayoutStyles.main, 'p-2 grid gap-2 h-screen')}>
      <Navbar className={classNames(dashboardLayoutStyles.navbar)} />
      <Player className={classNames(dashboardLayoutStyles.player)} />
      <Content className={classNames(dashboardLayoutStyles.content)}>{children}</Content>
    </div>
  )
}

export default DashboardLayout
