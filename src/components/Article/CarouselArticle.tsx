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
  <S.Wrapper>
    <S.ImageWrapper>
      <S.Link href={url}>
        <S.Image src={img} alt="" />
      </S.Link>
    </S.ImageWrapper>

    <S.Description>
      <S.Link href={url}>
        <S.Name>{name}</S.Name>
      </S.Link>
      <Rating rating={rating} />
      <S.Spec>{spec}</S.Spec>
      <S.Price>{price}</S.Price>
    </S.Description>
  </S.Wrapper>
)
