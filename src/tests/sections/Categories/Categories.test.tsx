import { render, screen } from '@tests'
import { Base } from './Categories.stories'

describe('categories', () => {
  it('should render text', () => {
    render(<Base />)
    const link = screen.getByText('text')
    expect(link).toBeInTheDocument()
  })
})
