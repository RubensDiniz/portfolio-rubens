import { css, Global, useTheme } from '@emotion/react'
import { useEffect, useState } from 'react'

const GlobalStyles = () => {
  const theme = useTheme()

  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    setHasLoaded(true)
  }, [hasLoaded])

  return (
    <Global styles={css`
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        max-width: 100vw;
        overflow-x: hidden;
      }

      body {
        color: ${theme.colors.text};
        background: ${theme.colors.background};

        ${hasLoaded && css`
          transition-property: background, color;
          transition-duration: 1s;
          transition-timing-function: ease;
        `};

        * {
          ${hasLoaded && css`
            transition-property: background, background-color;
            transition-duration: 1s;
            transition-timing-function: ease;
          `};
        }
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `} />
  )
}

export default GlobalStyles