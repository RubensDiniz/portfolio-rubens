import { SmallScreen } from '@/library/Sizes'
import styled from '@emotion/styled'

export const LocaleSwitcherWrapper = styled.div`
  display: flex;
  padding: 1.5rem 0 3rem;
  
  gap: 3px;

  transition: padding 1s ease;

  ${SmallScreen} {
    padding-bottom: 2rem;
  }
`

export const LocaleDiv = styled.div`
  display: flex;
`
