import React from 'react'
import { renderStories } from '@tests'
import { DropdownButton } from '@components'

export default { title: 'DropdownButton' }

export const Base = () =>
  renderStories(
    <DropdownButton
      actions={[
        <a key="1" href="#">
          asdf
        </a>,
        <a key="2" href="#">
          asdf
        </a>,
      ]}
    >
      text
    </DropdownButton>
  )
