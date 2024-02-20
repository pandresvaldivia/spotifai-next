'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'
import { LibraryItem } from '@modules/library/domain/models/library.model'

import { filterLibraryByName } from '../../application/filter/filter-by-name.app'
import { sortLibrayByProperty } from '../../application/sort/sort-by-property.app'
import { createLibraryPorts } from '../library.infrastructure'

const LibraryContext = createContext({} as LibraryContextProps)

const LibraryProvider = ({ children, items, sortBy }: PlaylistProviderProps) => {
  const [filterQuery, setFilterQuery] = useState('')
  const [sortValue, setSortValue] = useState<keyof LibraryItem>(sortBy)

  const libraryPorts = createLibraryPorts()

  const filteredItems = useMemo(() => {
    return filterLibraryByName({
      items,
      value: filterQuery,
      ports: libraryPorts,
    })
  }, [filterQuery, items, libraryPorts])

  const libraryItems = useMemo(() => {
    return sortLibrayByProperty({
      ports: libraryPorts,
      items: filteredItems,
      property: sortValue,
    })
  }, [filteredItems, sortValue, libraryPorts])

  const value = {
    libraryItems,
    setFilterQuery,
    filterQuery,
    setSortValue,
  }

  return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
}

type PlaylistProviderProps = {
  children: ReactNode
  items: LibraryItem[]
  sortBy: keyof LibraryItem
}

type LibraryContextProps = {
  libraryItems: LibraryItem[]
  setFilterQuery: Dispatch<SetStateAction<string>>
  filterQuery: string
  setSortValue: Dispatch<SetStateAction<keyof LibraryItem>>
}

export const useLibraryContext = () => useContext(LibraryContext)

export default LibraryProvider
