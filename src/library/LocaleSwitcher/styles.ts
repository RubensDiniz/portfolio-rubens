import { SmallScreen } from '@/library/Sizes'
import styled from '@emotion/styled'

export const LocaleSwitcherWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  display: flex;
  padding: 0 1rem;
  border-radius: 1rem;
    
  gap: 3px;
    
  background-color: var(--background);

  transition: padding 1s ease, background-color 1s ease;

  ${SmallScreen} {
    bottom: 2rem;
  }
`

export const LocaleDiv = styled.div`
  display: flex;
`
