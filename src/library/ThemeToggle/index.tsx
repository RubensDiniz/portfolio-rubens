'use client'
import { IconFlipper, MoonIcon, SunIcon, ToggleButton } from './styles'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import moon from '$/public/moon.svg'
import sun from '$/public/sun.svg'

export const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme()

  const [currentTheme, setCurrentTheme] = useState<string | undefined>(undefined)

  useEffect(() => {
    setCurrentTheme(theme !== 'system' ? theme : systemTheme)
  }, [theme, systemTheme])

  return (
    <ToggleButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <IconFlipper currentTheme={currentTheme}>
        <SunIcon src={sun} alt={'☀️'} />
        <MoonIcon src={moon} alt={'🌙'} />
      </IconFlipper>
    </ToggleButton>
  )
}
