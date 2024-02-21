'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { LibrarySortOption } from '@modules/library/domain/models/sort.model'
import { LibraryViewOption } from '@modules/library/domain/models/view.model'

const LibraryOptionsContext = createContext({} as LibraryOptionsContextProps)

const LibraryOptionsProvider = ({
  children,
  view,
  sortBy,
  gridDensity = 0.5,
}: LibraryOptionsProviderProps) => {
  const [libraryOptions, setLibraryOptions] = useState<LibraryOptionsStateProps>({
    sortBy,
    view,
    gridDensity,
  })

  const value = {
    libraryOptions,
    setLibraryOptions,
  }

  return <LibraryOptionsContext.Provider value={value}>{children}</LibraryOptionsContext.Provider>
}

type LibraryOptionsProviderProps = {
  children: ReactNode
  view: LibraryViewOption
  sortBy: LibrarySortOption
  gridDensity?: number
}

type LibraryOptionsContextProps = {
  libraryOptions: LibraryOptionsStateProps
  setLibraryOptions: Dispatch<SetStateAction<LibraryOptionsStateProps>>
}

type LibraryOptionsStateProps = {
  sortBy: LibrarySortOption
  view: LibraryViewOption
  gridDensity: number
}

export const useLibraryOptionsContext = () => useContext(LibraryOptionsContext)

export default LibraryOptionsProvider
