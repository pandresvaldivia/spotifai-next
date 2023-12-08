import { MainMenuItem } from '@ui/dashboard/components/atoms'
import { PanelTemplate } from '@ui/dashboard/components/templates'
import {
  HomeIcon as HomeIconOutline,
  SearchIcon as SearchIconOutline,
} from '@ui/shared/icons/outline'
import { HomeIcon as HomeIconSolid, SearchIcon as SearchIconSolid } from '@ui/shared/icons/solid'

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
