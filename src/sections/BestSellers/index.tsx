import { FC } from 'react'
import * as S from './styled'
import { Carousel, CarouselArticle } from '@components'
import { useData } from '@hooks'

export const BestSellers: FC = () => {
  const data = useData(1)
  return (
    <S.Wrapper>
      <S.H2>Nejprodávanější</S.H2>
      {data ? (
        <Carousel>
          {data.map((articleData) => (
            <CarouselArticle
              key={articleData.id + Math.random()}
              data={articleData}
            />
          ))}
        </Carousel>
      ) : (
        'Loading... '
      )}
    </S.Wrapper>
  )
}
