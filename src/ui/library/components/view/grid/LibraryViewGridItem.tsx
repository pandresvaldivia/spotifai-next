import Image from 'next/image'

import { LibraryItem } from '@/modules/library/domain/models/library.model'
import PlayButton from '@/ui/shared/components/buttons/PlayButton'

const LibraryViewGridItem = ({ item }: LibraryViewGridItemProps) => {
  const { images, name, type, owner } = item

  const image = images[0].url

  return (
    <li className="group p-3 hover:bg-gray-600 transition-colors cursor-pointer rounded-md">
      <div className="relative rounded-md overflow-hidden w-full aspect-square mb-2">
        <Image
          src={image}
          height="178"
          width="178"
          alt={`${name} cover`}
          className="w-full h-full"
        />
        <PlayButton className="absolute bottom-2 right-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110" />
      </div>
      <div className="font-medium">
        <p className="text-white text-sm truncate mb-0.5">{name}</p>
        <p className="text-gray-200 text-xs truncate">
          <span className="capitalize">{type}</span> • {owner}
        </p>
      </div>
    </li>
  )
}

type LibraryViewGridItemProps = {
  item: LibraryItem
}

export default LibraryViewGridItem
