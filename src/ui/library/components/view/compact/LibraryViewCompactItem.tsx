import { LibraryItem } from '@/modules/library/domain/models/library.model'

const LibraryViewCompactItem = ({ item }: LibraryViewCompactItemProps) => {
  const { name, type } = item

  return (
    <li className="flex items-center gap-1 text-gray-200 px-2 py-1 cursor-pointer rounded-md hover:bg-gray-600 transition-colors">
      <p className="text-white font-semibold text-sm leading-normal">{name}</p>
      <p>•</p>
      <p className="capitalize font-medium text-xs">{type}</p>
    </li>
  )
}

type LibraryViewCompactItemProps = {
  item: LibraryItem
}

export default LibraryViewCompactItem
