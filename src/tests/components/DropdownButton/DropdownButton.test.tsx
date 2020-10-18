import { render, screen } from '@tests'
import { Base } from './DropdownButton.stories'

describe('dropdownButton', () => {
  it('should render text', () => {
    render(<Base />)
    const text = screen.getByText('text')
    expect(text).toBeInTheDocument()
  })
})
