import { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

import part, { initialState } from './reducers/part'

const defaultContext = {}
export const MyContext = createContext(defaultContext)

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(part, initialState)

  return (
    <MyContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Provider
