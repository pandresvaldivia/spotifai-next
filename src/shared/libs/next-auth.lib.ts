import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export const getAccessToken = async (): Promise<string | null> => {
  const session = await getServerSession(authOptions)

  if (session) {
    const accessToken = session.accessToken as string

    return accessToken
  }

  return null
}
