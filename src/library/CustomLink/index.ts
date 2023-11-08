import styled from '@emotion/styled'
import Link from 'next/link'

export const CustomLink = styled(Link)`
  font-weight: 400;

  padding-bottom: 3px;
  
  transition: background-size 300ms ease;

  background-position: bottom left;
  background-size: 0 2px;
  background-image: linear-gradient(var(--text), var(--text));  
  background-repeat: no-repeat;

  &:hover, &:focus {
    background-size: 100% 2px;
    font-weight: 600;
  }
`
