import styled, { css } from 'styled-components'
import { Button } from '@components'

const Wrapper = styled.div`
  border: none;
  font-size: 1.4rem;
`

const Tab = styled(Button)`
  width: 100%;
  ${({ theme: { colors, space } }) => css`
    color: ${colors.primaryAlt};
    background-color: ${colors.primary};
    padding: ${space[1]} ${space[2]};
    border-top-left-radius: ${space[1]};
    border-top-right-radius: ${space[1]};
  `}
`

const Ul = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
`

const Li = styled.li`
  flex: 0 1 120px;
`

const Content = styled.section`
  ${({ theme: { space } }) => css`
    padding: ${space[2]};
  `}
`

export { Wrapper, Tab, Ul, Li, Content }
