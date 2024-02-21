'use client'

import { ChangeEvent, useRef, useState } from 'react'
import { CrossIcon, SearchIcon } from '@icons/outline'
import { useLibraryContext } from '@modules/library/infrastructure/contexts/Library.context'
import clsx from 'clsx'
import { useOnClickOutside } from 'usehooks-ts'

const LibraryFilter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { setFilterQuery, filterQuery } = useLibraryContext()
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(formRef, hanndleOnclickOutside)

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setFilterQuery(e.target.value)
  }

  function handleOnClick() {
    setIsOpen(true)
    inputRef.current?.focus()
  }

  function hanndleOnclickOutside() {
    if (filterQuery) return

    setIsOpen(false)
  }

  function handleEmptyInput() {
    setFilterQuery('')
  }

  return (
    <div ref={formRef} className="relative w-max">
      <input
        type="text"
        role="search"
        ref={inputRef}
        onChange={handleOnChange}
        value={filterQuery}
        className={clsx(
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
        className={clsx(
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
    </div>
  )
}

export default LibraryFilter
