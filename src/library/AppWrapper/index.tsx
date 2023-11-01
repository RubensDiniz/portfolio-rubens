'use client'
import GlobalStyles from '@/library/AppWrapper/GlobalStyles'
import { darkTheme, lightTheme } from '@/library/Theme'
import { ThemeContext } from '@/library/ThemeContext'
import { ThemeProvider } from '@emotion/react'
import { ReactNode, useState } from 'react'

const AppWrapper = ({ children }: { children: ReactNode }) => {
  const prefersDark = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false

  const [usingDarkTheme, setUsingDarkTheme] = useState(localStorage.getItem('@rd.dev-darktheme') === 'true' ?? prefersDark)

  const toggleTheme = () => {
    setUsingDarkTheme((prevState) => {
      localStorage.setItem('@rd.dev-darktheme', (!prevState).toString())
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ usingDarkTheme, toggleTheme }}>
      <ThemeProvider theme={usingDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default AppWrapper
