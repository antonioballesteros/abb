import { render, screen } from '@testing-library/react'
import Feature from './Feature'

test('Feature', () => {
  render(<Feature />)
  const element = screen.getByText(/Loading/i)
  expect(element).toBeInTheDocument()
})
