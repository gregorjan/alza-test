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
  height: 100%;
  ${({ theme: { colors, space }, active }) => css`
    color: ${active ? colors.primaryAlt : colors.primary};
    background-color: ${active ? colors.primary : colors.primaryAlt};
    padding: ${space[1]} ${space[2]};
    @media (min-width: 480px) {
      border-top-left-radius: ${space[1]};
      border-top-right-radius: ${space[1]};
    }
  `}
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  
  align-items: stretch;
  padding: 0;
  margin: 0;
  list-style-type: none;
  ${({ theme: { colors } }) => css`
    border-bottom: 1px solid ${colors.border};
  `}
  @media (min-width: 480px) {
    flex-direction: row;
  }
`

const Li = styled.li`
  margin: 0 1px;
  @media (min-width: 480px) {
    flex: 0 1 180px;
  }
`

const Content = styled(Section)`
  ${({ theme: { space } }) => css`
    padding: ${space[1]};
  `}
`

export { Wrapper, Tab, Ul, Li, Content }
