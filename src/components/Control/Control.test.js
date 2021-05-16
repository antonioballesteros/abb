import { render, screen } from '@testing-library/react'
import Control from './Control'
import { GOOD, PERFECT } from '../../setup'

const createControl = () => {
  return {
    id: 1,
    name: 'Control Test 1',
    value: 10.123,
    dev: 2,
    nominal: 10,
    normalDev: 2,
    maxDev: 4,
    devTol: 3,
    quality: PERFECT,
  }
}
test('Control load', () => {
  const control = createControl()
  render(<Control {...control} />)
  const name = screen.getByText(control.name)
  expect(name).toBeInTheDocument()

  const quality = screen.getByAltText(control.quality)
  expect(quality).toBeInTheDocument()
})
