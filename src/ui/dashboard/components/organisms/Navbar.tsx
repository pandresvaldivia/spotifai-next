import { LibraryMenu, MainMenu } from '@ui/dashboard/components/molecules'
import classNames from 'classnames'

const Navbar = async ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(className, 'flex flex-col gap-2 min-h-0')}>
      <MainMenu />
      <LibraryMenu />
    </nav>
  )
}

type NavbarProps = {
  className?: string
}

export default Navbar
