import { render, screen } from '@tests'
import { Base } from './Rating.stories'

describe('rating', () => {
  it('should render text', () => {
    render(<Base />)
    // const text = screen.getByText('text')
    // expect(text).toBeInTheDocument()
  })
})
