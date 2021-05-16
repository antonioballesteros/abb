import {
  CONNECTION_UPDATING,
  CONNECTION_SUCCESS,
} from '../constants/actionTypes'
import updatePart from './updatePart'

const createConnection = ({ setup, dispatch }) => {
  dispatch({
    type: CONNECTION_UPDATING,
  })

  window.addEventListener('update-part', (event) => {
    updatePart({ setup, data: event.detail, dispatch })
  })

  dispatch({
    type: CONNECTION_SUCCESS,
  })
}

export default createConnection
