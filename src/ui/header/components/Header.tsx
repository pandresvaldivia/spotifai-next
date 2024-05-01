import { HeaderMenu } from './menu/HeaderMenu'
import { HeaderNavigation } from './navigation/HeaderNavigation'

export const Header = () => {
  return (
    <header className="absolute top-0 w-full flex items-center justify-between py-4 px-6 z-1">
      <HeaderNavigation />
      <HeaderMenu />
    </header>
  )
}
