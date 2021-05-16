import {
  CONNECTION_UPDATING,
  CONNECTION_SUCCESS,
  PART_SUCCESS,
  PART_ERROR,
} from '../constants/actionTypes'

import part, { initialState } from './part'

//Testing default state when unk action is called
test('UNK_ACTION', () => {
  const updateAction = { payload: {}, type: 'UNK_ACTION' }
  const updatedState = part(initialState, updateAction)

  expect(updatedState).toEqual(initialState)
})

test('CONNECTION_UPDATING', () => {
  const updateAction = { payload: {}, type: CONNECTION_UPDATING }
  const updatedState = part(initialState, updateAction)

  expect(updatedState).toEqual({
    ...initialState,
    connection: {
      ...initialState.connection,
      connected: false,
      connecting: true,
    },
  })
})

test('CONNECTION_SUCCESS', () => {
  const updateAction = { payload: {}, type: CONNECTION_SUCCESS }
  const updatedState = part(initialState, updateAction)

  expect(updatedState).toEqual({
    ...initialState,
    connection: {
      ...initialState.connection,
      connected: true,
      connecting: false,
      error: false,
    },
  })
})

test('PART_SUCCESS', () => {
  const updateAction = { payload: '[testUpdate]', type: PART_SUCCESS }
  const updatedState = part(initialState, updateAction)

  expect(updatedState.part).toEqual({
    ...initialState.part,
    data: '[testUpdate]',
  })
})

test('PART_ERROR', () => {
  const updateAction = { payload: 'this is the error', type: PART_ERROR }
  const updatedState = part(initialState, updateAction)

  expect(updatedState).toEqual({
    ...initialState,
    connection: {
      ...initialState.connection,
      error: 'this is the error',
    },
    part: {
      ...initialState.part,
    },
  })
})
