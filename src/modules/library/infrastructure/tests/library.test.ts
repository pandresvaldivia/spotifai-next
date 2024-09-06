import { describe, expect, it } from 'vitest'

import { SORT_BY_PROPERTY } from '../../domain/models/sort.model'
import { createLibraryPorts } from '../library.infrastructure'
import { LIBRARY_ITEMS_MOCK } from '../mocks/library.mock'

describe('library', () => {
  const libraryPorts = createLibraryPorts()

  it('filters the playlists and returns none', () => {
    const filteredPlaylists = libraryPorts.filterByName('dummy playlist', LIBRARY_ITEMS_MOCK)

    expect(filteredPlaylists).toEqual([])
  })

  it('filters the playlits and returns two of them', () => {
    const expectedPlaylists = LIBRARY_ITEMS_MOCK.slice(0, 2)
    const filteredPlaylists = libraryPorts.filterByName('lets', LIBRARY_ITEMS_MOCK)

    expect(filteredPlaylists).toHaveLength(2)
    expect(filteredPlaylists).toEqual(expectedPlaylists)
  })

  it('does not filter the playlists', () => {
    const filteredPlaylists = libraryPorts.filterByName('   ', LIBRARY_ITEMS_MOCK)

    expect(filteredPlaylists).toEqual(LIBRARY_ITEMS_MOCK)
  })

  it('sorts playlists in ascending order', () => {
    const sortedPlaylists = libraryPorts.sortByProperty(
      LIBRARY_ITEMS_MOCK,
      SORT_BY_PROPERTY.RECENTLY_ADDED
    )

    expect(sortedPlaylists).toEqual([
      expect.objectContaining({ order: 0 }),
      expect.objectContaining({ order: 1 }),
      expect.objectContaining({ order: 2 }),
    ])
  })

  it('sorts playlists in alphabetical order', () => {
    const sortedPlaylists = libraryPorts.sortByProperty(
      LIBRARY_ITEMS_MOCK,
      SORT_BY_PROPERTY.ALPHABETICAL
    )

    expect(sortedPlaylists).toEqual([
      expect.objectContaining({ name: expect.stringContaining('2. lets dance') }),
      expect.objectContaining({ name: expect.stringContaining('B. disco') }),
      expect.objectContaining({ name: expect.stringContaining('a. lets go party') }),
    ])
  })

  it('sorts playlists based on the owner name', () => {
    const sortedPlaylists = libraryPorts.sortByProperty(
      LIBRARY_ITEMS_MOCK,
      SORT_BY_PROPERTY.CREATOR
    )

    expect(sortedPlaylists).toEqual([
      expect.objectContaining({ owner: expect.stringContaining('2pac') }),
      expect.objectContaining({ owner: expect.stringContaining('P. Sherman') }),
      expect.objectContaining({ owner: expect.stringContaining('pandres') }),
    ])
  })
})
