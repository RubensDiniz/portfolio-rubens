import { SmallScreen } from '@/library/Sizes'
import styled from '@emotion/styled'

export const LocaleDiv = styled.div`
  display: flex;
`

export const LocaleSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0 3rem;

  gap: 0.214rem;

  ${SmallScreen} {
    display: none;
  }
`

export const MobileLocaleSwitcher = styled.div`
  display: none;

  ${SmallScreen} {
    display: flex;
    overflow: hidden;

    background-color: var(--about);
    transition:
      background-color 1s,
      border-color 1s;

    position: absolute;
    bottom: 2rem;
    right: 2rem;
    padding: 2.25rem;
    border-radius: 50%;

    > ${LocaleDiv} {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }

    > ${LocaleDiv}[data-selected="true"] {
      z-index: 2;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.4rem 0 0 0.4rem;

      pointer-events: none;
    }

    > ${LocaleDiv}[data-selected="false"] {
      z-index: 1;

      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0.4rem 0.4rem 0;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
      }
    }
  }
`
