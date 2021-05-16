import './Control.scss'
import { Quality } from '../'

const Control = ({ control }) => {
  const parseValue = (value) => {
    if (!value) return null
    return parseInt(value * 100) / 100
  }

  /*
  Title attribute used only during tests !!
  to allow see nominal and value loaded
  */

  return (
    <div className="control">
      <div className="name">{control.name}</div>
      <div
        className="dev"
        title={`[Nom:${control.nominal} / Val:${parseValue(control.value)} ]`}
      >
        {parseValue(control.dev)}
      </div>
      <div
        className="dev-tol"
        title={`[Nom:${control.nominal} / Val:${parseValue(
          control.value
        )} / NormalDev:${parseValue(control.normalDev)} ]`}
      >
        {parseValue(control.devTol)}
      </div>
      <div className="quality">
        <Quality quality={control.quality} />
      </div>
    </div>
  )
}

export default Control
