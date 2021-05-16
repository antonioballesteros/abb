import { useContext, useEffect } from 'react'

import { MyContext } from '../../context/Provider'
import createConnection from '../../context/actions/createConnection'

import { PartUi } from '../../components'

const Part = () => {
  const {
    dispatch,
    state: {
      setup,
      connection: { connected, connecting, error },
      part: { data },
    },
  } = useContext(MyContext)

  useEffect(() => {
    if (!connecting && !connected) {
      createConnection({ setup, dispatch })
    }
  })

  return <PartUi part={data} error={error} />
}

export default Part
