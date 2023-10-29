import { SCOPES, SPOTIFY_AUTH_URL } from '@constants/spotify'

export const getAuthorizationUrl = () => {
  const scope = SCOPES.join(',')
  const params = { scope }

  const query = new URLSearchParams(params).toString()

  return `${SPOTIFY_AUTH_URL}?${query}`
}
