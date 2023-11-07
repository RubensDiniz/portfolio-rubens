import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface AboutWrapperProps {
  aboutIsOpen: boolean
}

export const AboutWrapper = styled.div<AboutWrapperProps>`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-height: 352px;
  max-width: 22rem;
  
  border-radius: 1rem;
  
  margin: 1rem 0 1.25rem;
  padding: 2rem;
  
  background-color: var(--about);

  overflow: hidden;
  
  transition-timing-function: ease;
  transition: padding 0.8s, margin 1s, max-height 0.8s, background-color 1s;
  
  ${({ aboutIsOpen }) => !aboutIsOpen && css`
    max-height: 0;
    padding: 0 2rem;
    margin: 0;
  `};
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  > p {
    font-weight: 300;
  }
`

export const AboutTools = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 0.75rem;
  
  > span {
    font-weight: 500;
  }
  
  > p {
    font-weight: 400;
  }
`
