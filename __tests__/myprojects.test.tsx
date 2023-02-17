import MyProjects from '@/components/sections/myprojects/MyProjects'
import { render, screen } from '@testing-library/react'

describe('section About Me', () => {
  it('renders a heading', () => {
    render(<MyProjects projects={[]}/>)

    const heading = screen.getByRole('heading', 
    {name: "Some Of My Projects",})
    expect(heading).toBeInTheDocument()
  })
})
