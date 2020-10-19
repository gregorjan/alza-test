import styled, { css } from 'styled-components'
import { Section } from '@components'

export const Wrapper = styled(Section)`
  ${({ theme: { space } }) => css`
    margin: ${space[3]} 0;
  `}
`
