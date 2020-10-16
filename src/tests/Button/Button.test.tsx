import React from 'react'
import { render, screen } from '@tests'
import { Button } from '@components'

describe('button', () => {
  it('should render text', () => {
    render(<Button>text</Button>)

    const text = screen.getByText('text')
    expect(text).toBeInTheDocument()
  })
})
