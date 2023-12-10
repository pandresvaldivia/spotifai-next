'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { LibraryItem } from '@modules/library/domain/models/library.model'

const LibraryContext = createContext({} as LibraryContextProps)

const LibraryProvider = ({ children, items }: PlaylistProviderProps) => {
  const [libraryItems, setLibraryItems] = useState<LibraryItem[]>(items)

  const value = {
    originalLibraryItems: items,
    libraryItems,
    setLibraryItems,
  }

  return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
}

type PlaylistProviderProps = {
  children: ReactNode
  items: LibraryItem[]
}

type LibraryContextProps = {
  originalLibraryItems: LibraryItem[]
  libraryItems: LibraryItem[]
  setLibraryItems: Dispatch<SetStateAction<LibraryItem[]>>
}

export const useLibraryContext = () => useContext(LibraryContext)

export default LibraryProvider
