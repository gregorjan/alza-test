import { render, screen } from '@tests'
import { Base } from './Section.stories'

describe('section', () => {
  it('should render paragraph', () => {
    render(<Base />)
    const text = screen.getByText('text')
    expect(text).toBeInTheDocument()
  })
})
