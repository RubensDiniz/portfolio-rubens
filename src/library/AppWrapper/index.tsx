'use client'
import EmotionRegistry from './EmotionRegistry'
import GlobalStyles from './GlobalStyles'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

const AppWrapper = ({ children }: { children: ReactNode }) => (
  <EmotionRegistry>
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </EmotionRegistry>
)

export default AppWrapper
