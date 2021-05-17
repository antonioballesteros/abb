import './BackendMocked.scss'

import { setup } from '../../setup'

const BackendMocked = () => {
  /*
    create a control random value, with a positive or negative deviation 
    // using nominal and maxDev logic values to create the rnd 
  */
  const createFakedControlValues = (control) => {
    const fakeDev = (Math.random() - 0.5) * control.maxDev * 2.2

    return control.nominal + fakeDev
  }

  /*
    create from setup template definition a bulk of values to send
  */
  const createFakedValue = (id, setup) => {
    const template = setup.find((template) => template.id === id)

    const features = {}
    if (template) {
      template.features.forEach((feature) => {
        const controls = {}
        feature.controls.forEach((control) => {
          controls[control.id] = createFakedControlValues(control)
        })

        features[feature.id] = controls
      })
    }
    const fakePart = {
      [id]: features,
    }

    return fakePart
  }

  const createFakeEvent = (id) => {
    // create fake values "from backend"
    const fakePart = createFakedValue(id, setup)
    console.log('Faking data', fakePart)

    // send to frontend new set of values
    const event = new CustomEvent('update-part', { detail: fakePart })
    window.dispatchEvent(event)
  }

  return (
    <div className="backend">
      <button onClick={() => createFakeEvent(1)}>Generate A</button>
      <button onClick={() => createFakeEvent(2)}>Generate B</button>
      <button onClick={() => createFakeEvent(3)}>Generate C</button>
      <button onClick={() => createFakeEvent(4)}>Generate D</button>
      <button onClick={() => createFakeEvent(99)}>Generate ERROR</button>
    </div>
  )
}

export default BackendMocked
