import { FC } from 'react'
import { DropdownButton } from '../DropdownButton'
import { Rating } from '../Rating'
import { Link } from '../Link'
import * as S from './styled'
import { Item } from '@types'

export type TabArticleProps = {
  data: Item
}

export const TabArticle: FC<TabArticleProps> = ({
  data: { img, name, spec, price, rating, url, avail },
}) => (
  <S.TabWrapper>
    <S.Description>
      <S.Name>
        <S.Link href={url}>{name} </S.Link>
      </S.Name>
      <S.Spec>{spec}</S.Spec>
    </S.Description>
    <S.ImageWrapper href={url}>
      <S.Image src={img} alt="" />
    </S.ImageWrapper>
    <S.Description>
      <Rating rating={rating} />
      <S.Row>
        <S.Price>{price}</S.Price>
        <DropdownButton
          actions={[
            <Link key="0" href="#">
              Koupit zrychleně
            </Link>,
            <Link key="1" href="#">
              Porovnat
            </Link>,
            <Link key="2" href="#">
              Hlídat
            </Link>,
            <Link key="3" href="#">
              Přidat do seznamu
            </Link>,
          ]}
        >
          Koupit
        </DropdownButton>
      </S.Row>
      <S.InStock>{avail}</S.InStock>
    </S.Description>
  </S.TabWrapper>
)
