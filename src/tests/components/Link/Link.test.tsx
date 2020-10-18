import { render, screen } from '@tests'
import { Base } from './Link.stories'

describe('link', () => {
  it('should render text', () => {
    render(<Base />)
    const text = screen.getByText('text')
    expect(text).toBeInTheDocument()
  })
})
