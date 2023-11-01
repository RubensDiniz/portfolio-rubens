import { createContext, useContext } from 'react'

export type ThemeContextProps = {
  usingDarkTheme: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  usingDarkTheme: false,
  toggleTheme: () => undefined
})

export const useThemeContext = () => useContext(ThemeContext)
