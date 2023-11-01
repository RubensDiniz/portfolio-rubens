import styled from '@emotion/styled'
import Link from 'next/link'

export const CustomLink = styled(Link)`
  font-weight: 400;

  padding-bottom: 3px;

  transition-property: background-size;
  transition: background-size 300ms;

  background-position: bottom left;
  background-size: 0 2px;
  background-image: linear-gradient(${({ theme }) => theme.colors.text}, ${({ theme }) => theme.colors.text});
  background-repeat: no-repeat;

  &:hover {
    background-size: 100% 2px;
    font-weight: 600;
  }
`
