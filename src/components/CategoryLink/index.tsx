import { FC } from 'react'
import * as S from './styled'

type Props = { href: string }

export const CategoryLink: FC<Props> = ({ children, href }) => (
  <S.Link href={href}>
    <S.LinkText>{children}</S.LinkText>
    <S.LinkChevron>&#9654;</S.LinkChevron>
  </S.Link>
)
