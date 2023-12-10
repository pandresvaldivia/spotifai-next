'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { LibrarySortOption } from '@modules/library/domain/models/sort.model'
import { LibraryViewOption } from '@modules/library/domain/models/view.model'
import { LIBRARY_VIEW_OPTIONS } from '@modules/library/infrastructure/data/library-view.data'

import { LIBRARY_SORT_OPTIONS } from '../data/library-sort.data'

const LibraryOptionsContext = createContext({} as LibraryOptionsContextProps)

const LibraryOptionsProvider = ({ children }: LibraryOptionsProviderProps) => {
  const [libraryOptions, setLibraryOptions] = useState<LibraryOptionsStateProps>({
    sortBy: LIBRARY_SORT_OPTIONS[0],
    view: LIBRARY_VIEW_OPTIONS[0],
  })

  const value = {
    libraryOptions,
    setLibraryOptions,
  }

  return <LibraryOptionsContext.Provider value={value}>{children}</LibraryOptionsContext.Provider>
}

type LibraryOptionsProviderProps = {
  children: ReactNode
}

type LibraryOptionsContextProps = {
  libraryOptions: LibraryOptionsStateProps
  setLibraryOptions: Dispatch<SetStateAction<LibraryOptionsStateProps>>
}

type LibraryOptionsStateProps = {
  sortBy: LibrarySortOption
  view: LibraryViewOption
}

export const useLibraryOptionsContext = () => useContext(LibraryOptionsContext)

export default LibraryOptionsProvider
