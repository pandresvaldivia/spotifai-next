import { HomeIcon as HomeIconOutline, SearchIcon as SearchIconOutline } from '@icons/outline'
import { HomeIcon as HomeIconSolid, SearchIcon as SearchIconSolid } from '@icons/solid'

import { MainMenuItem } from '@/app/(dashboard)/components/atoms'
import { PanelTemplate } from '@/app/(dashboard)/components/templates'

const MainMenu = () => {
  return (
    <PanelTemplate className="py-2 px-3">
      <ul>
        <MainMenuItem
          href="/"
          text="Home"
          outlineIcon={<HomeIconOutline />}
          solidIcon={<HomeIconSolid />}
        />
        <MainMenuItem
          href="/search"
          text="Search"
          outlineIcon={<SearchIconOutline />}
          solidIcon={<SearchIconSolid />}
        />
      </ul>
    </PanelTemplate>
  )
}

export default MainMenu
