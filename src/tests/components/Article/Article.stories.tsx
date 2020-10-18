import React from 'react'
import { renderStories } from '@tests'
import { Article } from '@components'
import { data } from '../../../../mocks/products.json'

export default { title: 'Article' }

export const TabType = () => renderStories(<Article type='tab' data={data[0] } />)
export const CarouselType = () => renderStories(<Article type='carousel' data={data[1]} />)
