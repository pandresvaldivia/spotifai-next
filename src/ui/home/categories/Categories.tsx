import { getCategories } from '@modules/home/application/get/get-categories.app'
import { createHomePorts } from '@modules/home/infrastructure/home.infrastructure'

import { CategoryLibrary } from './CategoryLibrary'

export const Categories = async () => {
  const homePorts = createHomePorts()

  const categories = await getCategories(homePorts)

  if (!categories || !categories.items) return null

  return (
    <section aria-label="Categories">
      {categories.items.map((category) => (
        <CategoryLibrary key={category.id} category={category} />
      ))}
    </section>
  )
}
