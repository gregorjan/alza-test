import { FC } from 'react'
import { SROnly } from '../SROnly'
import * as S from './styled'

type Props = {
  rating: number
}

const getStars = (rating: number): string => {
  let result = ''
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      result += String.fromCharCode(9733)
    } else {
      result += String.fromCharCode(9734)
    }
  }
  return result
}

export const Rating: FC<Props> = ({ rating }) => {
  return (
    <S.Wrapper>
      <span aria-hidden="true">{getStars(rating)}</span>
      <SROnly>Rating: {rating}</SROnly>
    </S.Wrapper>
  )
}
