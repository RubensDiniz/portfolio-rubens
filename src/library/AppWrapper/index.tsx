'use client'
import GlobalStyles from '@/library/AppWrapper/GlobalStyles'
import { darkTheme, lightTheme } from '@/library/Theme'
import { ThemeContext } from '@/library/ThemeContext'
import { ThemeProvider } from '@emotion/react'
import { ReactNode, useState } from 'react'

const AppWrapper = ({ children }: { children: ReactNode }) => {
  const [userTheme, setUserTheme] = useState('dark')

  const themes = {
    'light': lightTheme,
    'dark': darkTheme
  }

  const toggleTheme = () => {
    setUserTheme((prevState) => {
      const keys = Object.keys(themes)
      const nextIndex = keys.indexOf(prevState) + 1 >= keys.length ? 0 : keys.indexOf(prevState) + 1
      localStorage.setItem('@rd.dev-theme', keys[nextIndex])
      return keys[nextIndex]
    })
  }

  return (
    <ThemeContext.Provider value={{ userTheme, toggleTheme }}>
      <ThemeProvider theme={themes[userTheme as keyof typeof themes]}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default AppWrapper
