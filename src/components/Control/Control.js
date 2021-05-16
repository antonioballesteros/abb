import PropTypes from 'prop-types'

import './Control.scss'
import { Quality } from '../'

import { BAD, WARNING, GOOD, PERFECT } from '../../setup'

const parseValue = (value) => {
  if (!value) return null
  return parseInt(value * 100) / 100
}

const Control = ({ name, value, dev, nominal, normalDev, devTol, quality }) => {
  /*
  Title attribute used only during tests !!
  to allow see nominal and value loaded
  */

  return (
    <div className="control">
      <div className="name">{name}</div>
      <div
        className="dev"
        title={`[Nom:${nominal} / Val:${parseValue(value)} ]`}
      >
        {parseValue(dev)}
      </div>
      <div
        className="dev-tol"
        title={`[Nom:${nominal} / Val:${parseValue(
          value
        )} / NormalDev:${parseValue(normalDev)} ]`}
      >
        {parseValue(devTol)}
      </div>
      <div className="quality">
        <Quality quality={quality} />
      </div>
    </div>
  )
}

Control.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  dev: PropTypes.number,
  nominal: PropTypes.number,
  normalDev: PropTypes.number,
  devTol: PropTypes.number,
  quality: PropTypes.oneOf([BAD, WARNING, GOOD, PERFECT]),
}

export default Control
