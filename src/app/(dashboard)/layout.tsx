import { ReactNode } from 'react'
import classNames from 'classnames'

import { Navbar, Player } from '@/app/(dashboard)/components/organisms'
import dashboardLayoutStyles from '@/app/(dashboard)/styles/dashboard-layout.module.scss'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classNames(dashboardLayoutStyles.main, 'p-2 grid gap-2 h-screen')}>
      <Navbar className={classNames(dashboardLayoutStyles.navbar)} />
      <Player className={classNames(dashboardLayoutStyles.player)} />
      <div className={classNames(dashboardLayoutStyles.content)}>{children}</div>
    </div>
  )
}

export default DashboardLayout
