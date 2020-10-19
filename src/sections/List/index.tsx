import { FC } from 'react'
import * as S from './styled'
import { TabArticle, Tablist } from '@components'
import { useData } from '@hooks'

export const List: FC = () => {
  const data = useData()
  return (
    <S.Wrapper>
      <Tablist
        tabs={{
          TOP: data && (
            <S.ListWrapper>
              {data.data.map((product) => (
                <TabArticle key={product.id} data={product} />
              ))}
            </S.ListWrapper>
          ),
          Nejprodádanější: data && (
            <S.ListWrapper>
              {data.data.map((product) => (
                <TabArticle key={product.id} data={product} />
              ))}
            </S.ListWrapper>
          ),
          'Od nejlevnějšího': data && (
            <S.ListWrapper>
              {data.data.map((product) => (
                <TabArticle key={product.id} data={product} />
              ))}
            </S.ListWrapper>
          ),
          'Od nejdražšího': data && (
            <S.ListWrapper>
              {data.data.map((product) => (
                <TabArticle key={product.id} data={product} />
              ))}
            </S.ListWrapper>
          ),
        }}
      />
    </S.Wrapper>
  )
}
