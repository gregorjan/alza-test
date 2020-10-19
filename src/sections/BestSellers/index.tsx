import { FC } from 'react'
import * as S from './styled'
import { Carousel, CarouselArticle } from '@components'
import { useData } from '@hooks'

export const BestSellers: FC = () => {
  const data = useData()
  return (
    <S.Wrapper>
      {data?.data ? (
        <Carousel>
          {data.data.map((articleData) => (
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
