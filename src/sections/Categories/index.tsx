import { FC } from 'react'
import { Wrapper } from './styled'
import { CategoryLink } from '@components'

type Link = {
  href: string
  text: string
}

type Props = {
  links: Link[]
}

export const Categories: FC<Props> = ({ links }) => (
  <Wrapper>
    {links.map(({ text, href }) => (
      <CategoryLink key={text} href={href}>
        {text}
      </CategoryLink>
    ))}
  </Wrapper>
)
