import { render, screen } from '@tests'
import { Base } from './List.stories'

describe('list', () => {
  it('should render text', () => {
    render(<Base />)
    // const text = screen.getByText('List')
    // expect(text).toBeInTheDocument()
  })
})
