import { render, screen } from '@testing-library/react'
import AboutMe from '@/components/aboutme/AboutMe'

describe('section About Me', () => {
  it('renders a heading', () => {
    render(<AboutMe />)

    const heading = screen.getByRole('heading', 
    {name: "About Me",})
    expect(heading).toBeInTheDocument()
  })
})
