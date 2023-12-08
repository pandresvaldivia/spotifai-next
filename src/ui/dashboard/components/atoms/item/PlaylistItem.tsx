import { CurrentUserPlaylistItem } from '@modules/dashboard/domain/models/me.model'
import Image from 'next/image'

const PlaylistItem = ({ item }: PlaylistItemProps) => {
  const { images, name, type, owner } = item
  const { display_name: ownerName } = owner

  const image = images[0].url

  return (
    <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-600 transition-colors cursor-pointer">
      <div className="rounded overflow-hidden w-12 aspect-square">
        <Image src={image} height="48" width="48" alt={`${name} cover`} className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-0.5 font-medium">
        <p className="text-white text-sm">{name}</p>
        <p className="text-gray-200 text-xs">
          <span className="capitalize">{type}</span> • {ownerName}
        </p>
      </div>
    </li>
  )
}

type PlaylistItemProps = {
  item: CurrentUserPlaylistItem
}

export default PlaylistItem
