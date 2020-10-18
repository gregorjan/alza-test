import { render, screen } from '@tests'
import { Base } from './CategoryLink.stories'

describe('categoryLink', () => {
  it('should render text', () => {
    render(<Base />)
    const text = screen.getByText('text')
    expect(text).toBeInTheDocument()
  })
})
