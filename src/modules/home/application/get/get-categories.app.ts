import { HomePorts } from '@modules/home/application/home.ports'

export async function getCategories(adapter: HomePorts) {
  const library = await adapter.getCategories()

  return library
}
