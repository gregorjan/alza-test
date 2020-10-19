import React from 'react'
import { renderStories } from '@tests'
import { TabArticle, CarouselArticle } from '@components'
import { data } from '../../../../mocks/products.json'

export default { title: 'Article' }

export const TabType = () => renderStories(<TabArticle data={data[0]} />)
export const CarouselType = () =>
  renderStories(<CarouselArticle data={data[1]} />)
