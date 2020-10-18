import { render, screen } from '@tests'
import { Base } from './Tablist.stories'

describe('tablist', () => {
  it('should render tabs', () => {
    render(<Base />)
    const tab1 = screen.getByText('tab1')
    const tab2 = screen.getByText('tab2')
    expect(tab1).toBeInTheDocument()
    expect(tab2).toBeInTheDocument()
  })
})
