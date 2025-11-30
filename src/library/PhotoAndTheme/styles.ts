import styled from '@emotion/styled'
import Image from 'next/image'

export const PhotoWrapper = styled.div`
  flex-shrink: 0;
  position: relative;
  
  height: 11rem;
  width: 11rem;
  
  border-radius: 5.5rem;

  background-color: var(--about);
`

export const RoundPhoto = styled(Image)`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  height: 10rem;
  width: 10rem;

  border-radius: 50%;
  
  user-select: none;
`

export const ToggleWrapper = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -3rem;
`
