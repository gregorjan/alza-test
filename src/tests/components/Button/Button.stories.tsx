import React from 'react'
import { renderStories } from '@tests'
import { Button } from '@components'

export default { title: 'Button' }

export const Base = () => renderStories(<Button>text</Button>)
