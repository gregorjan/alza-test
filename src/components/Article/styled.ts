import styled, { css } from 'styled-components'

const Wrapper = styled.article`
  width: 240px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  ${({ theme: { colors, space } }) => css`
    margin: 0 ${space[1]};

    border-radius: ${space[1]};
    box-shadow: 0 0 ${space[2]} ${colors.border};
  `}
`

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0;
  ${({ theme: { colors, space } }) => css`
    padding: ${space[1]};
    background-color: ${colors.white};
    border-radius: ${space[1]};
  `}
`

const Image = styled.img`
  min-height: 1px;
  min-width: 1px;
  max-width: 100%;
  max-height: 100%;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  ${({ theme: { space } }) => css`
    padding: ${space[1]};
  `}
`

const Name = styled.h3`
  font-size: 1.8rem;
  text-align: left;
  align-self: stretch;
  flex-grow: 1;
  ${({ theme: { colors, multilineDots, space } }) => css`
    color: ${colors.heading};
    margin: ${space[1]} 0;
    ${multilineDots(3, 1.8)};
  `}
`

const Spec = styled.p`
  font-size: 1.4rem;
  margin-top: 0;
  ${({ theme: { multilineDots } }) => multilineDots(4, 1.4)}
`

const Price = styled.span`
  font-size: 1.8rem;
  text-align: left;
  align-self: stretch;
  font-weight: bold;
  ${({ theme: { colors } }) => css`
    color: ${colors.price};
  `}
`

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export { Wrapper, ImageWrapper, Image, Name, Spec, Description, Price, Link }
