export const getLibraryColumnsCount = (range: number, limit = 6) => {
  const columsCount = Math.round(2 / range)

  return columsCount > limit ? limit : columsCount
}
