import { MainMenu } from '@ui/dashboard/components/molecules'
import LibraryPanel from '@ui/library/components/LibraryPanel'
import classNames from 'classnames'

const Navbar = async ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(className, 'flex flex-col gap-2 min-h-0')}>
      <MainMenu />
      <LibraryPanel />
    </nav>
  )
}

type NavbarProps = {
  className?: string
}

export default Navbar
