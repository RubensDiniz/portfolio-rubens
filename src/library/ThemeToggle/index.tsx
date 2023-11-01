import { IconFlipper, MoonIcon, SunIcon, ToggleButton } from './styles'
import { useThemeContext } from '@/library/ThemeContext'
import moon from '$/public/moon.svg'
import sun from '$/public/sun.svg'

export const ThemeToggle = () => {
  const { usingDarkTheme, toggleTheme } = useThemeContext()

  return (
    <ToggleButton onClick={toggleTheme}>
      <IconFlipper side={usingDarkTheme}>
        <SunIcon src={sun} alt={'☀️'} />
        <MoonIcon src={moon} alt={'🌙'} />
      </IconFlipper>
    </ToggleButton>
  )
}
