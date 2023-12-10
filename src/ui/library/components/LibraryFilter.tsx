'use client'

import { ChangeEvent, useRef, useState } from 'react'
import { CrossIcon, SearchIcon } from '@icons/outline'
import { filterLibraryByName } from '@modules/library/application/filter/filter-by-name.app'
import { useLibraryContext } from '@modules/library/infrastructure/contexts/Library.context'
import { createLibraryPorts } from '@modules/library/infrastructure/library.infrastructure'
import classNames from 'classnames'
import { useOnClickOutside } from 'usehooks-ts'

const LibraryFilter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { setLibraryItems, originalLibraryItems } = useLibraryContext()
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useOnClickOutside(formRef, hanndleOnclickOutside)

  const libraryPorts = createLibraryPorts()

  function filterLibrary(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    const filteredValues = filterLibraryByName({
      value: searchValue,
      ports: libraryPorts,
      items: originalLibraryItems,
    })

    setLibraryItems(() => filteredValues)
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setSearchValue(e.target.value)

    filterLibrary(e)
  }

  function handleOnClick() {
    setIsOpen(true)
    inputRef.current?.focus()
  }

  function hanndleOnclickOutside() {
    if (searchValue) return

    setIsOpen(false)
  }

  function handleEmptyInput() {
    setSearchValue('')
    setLibraryItems(originalLibraryItems)
  }

  return (
    <form ref={formRef} className="relative w-max">
      <input
        type="text"
        role="search"
        ref={inputRef}
        onChange={handleOnChange}
        value={searchValue}
        className={classNames(
          {
            'w-8 opacity-0': !isOpen,
            'w-52 px-8 opacity-100': isOpen,
          },
          'peer h-8 transition-all outline-none bg-gray-300 py-2 rounded text-gray-100 text-xs font-medium placeholder:text-gray-100'
        )}
        placeholder="Search in Your Library"
      />
      <button
        type="button"
        className={classNames(
          {
            'pointer-events-none text-gray-100': isOpen,
            'text-gray-200': !isOpen,
          },
          'absolute flex items-center justify-center hover:text-white p-2 rounded-full left-0 top-0 hover:bg-gray-300 transition-colors outline-none'
        )}
        onClick={handleOnClick}
      >
        <SearchIcon height="16" width="16" />
      </button>{' '}
      <button
        type="button"
        className="absolute right-0 top-0 flex items-center justify-center text-gray-100 p-2 peer-placeholder-shown:hidden"
        onClick={handleEmptyInput}
      >
        <CrossIcon height="16" width="16" />
      </button>
    </form>
  )
}

export default LibraryFilter
