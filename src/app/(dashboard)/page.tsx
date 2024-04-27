import { HomeBackgroundProvider } from '@/modules/home/infrastructure/contexts'
import { HomeBackground } from '@/ui/home/background/HomeBackground'
import { WelcomePlaylists } from '@/ui/home/welcome/Welcome'

const Home = () => {
  return (
    <HomeBackgroundProvider>
      <HomeBackground />
      <main className="relative px-6">
        <WelcomePlaylists />
      </main>
    </HomeBackgroundProvider>
  )
}

export default Home
