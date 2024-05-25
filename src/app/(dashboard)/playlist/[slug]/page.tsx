import { PlaylistBanner } from '@/ui/playlist/components/banner/PlaylistBanner'

const Playlist = ({ params }: PlaylistParams) => {
  const { slug } = params

  return (
    <main>
      <PlaylistBanner />
    </main>
  )
}

type PlaylistParams = {
  params: {
    slug: string
  }
}

export default Playlist
