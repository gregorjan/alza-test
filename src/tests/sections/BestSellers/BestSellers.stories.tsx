import React from 'react'
import { renderStories } from '@tests'
import { BestSellers } from '@sections'
import { data } from '../../../../mocks/products.json'

export default { title: 'BestSellers' }

export const Base = () => renderStories(<BestSellers data={data} />)
