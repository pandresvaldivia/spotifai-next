import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '@constants/spotify'
import { SpotifyApi } from '@spotify/web-api-ts-sdk'

export const spotifyApi = SpotifyApi.withClientCredentials(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET)
