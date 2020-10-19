import styled, { css } from 'styled-components'
import { Button } from '../Button'
import { Section } from '../Section'

const Wrapper = styled.div`
  border: none;
  font-size: 1.4rem;
  width: 100%;
`

const Tab = styled(Button)<{ active: boolean }>`
  width: 100%;
<<<<<<< Updated upstream
  ${({ active, theme: { colors, space } }) => css`
    color: ${active ? colors.primaryAlt : colors.primary};
    background-color: ${active ? colors.primary : colors.primaryAlt};
=======
  height: 100%;
  ${({ theme: { colors, space } }) => css`
    color: ${colors.primaryAlt};
    background-color: ${colors.primary};
>>>>>>> Stashed changes
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
  ${({ theme: { colors } }) => css`
    border-bottom: 1px solid ${colors.border};
  `}
`

const Li = styled.li`
  flex: 0 1 180px;
  margin: 0 1px;
`

const Content = styled(Section)`
  ${({ theme: { space } }) => css`
    padding: ${space[1]};
  `}
`

export { Wrapper, Tab, Ul, Li, Content }
