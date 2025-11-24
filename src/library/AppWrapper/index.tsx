'use client'
import GlobalStyles from './GlobalStyles'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

const AppWrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default AppWrapper
