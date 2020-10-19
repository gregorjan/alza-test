import styled, { css } from 'styled-components'
import { Section } from '@components'

const Wrapper = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  ${({ theme: { space } }) => css`
    margin: ${space[2]};
  `}
`

export { Wrapper }
