import { RoundPhoto, PhotoWrapper, ToggleWrapper } from './styles'
import { ThemeToggle } from '@/library/ThemeToggle'
import profilepic from '$/public/profilepic.png'

export const PhotoAndTheme = () => (
  <PhotoWrapper>
    <RoundPhoto src={profilepic} alt={'Rubens Diniz'} />
    <ToggleWrapper>
      <ThemeToggle />
    </ToggleWrapper>
  </PhotoWrapper>
)
