export const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID ?? ''

export const SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET ?? ''

export const SPOTIFY_JWT_SECRET = process.env.NEXTAUTH_SECRET ?? ''

export const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token'

export const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize'

export const SCOPES = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-read-currently-playing',
  'user-read-playback-state',
  'playlist-read-private',
]
