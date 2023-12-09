import { Library } from '../models/library.model'

export interface LibraryRepository {
  get: () => Promise<Library | null>
}
