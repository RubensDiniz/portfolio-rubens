import { SmallScreen } from '@/library/Sizes'
import { BasePageItem } from '../PageItem'
import styled from '@emotion/styled'

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  /* Leaves room to scroll past the fixed LocaleSwitcher */
  ${SmallScreen} {
    margin-bottom: 7.5rem;
  }
`

export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
`

interface AboutButtonProps {
  aboutIsOpen?: boolean
}

export const AboutButton = styled.button<AboutButtonProps>`
  ${BasePageItem};

  font-weight: ${({ aboutIsOpen }) => (aboutIsOpen ? 600 : 400)};
  background-size: ${({ aboutIsOpen }) => (aboutIsOpen ? '100% 0.143rem' : '0 0.143rem')};
`
