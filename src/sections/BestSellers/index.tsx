import { FC } from 'react'
import { Section, Carousel, CarouselArticle } from '@components'
import { Data } from '@types'

export const BestSellers: FC<Data> = ({ data }) => {
  const bestSellerData = [...data]
  bestSellerData.length = 10
  return (
    <Section>
      <Carousel>
        {bestSellerData.map((articleData) => (
          <CarouselArticle
            key={articleData.id + Math.random()}
            data={articleData}
          />
        ))}
      </Carousel>
    </Section>
  )
}
