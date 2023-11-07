'use client'
import { IconFlipper, MoonIcon, SunIcon, ToggleButton } from './styles'
import { useThemeContext } from '@/library/ThemeContext'
import moon from '$/public/moon.svg'
import sun from '$/public/sun.svg'

export const ThemeToggle = () => {
  const { userTheme, toggleTheme } = useThemeContext()

  return (
    <ToggleButton onClick={toggleTheme}>
      <IconFlipper isDark={userTheme ? userTheme === 'dark' : false}>
        <SunIcon src={sun} alt={'☀️'} />
        <MoonIcon src={moon} alt={'🌙'} />
      </IconFlipper>
    </ToggleButton>
  )
}
