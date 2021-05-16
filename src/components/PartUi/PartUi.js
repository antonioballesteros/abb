import { ErrorCard, Loading, Feature } from '../'
import classNames from 'classnames'

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

export default PartUi
