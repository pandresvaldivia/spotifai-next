import { LibraryService } from '@modules/library/application/library.ports'
import { Library } from '@modules/library/domain/models/library.model'

export const getLibrary = async (service: LibraryService): Promise<Library | null> => {
  const library = await service.get()

  return library
}
