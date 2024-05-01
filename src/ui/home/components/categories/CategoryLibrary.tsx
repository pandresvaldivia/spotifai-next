import { getCategoryPlaylists } from '@modules/home/application/get/get-category-playlists.app'
import { Category } from '@modules/home/domain/models/category.model'
import { createHomePorts } from '@modules/home/infrastructure/home.infrastructure'
import Link from 'next/link'

import { CategoryLibraryList } from './CategoryLibraryList'

export const CategoryLibrary = async ({ category }: CategoryLibraryProps) => {
  const { id, name } = category

  const homePorts = createHomePorts()

  const playlists = await getCategoryPlaylists({ adapter: homePorts, id })

  if (!playlists || !playlists.items) return null

  return (
    <section aria-labelledby="category-name">
      <div className="flex items-center justify-between mb-2">
        <h2 id="category-name" className="text-xl font-bold text-white hover:underline">
          <Link href={`/section/${id}`}>{name}</Link>
        </h2>
        <Link href={`/section/${id}`} className="text-xs text-gray-200 font-bold hover:underline">
          Show all
        </Link>
      </div>
      <CategoryLibraryList playlists={playlists.items} />
    </section>
  )
}

type CategoryLibraryProps = {
  category: Category
}
