import AnimateHeight from 'react-animate-height'
import styled from '@emotion/styled'

export const AboutWrapper = styled(AnimateHeight)`
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 22rem;

  border-radius: 1rem;

  background-color: var(--about);
`

export const AboutInner = styled.div`
  padding: 2rem;
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
