import styled from '@emotion/styled'
import Image from 'next/image'

// The rotation comes from data-theme instead of React state because next-themes
// sets it before the first paint, so the icon never has to spin into place.
export const IconFlipper = styled.div`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;

  transform-style: preserve-3d;
  transition: transform 1s ease;

  [data-theme='light'] & {
    transform: rotateY(180deg);
  }
`

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--about);

  width: 3rem;
  height: 3rem;

  border-radius: 50%;

  transition: background-color 1s ease;
`

export const ButtonIcon = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;

  height: 1.5rem;
  width: 1.5rem;

  user-select: none;

  backface-visibility: hidden;
`

export const SunIcon = styled(ButtonIcon)`
  transform: rotateY(180deg);
`

export const MoonIcon = styled(ButtonIcon)``
