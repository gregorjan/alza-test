import { FC } from 'react'
import { Section, Carousel, Article } from '@components'
import { Data } from '@types'

export const BestSellers: FC<Data> = ({ data }) => {
  const bestSellerData = [...data]
  bestSellerData.length = 10
  return (
    <Section>
      <Carousel>
        {bestSellerData.map((articleData) => (
          <Article
            key={articleData.id + Math.random()}
            data={articleData}
            type="carousel"
          />
        ))}
      </Carousel>
    </Section>
  )
}
