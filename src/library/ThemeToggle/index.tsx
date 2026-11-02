'use client'
import { IconFlipper, MoonIcon, SunIcon, ToggleButton } from './styles'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import moon from '$/public/moon.svg'
import sun from '$/public/sun.svg'

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(undefined)
  const t = useTranslations('Home')

  useEffect(() => setCurrentTheme(resolvedTheme), [resolvedTheme])

  const nextTheme = currentTheme === 'light' ? 'dark' : 'light'

  return (
    <ToggleButton
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={t(`theme.${nextTheme}`)}
    >
      <IconFlipper>
        <SunIcon src={sun} alt="" />
        <MoonIcon src={moon} alt="" />
      </IconFlipper>
    </ToggleButton>
  )
}
