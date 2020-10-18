import React from 'react'
import { renderStories } from '@tests'
import { Tablist } from '@components'

export default { title: 'Tablist' }

export const Base = () =>
  renderStories(
    <Tablist
      tabs={{ tab1: <div>tab content1</div>, tab2: <div>tab content2</div> }}
    />
  )
