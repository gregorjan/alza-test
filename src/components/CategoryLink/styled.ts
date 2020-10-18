import styled, { css } from 'styled-components'

// TODO replace with next/link issues with storybook

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
  margin: 1px;
  ${({ theme: { colors, space } }) => css`
    width: ${space[20]};
    padding: ${space[2]} ${space[2]} ${space[2]} ${space[3]};
    color: ${colors.text};
    background-color: ${colors.tertiary};
    border: 1px solid ${colors.border};
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
