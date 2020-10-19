import { FC } from 'react'
import * as S from './styled'
import { CategoryLink } from '@components'

type Link = {
  href: string
  text: string
}

type Props = {
  links: Link[]
}

export const Categories: FC<Props> = ({ links }) => (
  <div>
    <S.H1>Notebooky</S.H1>
    <S.Wrapper>
      {links.map(({ text, href }) => (
        <CategoryLink key={text} href={href}>
          {text}
        </CategoryLink>
      ))}
    </S.Wrapper>
  </div>
)
