import styled, { css } from 'styled-components'
import { Section } from '@components'

const Wrapper = styled(Section)`
  ${({ theme: { space } }) => css`
    margin: ${space[3]} 0;
  `}
`

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export { Wrapper, ListWrapper }
