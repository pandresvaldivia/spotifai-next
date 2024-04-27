import { HeaderMenu } from './menu/HeaderMenu'
import { HeaderNavigation } from './navigation/HeaderNavigation'

export const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between py-4 px-6 z-1">
      <HeaderNavigation />
      <HeaderMenu />
    </header>
  )
}
