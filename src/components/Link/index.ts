import styled, { css } from 'styled-components'
// import BaseLink from 'next/link'

// TODO replace with next/link

// export const Link = styled(BaseLink)``

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  ${({ theme: { colors } }) => css`
    color: ${colors.heading};
  `}
`
