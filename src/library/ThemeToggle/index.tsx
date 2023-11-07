'use client'
import { IconFlipper, MoonIcon, SunIcon, ToggleButton } from './styles'
import { useTheme } from 'next-themes'
import moon from '$/public/moon.svg'
import sun from '$/public/sun.svg'
import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const [currentTheme, setCurrentTheme] = useState<string | undefined>(undefined)

  useEffect(() => {
    setCurrentTheme(theme)
  }, [theme])

  return (
    <ToggleButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <IconFlipper currentTheme={currentTheme}>
        <SunIcon src={sun} alt={'☀️'} />
        <MoonIcon src={moon} alt={'🌙'} />
      </IconFlipper>
    </ToggleButton>
  )
}
