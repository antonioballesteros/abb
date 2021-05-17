import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ErrorCard, Loading, Feature } from '../'
import { BAD, WARNING, GOOD, PERFECT } from '../../setup'

import './PartUi.scss'

const getFeature = (id, features) => {
  return features.find((feature) => feature.id === id)
}

const PartUi = ({ part, error }) => {
  if (error) return <ErrorCard msg={error} />
  if (!part || !part.id) return <Loading />

  return (
    <div className="part">
      <header>
        <h1>{part.name}</h1>
      </header>

      <div className="columns">
        {part.layout.map((columns) => {
          return (
            <div
              key={columns.id}
              className={classNames('column', `width-${columns.size}`)}
            >
              {columns.column.map((id) => (
                <div
                  key={id}
                  className={classNames(
                    'box',
                    `height-${columns.column.length}`
                  )}
                >
                  <Feature
                    feature={getFeature(id, part.features)}
                    size={columns.size}
                  />
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const controlShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  quality: PropTypes.oneOf([BAD, WARNING, GOOD, PERFECT]),
  dev: PropTypes.number,
  devTol: PropTypes.number,
  maxDev: PropTypes.number,
  nominal: PropTypes.number,
  normalDev: PropTypes.number,
  value: PropTypes.number,
}

const featureShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  quality: PropTypes.oneOf([BAD, WARNING, GOOD, PERFECT]),
  controls: PropTypes.arrayOf(PropTypes.shape(controlShape)),
}
const partShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.shape(featureShape)),
  layout: PropTypes.array.isRequired,
}

PartUi.propTypes = {
  part: PropTypes.shape(partShape),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

export default PartUi
