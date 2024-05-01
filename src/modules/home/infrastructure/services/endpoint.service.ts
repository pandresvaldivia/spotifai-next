export const CATEGORY_ENDPOINT = {
  ALL: '/v1/browse/categories',
  PLAYLISTS: (categoryId: string) => `/v1/browse/categories/${categoryId}/playlists`,
}
