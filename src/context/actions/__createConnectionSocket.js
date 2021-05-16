import {
  CONNECTION_UPDATING,
  CONNECTION_SUCCESS,
} from '../constants/actionTypes'
import updatePart from './updatePart'

/*
Posible implementation with webSockets in a real world

 NOT RDY TO USE !!!

*/
const createConnection = ({ dispatch }) => {
  dispatch({
    type: CONNECTION_UPDATING,
  })

  // Create webSocket with backend
  // check if server is not available
  // delay to re-try if error?

  // better from .env file
  const socket = new WebSocket('ws://??? // ?? ')

  dispatch({
    type: CONNECTION_SUCCESS,
  })

  socket.onmessage = function (event) {
    updatePart({ data: event.data, dispatch })
  }
}

export default createConnection
