import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    const description = screen.getByTestId('description')

    expect(heading).toBeInTheDocument()
    expect(description).toHaveTextContent('Get started by editing')
  })
})
