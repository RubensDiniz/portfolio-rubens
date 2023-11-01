import { CustomLink } from '@/library/CustomLink'
import styled from '@emotion/styled'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  padding-top: 8rem;
`

export const Header = styled.div`
  padding: 1.25rem 0 0.75rem;
  
  gap: 0.5rem;
  
  text-align: center;
  line-height: 2.25rem;
  
  > span {
    font-size: 2rem;
    font-weight: 700;
  }
  
  > p { 
    font-size: 1.25rem;
    font-weight: 500;
  }
`

export const CompanyLink = styled(CustomLink)`
  font-weight: 500;
`
