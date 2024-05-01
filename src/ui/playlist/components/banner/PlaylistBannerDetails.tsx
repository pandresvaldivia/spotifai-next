import Image from 'next/image'

export const PlaylistBannerDetails = () => {
  return (
    <div className="text-white">
      <p className="text-xs font-semibold mb-1 text-white/70">Playlist</p>
      <h1 className="font-extrabold text-3xl lg:text-6xl 2xl:text-8xl mb-4 line-clamp-2 !leading-tight">
        Daily Mix 3
      </h1>
      <div className="flex items-center gap-1">
        <div className="h-6 w-6 rounded-full overflow-hidden">
          <Image
            src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"
            height="24"
            width="24"
            alt="Spotify"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-xs text-white">
          <span className="font-bold">Pitbull, Akon, Avicii and more</span>
          <span className="font-semibold">
            <span className="text-normal font-extrabold mx-1" aria-hidden>
              •
            </span>
            13 songs, 29 min 42 sec
          </span>
        </p>
      </div>
    </div>
  )
}
