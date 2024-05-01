import Image from 'next/image'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/shared/libs/next-auth.lib'
import { DropdownMenuTrigger } from '@/ui/chadcn/components/dropdown-menu'

export const HeaderMenuButton = async () => {
  const { user } = await getServerSession(authOptions)

  const { image, name } = user

  return (
    <DropdownMenuTrigger className="p-1 rounded-full bg-black/50 outline-none">
      <Image
        src={image}
        alt={`${name} profile picture`}
        height="24"
        width="24"
        className="rounded-full h-6 w-6"
      />
    </DropdownMenuTrigger>
  )
}
