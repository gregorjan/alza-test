import React from 'react'
import { renderStories } from '@tests'
import { BestSellers } from '@sections'

export default { title: 'BestSellers' }

export const Base = () => renderStories(<BestSellers />)
