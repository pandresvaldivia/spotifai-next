import clsx from 'clsx'

import homeStyles from '@/ui/home/styles/home.module.scss'

const Home = () => {
  return (
    <>
      <div className={clsx(homeStyles.background, 'absolute w-full h-80')} />
      <main className="relative"></main>
    </>
  )
}

export default Home
