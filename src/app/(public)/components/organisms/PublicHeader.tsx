import { LogoIcon } from '@icons/solid'
import Link from 'next/link'

const PublicHeader = () => {
  return (
    <header className="py-8 px-12">
      <Link href="/login">
        <LogoIcon aria-hidden height="36" width="120" className="h-9 w-auto" />
      </Link>
    </header>
  )
}

export default PublicHeader
