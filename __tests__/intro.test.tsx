import { render, screen } from '@testing-library/react'
import Intro from '@/components/intro/Intro'

describe('section Intro', () => {
  it('renders a heading', () => {
    render(<Intro />)

    const heading = screen.getByRole('heading', 
    {name: "Johan Huaman.",})
    expect(heading).toBeInTheDocument()
  })

  it('renders a description', () => {
    render(<Intro />)

    const description = screen.getByTitle('description')

    expect(description).toBeInTheDocument()
  })

  it('renders a content', () => {
    render(<Intro />)

    const content = screen.getByTitle('content')

    expect(content).toBeInTheDocument()
  })
})
