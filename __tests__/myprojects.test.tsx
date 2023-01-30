import MyProjects from '@/components/myprojects/MyProjects'
import { render, screen } from '@testing-library/react'

describe('section About Me', () => {
  it('renders a heading', () => {
    render(<MyProjects />)

    const heading = screen.getByRole('heading', 
    {name: "Some Of My Projects",})
    expect(heading).toBeInTheDocument()
  })
})
