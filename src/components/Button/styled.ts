import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = styled.button<Props>`
  border: none;
  font-size: 1.4rem;
`
