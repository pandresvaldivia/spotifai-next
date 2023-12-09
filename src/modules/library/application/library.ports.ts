import { Library } from '@modules/library/domain/models/library.model'

export interface LibraryService {
  get: () => Promise<Library | null>
}
