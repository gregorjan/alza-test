import { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = styled.button<Props>`
  border: none;
  font-size: 1.4rem;
  font-weight: bold;
  ${({ theme: { space } }) => css`
    padding: ${space[1]} ${space[2]};
  `}
`
