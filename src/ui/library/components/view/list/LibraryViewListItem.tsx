import { LibraryItem } from '@modules/library/domain/models/library.model'
import Image from 'next/image'

const LibraryViewListItem = ({ item }: LibraryViewListItemProps) => {
  const { images, name, type, owner } = item

  const image = images[0].url

  return (
    <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-600 transition-colors cursor-pointer">
      <div className="rounded overflow-hidden w-12 aspect-square">
        <Image src={image} height="48" width="48" alt={`${name} cover`} className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-0.5 font-medium">
        <p className="text-white text-sm">{name}</p>
        <p className="text-gray-200 text-xs">
          <span className="capitalize">{type}</span> • {owner}
        </p>
      </div>
    </li>
  )
}

type LibraryViewListItemProps = {
  item: LibraryItem
}

export default LibraryViewListItem
