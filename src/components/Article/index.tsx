import { FC } from 'react'
import * as S from './styled'
import { Item } from '@types'

export type Props = {
  data: Item
  type: 'carousel' | 'tab'
}

export const Article: FC<Props> = ({
  data: { img, name, spec, price, rating },
}) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <S.Image src={img} alt="" />
    </S.ImageWrapper>

    <div>{rating}</div>
    <h3>{name}</h3>
    <p>{spec}</p>
    {price}
  </S.Wrapper>
)
