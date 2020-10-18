import styled, { css } from 'styled-components'

const Wrapper = styled.article`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  ${({ theme: { space } }) => css`
    margin: 0 ${space[2]};
  `}
`

const ImageWrapper = styled.figure`
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme: { colors } }) => css`
    border: 0.5px solid ${colors.border};
    background-color: ${colors.white};
  `}
`

const Image = styled.img`
  min-height: 1px;
  min-width: 1px;
  max-width: 100%;
  max-height: 100%;
`

export { Wrapper, ImageWrapper, Image }
