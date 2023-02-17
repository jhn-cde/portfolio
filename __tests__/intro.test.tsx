import { render, screen } from '@testing-library/react'
import Intro from '@/components/sections/intro/Intro'

describe('section Intro', () => {
  it('renders a heading', () => {
    render(<Intro />)

    const heading = screen.getByRole('heading', 
    {name: "Johan Huaman.",})
    expect(heading).toBeInTheDocument()
  })
})
