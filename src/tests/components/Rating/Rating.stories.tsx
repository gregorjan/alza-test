import React from 'react'
import { renderStories } from '@tests'
import { Rating } from '@components'

export default { title: 'Rating' }

export const Base = () => renderStories(<Rating rating={4} />)
