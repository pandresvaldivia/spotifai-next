import LoginView from '@ui/login/components/LoginView'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const LoginPage = async () => {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  return <LoginView />
}

export default LoginPage
