import { render, screen } from '@tests'
import { Base } from './BestSellers.stories'

describe('bestsellers', () => {
  it('should render text', () => {
    render(<Base />)
    // const text = screen.getByText('BestSellers')
    // expect(text).toBeInTheDocument()
  })
})
