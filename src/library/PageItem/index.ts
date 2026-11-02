import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const BasePageItem = css`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  font-weight: 400;

  /* The underline sits at the bottom of the box, so it can't inherit a taller line-height */
  line-height: normal;
  padding-bottom: 0.214rem;

  transition: background-size 300ms ease;

  background-position: bottom left;
  background-size: 0 0.143rem;
  background-image: linear-gradient(var(--text), var(--text));
  background-repeat: no-repeat;

  /* An invisible bold copy of the text (from data-text) keeps the item at its bold width at all
  times, so that the change in font weight doesn't shift the text around it */
  &::after {
    content: attr(data-text);
    height: 0;
    overflow: hidden;
    visibility: hidden;
    font-weight: 600;
  }

  &:hover,
  &:focus-visible {
    background-size: 100% 0.143rem;
    font-weight: 600;
  }
`

export const PageItemLink = styled.a`
  ${BasePageItem}
`
