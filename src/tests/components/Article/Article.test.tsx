import { render, screen } from '@tests'
import { TabType, CarouselType } from './Article.stories'

describe('article', () => {
  it('should render text', () => {
    render(<TabType />)
    // const text = screen.getByText('text')
    // expect(text).toBeInTheDocument()
  })
  it('should render text', () => {
    render(<CarouselType />)
    // const text = screen.getByText('text')
    // expect(text).toBeInTheDocument()
  })
})
