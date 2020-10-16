import React from 'react'
import { renderStories } from '@tests'
import { Categories } from '@sections'

export default { title: 'Categories' }

export const Base = () => renderStories(<Categories />)
