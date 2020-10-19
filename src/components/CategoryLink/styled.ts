import styled, { css } from 'styled-components'

// TODO replace with next/link issues with storybook

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
  ${({ theme: { colors, space } }) => css`
    margin: calc(${space[1]} / 2);
    width: ${space[20]};
    padding: ${space[2]} ${space[2]} ${space[2]} ${space[3]};
    color: ${colors.heading};
    border: 1px solid ${colors.primary};
    &:hover {
      background-color: ${colors.tertiary};
    }
  `}
`

const LinkText = styled.span`
  ${({ theme }) => theme.threeDots};
`

const LinkChevron = styled.span`
  font-size: 1.2rem;
  ${({ theme: { space } }) => css`
    margin-left: ${space[1]};
  `}
`

export { Link, LinkText, LinkChevron }
