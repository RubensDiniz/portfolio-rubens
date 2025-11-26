import { PageItemLink } from '../../library/PageItem'
import { SmallScreen } from '@/library/Sizes'
import styled from '@emotion/styled'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  padding-top: 8rem;
  transition: padding 1s ease;

  ${SmallScreen} {
    padding: 3.5rem 1.5rem 0;
  }
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

export const CompanyLink = styled(PageItemLink)`
  font-weight: 500;
`
