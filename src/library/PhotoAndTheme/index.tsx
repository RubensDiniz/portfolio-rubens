import { RoundPhoto, PhotoWrapper, ToggleWrapper } from './styles'
import { ThemeToggle } from '@/library/ThemeToggle'
import profilepic from '$/public/profilepic.png'

export const PhotoAndTheme = () => (
  <PhotoWrapper>
    <RoundPhoto src={profilepic} alt={'Rubens Diniz'} width={160} height={160} priority />
    <ToggleWrapper>
      <ThemeToggle />
    </ToggleWrapper>
  </PhotoWrapper>
)
