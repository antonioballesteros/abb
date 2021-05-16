import {
  CONNECTION_UPDATING,
  CONNECTION_SUCCESS,
  PART_SUCCESS,
  PART_ERROR,
} from '../constants/actionTypes'

import { setup } from '../../setup'

export const initialState = {
  setup,
  connection: {
    connected: false,
    connecting: false,
    error: false,
  },
  part: {
    data: null,
  },
}

const part = (state, { payload, type }) => {
  // console.log('Part Reducer', { type, payload })
  switch (type) {
    case CONNECTION_UPDATING: {
      return {
        ...state,
        connection: {
          ...state.connection,
          connected: false,
          connecting: true,
          error: false,
        },
      }
    }

    case CONNECTION_SUCCESS: {
      return {
        ...state,
        connection: {
          ...state.connection,
          connected: true,
          connecting: false,
          error: false,
        },
      }
    }

    case PART_SUCCESS: {
      return {
        ...state,
        connection: {
          ...state.connection,
          error: false,
        },
        part: {
          ...state.part,
          data: payload,
        },
      }
    }

    case PART_ERROR: {
      return {
        ...state,
        connection: {
          ...state.connection,
          error: payload,
        },
        part: {
          ...state.part,
        },
      }
    }

    default:
      return state
  }
}

export default part
