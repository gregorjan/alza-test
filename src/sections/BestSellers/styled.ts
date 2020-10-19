import styled, { css } from 'styled-components'
import { Section } from '@components'

const Wrapper = styled(Section)`
  ${({ theme: { space } }) => css`
    margin: ${space[3]} 0;
  `}
`

const H2 = styled.h2`
  font-size: 1.8rem;
  ${({ theme: { colors } }) => css`
    color: ${colors.heading};
  `}
`

export { Wrapper, H2 }
