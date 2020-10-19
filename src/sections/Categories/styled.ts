import styled, { css } from 'styled-components'
import { Section } from '@components'

const Wrapper = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  ${({ theme: { space } }) => css`
    margin: ${space[2]};
  `}
`

const H1 = styled.h1`
  font-size: 2rem;
  ${({ theme: { colors } }) => css`
    color: ${colors.heading};
  `}
`

export { Wrapper, H1 }
