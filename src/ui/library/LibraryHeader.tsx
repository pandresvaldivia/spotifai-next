'use client'

import React, { ChangeEvent, useState } from 'react'
import { useLibraryContext } from '@modules/library/infrastructure/contexts/Library.context'
import classNames from 'classnames'

import { SearchIcon } from '../shared/icons/outline'

const LibraryHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { setLibraryItems, allLibraryItems } = useLibraryContext()

  const filterLibrary = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const value = e.target.value.trim()

    setLibraryItems(() =>
      allLibraryItems.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase())
      })
    )
  }

  return (
    <div>
      <form className="relative">
        <input
          type="text"
          onChange={filterLibrary}
          className={classNames(
            {
              'w-8': !isOpen,
              'w-28': isOpen,
            },
            'h-8 transition-all focus-within:w-28 outline-none'
          )}
          placeholder="Search in Your Library"
        />
        <button
          type="button"
          className={classNames(
            {
              'pointer-events-none': isOpen,
            },
            'absolute flex items-center justify-center w-8 aspect-square rounded-full left-0 top-0'
          )}
          onClick={() => setIsOpen(true)}
        >
          <SearchIcon height="16" width="16" />
        </button>
      </form>
    </div>
  )
}

export default LibraryHeader
