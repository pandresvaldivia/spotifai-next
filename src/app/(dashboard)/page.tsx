import { HomeBackgroundProvider } from '@/modules/home/infrastructure/contexts'
import { HomeBackground } from '@/ui/home/components/background/HomeBackground'
import { Categories } from '@/ui/home/components/categories/Categories'
import { WelcomePlaylists } from '@/ui/home/components/welcome/Welcome'

const Home = () => {
  return (
    <HomeBackgroundProvider>
      <HomeBackground />
      <main className="relative px-6">
        <WelcomePlaylists />
        <Categories />
      </main>
    </HomeBackgroundProvider>
  )
}

export default Home
