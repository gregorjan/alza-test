import React from 'react'
import { render, screen } from '@tests'
import { Section } from '@components'

describe('section', () => {
  it('should render text', () => {
    render(
      <Section>
        <p>text</p>
      </Section>
    )

    const text = screen.getByText('text')
    expect(text).toBeInTheDocument()
  })
})
