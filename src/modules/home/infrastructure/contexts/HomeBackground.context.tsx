'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

const HomeBackgroundContext = createContext({} as HomeBackgroundContextProps)

export const HomeBackgroundProvider = ({ children }: HomeBackgroundProviderProps) => {
  const [backgroundColor, setBackgroundColor] = useState<string>('83 83 83')

  return (
    <HomeBackgroundContext.Provider
      value={{
        backgroundColor,
        setBackgroundColor,
      }}
    >
      {children}
    </HomeBackgroundContext.Provider>
  )
}

type HomeBackgroundProviderProps = {
  children: ReactNode
}

type HomeBackgroundContextProps = {
  backgroundColor: string
  setBackgroundColor: Dispatch<SetStateAction<string>>
}

export const useHomeBackgroundContext = () => useContext(HomeBackgroundContext)
