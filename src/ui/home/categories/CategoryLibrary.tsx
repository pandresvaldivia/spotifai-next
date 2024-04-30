import { Category } from '@modules/home/models/category.model'
import Link from 'next/link'

export const CategoryLibrary = ({ category }: CategoryLibraryProps) => {
  const { id, name } = category

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
    </section>
  )
}

type CategoryLibraryProps = {
  category: Category
}
