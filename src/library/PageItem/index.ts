import styled from '@emotion/styled'
import Link from 'next/link'
import { css } from '@emotion/react'

export const BasePageItem = css`
  font-weight: 400;

  /* This padding (and the hover padding) compensate the difference in font weight */
  padding: 0 0.06rem 0.214rem 0.06rem;

  transition: background-size 300ms ease;

  background-position: bottom left;
  background-size: 0 0.143rem;
  background-image: linear-gradient(var(--text), var(--text));
  background-repeat: no-repeat;

  &:hover,
  &:focus {
    padding: 0 0 0.214rem 0;
    background-size: 100% 0.143rem;
    font-weight: 600;
  }
`

export const PageItemLink = styled(Link)`
  ${BasePageItem}
`
