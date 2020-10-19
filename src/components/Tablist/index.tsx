import { useState, FC, ReactNode } from 'react'
import * as S from './styled'

type Props = {
  tabs: { [index: string]: ReactNode }
}

export const Tablist: FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0])

  const handleOnClick = (key: string) => {
    setActiveTab(key)
  }

  console.log(activeTab === tabs[0])

  return (
    <S.Wrapper>
      <S.Ul role="tablist">
        {Object.keys(tabs).map((tab) => (
          <S.Li key={tab}>
            <S.Tab
              aria-controls={tab}
              aria-selected="true"
              id={`tab-${tab}`}
              role="tab"
              onClick={() => handleOnClick(tab)}
              active={activeTab === tab}
            >
              {tab}
            </S.Tab>
          </S.Li>
        ))}
      </S.Ul>

      <S.Content
        aria-labelledby={`tab-${activeTab}`}
        id={activeTab}
        role="tabpanel"
      >
        {tabs[activeTab]}
      </S.Content>
    </S.Wrapper>
  )
}
