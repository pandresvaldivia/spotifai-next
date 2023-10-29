import { ReactNode } from 'react'

import { Navbar } from '@/app/(dashboard)/components/organisms'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-2">
      <Navbar />
      {children}
    </div>
  )
}

export default DashboardLayout
