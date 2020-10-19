import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  font-size: 2rem;
  ${({ theme: { colors, space } }) => css`
    color: ${colors.star};
    margin-bottom: ${space[1]};
  `}
`
