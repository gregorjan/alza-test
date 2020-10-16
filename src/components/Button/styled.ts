import { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = styled.button<Props>`
  ${({ theme: { colors } }) =>
    css`
      background-color: ${colors.primary};
    `}
`
