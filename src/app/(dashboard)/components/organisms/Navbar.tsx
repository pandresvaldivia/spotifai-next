import classNames from 'classnames'

import { MainMenu } from '@/app/(dashboard)/components/molecules'

const Navbar = async ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(className)}>
      <MainMenu />
    </nav>
  )
}

type NavbarProps = {
  className?: string
}

export default Navbar
