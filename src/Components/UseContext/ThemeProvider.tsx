import React from 'react'
import { theme } from './theme'
import { childrenProp } from '../Component.types'

export const themeObj=React.createContext(theme)

function ThemeProvider({children}:childrenProp) {
  return (
    <themeObj.Provider value={theme}>{children}</themeObj.Provider>
  )
}

export default ThemeProvider