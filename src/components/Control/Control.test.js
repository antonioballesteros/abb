import { render, screen } from '@testing-library/react'
import Control from './Control'

const createControl = () => {
  return {
    id: 'test-a',
    name: 'Feat-1 - Cont-test-a',
    nominal: 10,
    normalDev: 2,
    maxDev: 4,
  }
}

test('Control', () => {
  const control = createControl()
  render(<Control control={control} />)
  const element = screen.getByText(control.name)
  expect(element).toBeInTheDocument()
})
