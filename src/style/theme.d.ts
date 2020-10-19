/* eslint-disable @typescript-eslint/no-empty-interface */
import { css } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: '#0094e7'
      tertiary: '#e6edf2'
      primaryAlt: '#FFF'
      border: 'rgba(0,0,0,.15)'
      text: '#000'
      heading: '#00275a'
      price: '#398000'
      start: '#efbd56'
    }
    space: string[]
    threeDots: ReturnType<typeof css>
    multilineDots: (rows: number, fontSize: number) => ReturnType<typeof css>
  }
}
