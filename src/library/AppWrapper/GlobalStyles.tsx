import { css, Global } from '@emotion/react'
import { useEffect, useState } from 'react'

const GlobalStyles = () => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [hasMounted])

  return (
    <Global styles={css`
      :root {
        --background: rgba(243, 243, 243, 1);
        --title: rgba(15, 15, 15, 1);
        --text: rgba(22, 22, 22, 1);
        --about: rgba(255, 255, 255, 1);
      }

      [data-theme='dark'] {
        --background: rgba(35, 35, 35, 1);
        --title: rgba(250, 250, 250, 1);
        --text: rgba(243, 243, 243, 1);
        --about: rgba(54, 54, 54, 1);
      }
      
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
        color: var(--text);
        background: var(--background);

        ${hasMounted && css`
          transition-property: background, color;
          transition-duration: 1s;
          transition-timing-function: ease;
        `};

        * {
          ${hasMounted && css`
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