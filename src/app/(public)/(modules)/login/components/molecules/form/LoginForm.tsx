import classNames from 'classnames'
import { getProviders } from 'next-auth/react'

import { LoginAnchor, LoginButton } from '@/app/(public)/(modules)/login/components/atoms'
import loginFormStyles from '@/app/(public)/(modules)/login/styles/login-form.module.scss'

const LoginForm = async () => {
  const providers = await getProviders()

  if (!providers || !providers.spotify) return <span>Login error</span>

  const { id } = providers.spotify

  return (
    <div
      className={classNames(
        loginFormStyles.main,
        'text-center bg-black rounded-lg py-8 px-4 md:px-8 mx-auto w-full'
      )}
    >
      <h1 className={classNames(loginFormStyles.title, 'text-2xl text-white font-bold mb-12')}>
        Log in to Spotifai
      </h1>
      <div className={classNames(loginFormStyles.wrapper, 'flex flex-col mx-auto')}>
        <LoginButton providerId={id} className="mb-8" />
        <LoginAnchor
          text="Forgot your password?"
          href="https://accounts.spotify.com/en/password-reset"
        />
      </div>
      <hr className="my-8 max-w-md mx-auto block" />
      <p className="text-xs md:text-sm text-gray-100">
        Don't have an account?{' '}
        <LoginAnchor text="Sign up for Spotify" href="https://accounts.spotify.com/en/login" />
      </p>
    </div>
  )
}

export default LoginForm
