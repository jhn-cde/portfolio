import { render, screen } from '@testing-library/react'
import Layout from '@/components/layout/Layout'

describe('layout', () => {
  it('renders a header', () => {
    render(<Layout children={[]}/>)

    const header = screen.getByTitle('header')
    expect(header).toBeInTheDocument()
  })

  it('renders a content', () => {
    render(<Layout children={[]}/>)

    const content = screen.getByTitle('content')
    expect(content).toBeInTheDocument()
  })

  it('renders 1 children', () => {
    render(<Layout children={[
      <div title='content_test'></div>
    ]}/>)

    const content = screen.getByTitle('content_test')
    expect(content).toBeInTheDocument()
  })

  it('renders n children', () => {
    render(<Layout children={[
      <div title='content_test1'></div>,
      <div title='content_test2'></div>
    ]}/>)

    const content1 = screen.getByTitle('content_test1')
    expect(content1).toBeInTheDocument()

    const content2 = screen.getByTitle('content_test2')
    expect(content2).toBeInTheDocument()
  })

  it('renders a footer', () => {
    render(<Layout children={[]}/>)

    const footer = screen.getByTitle('footer')
    expect(footer).toBeInTheDocument()
  })
})
