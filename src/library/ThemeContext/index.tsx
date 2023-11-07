import { createContext, useContext } from 'react'

export type ThemeContextProps = {
  userTheme: string
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  userTheme: 'dark',
  toggleTheme: () => undefined
})

export const useThemeContext = () => useContext(ThemeContext)
