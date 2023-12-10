import { getAccessToken } from '@libs/next-auth.lib'
import { ApiOptions } from '@models/http.model'

export const spotifyApi = async <ResponseType>({
  endpoint,
}: ApiOptions): Promise<ResponseType | null> => {
  const accessToken = await getAccessToken()

  try {
    const response = await fetch(`https://api.spotify.com${endpoint}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) return null

    const data: ResponseType = await response.json()

    return data
  } catch (error) {
    console.error(error)

    return null
  }
}
