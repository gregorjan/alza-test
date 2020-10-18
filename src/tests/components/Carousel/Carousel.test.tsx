import { render, screen } from '@tests'
import { Base } from './Carousel.stories'

describe('carousel', () => {
  it('should render slide1', () => {
    render(<Base />)
    const slideList = screen.getAllByText('slide1')
    expect(slideList.length).toBe(2)
  })
  it('should render slide2', () => {
    render(<Base />)
    const slide = screen.getByText('slide2')
    expect(slide).toBeInTheDocument()
  })
  it('should render slide3', () => {
    render(<Base />)
    const slideList = screen.getAllByText('slide3')
    expect(slideList.length).toBe(2)
  })
})
