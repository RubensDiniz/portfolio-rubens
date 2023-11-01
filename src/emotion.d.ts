import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: string,
      title: string,
      text: string,
      about: string
    }
  }
}
