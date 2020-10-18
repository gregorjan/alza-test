import {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  FC,
  ReactNodeArray,
} from 'react'
import * as S from './styled'

const generateSlides = (slides: ReactNodeArray, current: number) => {
  const newSlides = [...slides]
  const spliced = newSlides.splice(0, current)
  const result = [...newSlides, ...spliced] as ReactNodeArray
  result.push(result[0])
  result.unshift(result[result.length - 2])
  return result
}

export const Carousel: FC<{ children: ReactNodeArray }> = ({ children }) => {
  const [current, setCurrent] = useState(0)
  const [animation, setAnimation] = useState<false | 'left' | 'right'>(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [sliderDimensions, setSliderDimensions] = useState<[number, number]>([
    0,
    0,
  ])

  const updateCurrent = () => {
    if (children.length && animation) {
      setCurrent((prev) => {
        if (animation === 'left') {
          if (prev !== 0) {
            return prev - 1
          }
          return children.length - 1
        }
        if (prev !== children.length - 1) {
          return prev + 1
        }
        return 0
      })
      setAnimation(false)
    }
  }

  useLayoutEffect(() => {
    if (sliderRef.current) {
      setSliderDimensions([
        sliderRef.current.offsetWidth,
        sliderRef.current.offsetHeight,
      ])
    }
  }, [])

  const slides = useMemo<ReactNodeArray>(
    () =>
      Array.isArray(children) ? generateSlides(children, current) : children,
    [current, children]
  )

  return (
    <S.Wrapper height={`${sliderDimensions[1]}px`}>
      <S.ChevronWrapper>
        <S.Chevron onClick={() => setAnimation('left')}>&#9664;</S.Chevron>
        <S.Chevron onClick={() => setAnimation('right')}>&#9654;</S.Chevron>
      </S.ChevronWrapper>
      <S.SliderWrapper height={`${sliderDimensions[1]}px`}>
        <S.Slider
          slideWidth={`${sliderDimensions[0] / slides.length}px`}
          onAnimationEnd={updateCurrent}
          animation={animation}
          ref={sliderRef}
        >
          {slides}
        </S.Slider>
      </S.SliderWrapper>
    </S.Wrapper>
  )
}
