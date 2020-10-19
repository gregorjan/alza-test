import { FC } from 'react'
import * as S from './styled'
import { TabArticle, Tablist } from '@components'
import { useData } from '@hooks'

export const List: FC = () => {
  const data1 = useData(0)
  const data2 = useData(1)
  const data3 = useData(2)
  const data4 = useData(3)
  return (
    <S.Wrapper>
      <Tablist
        tabs={{
          TOP: data1 && (
            <S.ListWrapper>
              {data1.map((product) => (
                <TabArticle key={product.id} data={product} />
              ))}
            </S.ListWrapper>
          ),
          Nejprodádanější: data2 && (
            <S.ListWrapper>
              {data2.map((product) => (
                <TabArticle key={product.id} data={product} />
              ))}
            </S.ListWrapper>
          ),
          'Od nejlevnějšího': data3 && (
            <S.ListWrapper>
              {data3.map((product) => (
                <TabArticle key={product.id} data={product} />
              ))}
            </S.ListWrapper>
          ),
          'Od nejdražšího': data4 && (
            <S.ListWrapper>
              {data4.map((product) => (
                <TabArticle key={product.id} data={product} />
              ))}
            </S.ListWrapper>
          ),
        }}
      />
    </S.Wrapper>
  )
}
