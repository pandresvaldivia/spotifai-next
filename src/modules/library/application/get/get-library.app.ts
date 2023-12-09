import { LibraryPorts } from '@modules/library/application/library.ports'
import { Library } from '@modules/library/domain/models/library.model'

export const getLibrary = async (adapter: LibraryPorts): Promise<Library | null> => {
  const library = await adapter.get()

  return library
}
