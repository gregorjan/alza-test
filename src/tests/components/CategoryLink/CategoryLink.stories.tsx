import React from 'react'
import { renderStories } from '@tests'
import { CategoryLink } from '@components'

export default { title: 'CategoryLink' }

export const Base = () =>
  renderStories(<CategoryLink href="#">text</CategoryLink>)
