import styled, { css } from 'styled-components'

const CarouselWrapper = styled.article`
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

const TabWrapper = styled(CarouselWrapper)`
  height: 450px;
  ${({ theme: { space } }) => css`
    margin: ${space[1]};
  `}
`

const ImageWrapper = styled.a`
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
  height: 154px;
  object-fit: contain;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex-grow: 1;
  ${({ theme: { space } }) => css`
    padding: ${space[1]} ${space[1]} ${space[2]};
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

const Price = styled.div`
  font-size: 1.8rem;
  text-align: left;
  align-self: stretch;
  font-weight: bold;
  display: flex;
  align-items: center;
  ${({ theme: { colors } }) => css`
    color: ${colors.price};
  `}
`

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  ${({ theme: { colors } }) => css`
    color: ${colors.heading};
  `}

  &:hover {
    text-decoration: underline;
  }
`

const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  align-self: stretch;
`

const InStock = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.heading};
    font-weight: bold;
  `}
`

export {
  TabWrapper,
  CarouselWrapper,
  ImageWrapper,
  Image,
  Name,
  Spec,
  Description,
  Price,
  Link,
  Row,
  InStock,
}
