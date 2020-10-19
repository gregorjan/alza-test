import styled, { css, Keyframes, keyframes } from 'styled-components'
import { height, HeightProps } from 'styled-system'
import { Button } from '@components'

const moveRight = (width: string) => keyframes`
    from { transform:translateX(0); }
    to { transform:translateX(-${width}); }
`

const moveLeft = (width: string) => keyframes`
    from { transform:translateX(0); }
    to { transform:translateX(${width}); }
`

const getAnimationName = (
  animation: 'left' | 'right',
  width: string
): Keyframes => {
  if (animation === 'left') {
    return moveLeft(width)
  }
  return moveRight(width)
}

const Wrapper = styled.div<HeightProps>`
  position: relative;
  overflow: hidden;
  min-height: 100px;
  ${height}
`

const ChevronWrapper = styled.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
`

const Chevron = styled(Button)`
  padding: 0;
  pointer-events: auto;
  cursor: pointer;
  ${({ theme: { space, colors } }) =>
    css`
      height: ${space[7]};
      width: ${space[3]};
      background-color: ${colors.primary};
      color: ${colors.primaryAlt};
      &:first-child {
        border-top-right-radius: calc(${space[1]} / 2);
        border-bottom-right-radius: calc(${space[1]} / 2);
      }
      &:last-child {
        border-top-left-radius: calc(${space[1]} / 2);
        border-bottom-left-radius: calc(${space[1]} / 2);
      }
    `}
`

type SlidesWrapperProps = {
  animation: 'left' | 'right' | false
  slideWidth: string
}

const Slider = styled.div<SlidesWrapperProps>`
  display: flex;
  overflow-x: hidden;
  position: absolute;
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  ${({ animation, slideWidth, theme: { space } }) => css`
    left: -${slideWidth};
    padding: ${space[1]} 0;
    ${animation
      ? css`
          animation-name: ${getAnimationName(animation, slideWidth)};
        `
      : ''};
  `}
`

const SliderWrapper = styled.div<HeightProps>`
  position: relative;
  overflow: hidden;
  min-height: 100px;
  ${height};
  ${({ theme: { space } }) => css`
    margin: 0 ${space[1]};
  `}
`

export { Wrapper, ChevronWrapper, Chevron, Slider, SliderWrapper }
