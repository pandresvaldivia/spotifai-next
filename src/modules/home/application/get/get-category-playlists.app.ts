import { HomePorts } from '@modules/home/application/home.ports'

export async function getCategoryPlaylists({ adapter, id }: GetCategoriesProps) {
  const library = await adapter.getCategoryPlaylists(id)

  return library
}

type GetCategoriesProps = {
  adapter: HomePorts
  id: string
}
