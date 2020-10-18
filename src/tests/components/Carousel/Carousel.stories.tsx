import React from 'react'
import { renderStories } from '@tests'
import { Carousel } from '@components'

export default { title: 'Carousel' }

export const Base = () =>
  renderStories(
    <Carousel>
      <div>slide1</div>
      <div>slide2</div>
      <div>slide3</div>
    </Carousel>
  )
