import { DividerWrapper } from '@/library/Divider/styles'
import { SmallScreen } from '@/library/Sizes'
import styled from '@emotion/styled'

export const LocaleDiv = styled.div`
  display: flex;
  align-items: center;

  > a {
    display: flex;
    align-items: center;
    filter: grayscale(100%);
  }
`

export const LocaleSwitcherWrapper = styled.div`
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0 3rem;

  gap: 0.214rem;

  ${SmallScreen} {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    z-index: 3;

    margin: 0;

    overflow: hidden;
    padding: calc(2.25rem + 2px);
    gap: 0;

    border-radius: 50%;

    /* A pseudo-element only exists here, so the circle doesn't fade when crossing the breakpoint */
    &::before {
      content: '';
      position: absolute;
      inset: 0;

      background-color: var(--about);
      transition:
        background-color 1s,
        border-color 1s;

      border-radius: 50%;
      border: solid 2px var(--background);
    }

    ${DividerWrapper} {
      display: none;
    }

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
