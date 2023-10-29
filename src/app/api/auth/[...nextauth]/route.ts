import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_JWT_SECRET,
  SPOTIFY_TOKEN_URL,
} from '@constants/spotify'
import { getAuthorizationUrl } from '@helpers/auth'
import NextAuth, { NextAuthOptions, TokenSet } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const refreshToken = async (token: any) => {
  try {
    // We need the `token_endpoint`.
    const response = await fetch(SPOTIFY_TOKEN_URL, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
        ).toString('base64')}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: token.refresh_token,
      }),
    })

    const tokens: TokenSet = await response.json()

    if (!response.ok) throw tokens

    return {
      ...token, // Keep the previous token properties
      access_token: tokens.access_token,
      expires_at: Math.floor(Date.now() / 1000 + Number(tokens.expires_in)),
      // Fall back to old refresh token, but note that
      // many providers may only allow using a refresh token once.
      refresh_token: tokens.refresh_token ?? token.refresh_token,
    }
  } catch (error) {
    console.error('Error refreshing access token', error)
    // The error property will be used client-side to handle the refresh token error
    return { ...token, error: 'RefreshAccessTokenError' as const }
  }
}

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: SPOTIFY_CLIENT_ID,
      clientSecret: SPOTIFY_CLIENT_SECRET,
      authorization: getAuthorizationUrl(),
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, account }: { token: any; account: any }) {
      if (account) {
        // Save the access token and refresh token in the JWT on the initial login
        return {
          access_token: account.access_token,
          expires_at: Math.floor(Date.now() / 1000 + account.expires_at),
          refresh_token: account.refresh_token,
          name: token.name,
          email: token.email,
          image: token.picture,
        }
      }

      if (Date.now() < token.expires_at * 1000) {
        // If the access token has not expired yet, return it
        return token
      }
      // If the access token has expired, try to refresh it
      return refreshToken(token)
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: { session: any; token: any }) {
      session.user.name = token.name
      session.user.image = token.image
      session.user.email = token.email

      return session
    },
  },
  secret: SPOTIFY_JWT_SECRET,
} satisfies NextAuthOptions

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
