'use client'

import classNames from 'classnames'
import { signIn } from 'next-auth/react'

const LoginButton = ({ providerId, className }: LoginButtonProps) => {
  return (
    <button
      className={classNames(
        className,
        'text-black font-bold bg-green-100 py-2 px-8 rounded-3xl hover:scale-105 transition-transform text-sm md:text-base'
      )}
      onClick={() => signIn(providerId, { callbackUrl: '/' })}
    >
      Log in
    </button>
  )
}

type LoginButtonProps = {
  providerId: string
  className?: string
}

export default LoginButton
