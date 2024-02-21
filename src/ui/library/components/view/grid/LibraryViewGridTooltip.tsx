import { LibraryItem } from '@/modules/library/domain/models/library.model'

const LibraryViewGridTooltip = ({ item }: LibraryViewGridTooltip) => {
  const { name, owner, type } = item

  return (
    <div className="font-medium">
      <p className="text-sm text-white/90 mb-1">{name}</p>
      <p className="text-xs text-gray-200">
        <span className="capitalize">{type}</span> • {owner}
      </p>
    </div>
  )
}

type LibraryViewGridTooltip = {
  item: LibraryItem
}

export default LibraryViewGridTooltip
