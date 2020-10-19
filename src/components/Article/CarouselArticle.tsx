import { FC } from 'react'
import { Rating } from '../Rating'
import * as S from './styled'
import { Item } from '@types'

export type CarouselArticleProps = {
  data: Item
}

export const CarouselArticle: FC<CarouselArticleProps> = ({
  data: { img, name, spec, price, rating, url },
}) => (
  <S.CarouselWrapper>
    <S.ImageWrapper href={url}>
      <S.Image src={img} alt="" />
    </S.ImageWrapper>
    <S.Description>
      <S.Name>
        <S.Link href={url}>{name} </S.Link>
      </S.Name>
      <Rating rating={rating} />
      <S.Spec>{spec}</S.Spec>
      <S.Price>{price}</S.Price>
    </S.Description>
  </S.CarouselWrapper>
)
