import styled, { css } from 'styled-components'
import { Button as BaseButton } from '../Button'

const Wrapper = styled.div`
  position: relative;
`

const Button = styled(BaseButton)`
  ${({ theme: { space } }) => css`
    padding: ${space[1]} ${space[2]};
  `}
`

type ListProps = {
  open: boolean
}

const List = styled.div<ListProps>`
  position: absolute;
  z-index: 5;
  > * {
    display: block;
  }
  ${({ open, theme: { colors, space } }) => css`
    background-color: ${colors.primaryAlt};
    border: 1px solid ${colors.border};
    display: ${open ? 'block' : 'none'};
    > * {
      padding: ${space[1]} ${space[2]};
    }
  `}
`

export { Wrapper, Button, List }
