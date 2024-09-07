import { CategoryPlaylist } from '@modules/home/domain/models/category-playlist.model'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'

import { CategoryLibraryCard } from '../../components/categories/CategoryLibraryCard'

const CATEGORY_PLAYLIST_MOCK: CategoryPlaylist = {
  id: '123',
  name: 'trapeando temas',
  description: 'a description for the category',
  poster: 'https://www.image.com/1',
  href: 'https://www.spotifai.com/',
}

beforeEach(() => {
  render(<CategoryLibraryCard playlist={CATEGORY_PLAYLIST_MOCK} />)
})

describe('Category Libray Card', () => {
  it('renders playlist information', () => {
    const title = screen.getByText(CATEGORY_PLAYLIST_MOCK.name)
    const description = screen.getByText(CATEGORY_PLAYLIST_MOCK.description)
    const poster = screen.getByRole('img', { name: CATEGORY_PLAYLIST_MOCK.name })
    const playButton = screen.getByRole('button', { name: 'play playlist' })

    expect(title).toBeDefined()
    expect(description).toBeDefined()
    expect(poster).toBeDefined()
    expect(playButton).toBeDefined()
  })

  it('redirects to the playlist page when clicked', async () => {
    const user = userEvent.setup()
    const { name, id } = CATEGORY_PLAYLIST_MOCK

    const linkName = `go to ${name} playlist page`
    const link = screen.getByRole('link', { name: linkName })

    await user.click(link)

    expect(window.location.pathname).toBe(`/playlist/${id}`)
  })
})
