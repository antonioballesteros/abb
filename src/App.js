import Provider from './context/Provider'

import { Part, BackendMocked } from './container'

import './App.scss'
function App() {
  return (
    <>
      <Provider>
        <div className="app">
          <Part />
        </div>
      </Provider>
      <BackendMocked />
    </>
  )
}

export default App
