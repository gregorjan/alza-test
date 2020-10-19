/* stylelint-disable */
import { css } from 'styled-components'

export const theme = {
  colors: {
    primary: '#0094e7',
    tertiary: '#e6edf2',
    primaryAlt: '#FFF',
    border: 'rgba(0,0,0,.15)',
    text: '#000',
    heading: '#00275a',
    price: '#398000',
    star: '#efbd56',
  },
  space: Array.from(Array(21)).map((_e, i) => `${i * 8}px`),
  threeDots: css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  multilineDots: (
    rows: number,
    fontSize: number
  ): ReturnType<typeof css> => css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${rows};
    max-height: calc(${Math.round(1.5 * rows)} * ${fontSize}rem + 2px);
    padding-right: 2px;
  `,
}
