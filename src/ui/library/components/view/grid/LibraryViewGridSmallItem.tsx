import LibraryViewGridTooltip from '@ui/library/components/view/grid/LibraryViewGridTooltip'
import Tooltip from '@ui/shared/components/tooltips/Tooltip'
import Image from 'next/image'

import { LibraryItem } from '@/modules/library/domain/models/library.model'

const LibraryViewGridSmallItem = ({ item }: LibraryViewGridSmallItemProps) => {
  const { images, name } = item

  const image = images[0].url

  return (
    <li>
      <Tooltip
        className="p-1 cursor-pointer"
        tooltip={<LibraryViewGridTooltip item={item} />}
        side="right"
        sideOffset={8}
      >
        <div className="rounded-md overflow-hidden w-full aspect-square">
          <Image
            src={image}
            height="70"
            width="70"
            alt={`${name} cover`}
            className="w-full h-full"
          />
        </div>
      </Tooltip>
    </li>
  )
}

type LibraryViewGridSmallItemProps = {
  item: LibraryItem
}

export default LibraryViewGridSmallItem
