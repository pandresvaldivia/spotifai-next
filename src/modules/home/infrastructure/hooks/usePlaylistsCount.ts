import { useWindowSize } from 'usehooks-ts'

export const usePlaylistsCount = () => {
  const { width = 0 } = useWindowSize({
    initializeWithValue: false,
  })

  if (width === 0) {
    return {
      itemsCount: 7,
    }
  }

  return {
    itemsCount: Math.floor(width / 250),
  }
}
