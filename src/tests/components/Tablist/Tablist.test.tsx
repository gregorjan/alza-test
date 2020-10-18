import { render, screen } from '@tests'
import { Base } from './Tablist.stories'

describe('button', () => {
  it('should render text', () => {
    render(<Base />)
    const text = screen.getByText('text')
    expect(text).toBeInTheDocument()
  })
})
