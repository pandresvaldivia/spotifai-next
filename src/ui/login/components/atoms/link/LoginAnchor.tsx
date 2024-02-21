import { AnchorHTMLAttributes } from 'react'
import clsx from 'clsx'

const LoginAnchor = ({ text, className, ...rest }: LoginAnchorProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      className={clsx(className, 'text-white underline hover:text-green-200 text-xs md:text-sm')}
      {...rest}
    >
      {text}
    </a>
  )
}

type LoginAnchorProps = {
  text: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export default LoginAnchor
