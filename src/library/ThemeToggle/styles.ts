import styled from '@emotion/styled'
import Image from 'next/image'

export const IconFlipper = styled.div`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;

  transform-style: preserve-3d;
  --webkit-transform-style: preserve-3d;
`

interface ToggleButtonProps {
  currentTheme?: string
}

export const ToggleButton = styled.div<ToggleButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--about);

  width: 3rem;
  height: 3rem;

  border-radius: 50%;

  cursor: pointer;

  opacity: ${({ currentTheme }) => (currentTheme ? 1 : 0)};
  transition:
    opacity 1s ease,
    background-color 1s ease;

  > ${IconFlipper} {
    transform: ${({ currentTheme }) =>
      currentTheme ? (currentTheme === 'dark' ? '0' : 'rotateY(180deg)') : 'rotateY(90deg)'};
    transition: ${({ currentTheme }) => (currentTheme ? 'transform 1s ease' : 'transform 0s ease')};
  }
`

export const ButtonIcon = styled(Image)`
  position: absolute;

  height: 1.5rem;
  width: 1.5rem;

  user-select: none;

  backface-visibility: hidden;
  --webkit-backface-visibility: hidden;
`

export const SunIcon = styled(ButtonIcon)`
  transform: rotateY(180deg);
`

export const MoonIcon = styled(ButtonIcon)``
