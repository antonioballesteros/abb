import './Feature.scss'
import { Control, Quality } from '../'

const createColumns = (controls, size) => {
  const columns = []
  const len = Math.ceil(controls.length / size)

  for (let i = 0; i < size; i++) {
    columns.push(controls.slice(i * len, (i + 1) * len))
  }
  return columns
}

const Feature = ({ feature, size }) => {
  const columns = createColumns(feature.controls, size)

  return (
    <article className="feature">
      <header className={feature.quality}>
        {feature.name}

        <Quality quality={feature.quality} size={24} />
      </header>
      <div className="columns">
        {columns.map((column, i) => {
          return (
            <div key={i} className="box">
              <div className="header">
                <div className="name">Control</div>
                <div className="dev">Dev</div>
                <div className="dev-tol">Dev Out Tol</div>
                <div className="quality">Q</div>
              </div>
              <div className="body">
                {column.map((control) => (
                  <Control key={control.id} control={control} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default Feature
