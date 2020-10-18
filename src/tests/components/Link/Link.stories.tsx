import React from 'react'
import { renderStories } from '@tests'
import { Link } from '@components'

export default { title: 'Link' }

export const Base = () => renderStories(<Link href="#">text</Link>)
