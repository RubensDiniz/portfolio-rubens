import { BasePageItem, PageItemLink } from '../PageItem'
import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`

export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
`

interface AboutButtonProps {
  aboutIsOpen?: boolean
}

export const AboutButton = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'aboutIsOpen',
})<AboutButtonProps>`
  ${BasePageItem};

  cursor: pointer;

  font-weight: ${({ aboutIsOpen }) => (aboutIsOpen ? 600 : 400)};
  background-size: ${({ aboutIsOpen }) => (aboutIsOpen ? '100% 2px' : '0 2px')};
`
