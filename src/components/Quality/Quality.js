import classNames from 'classnames'
import PropTypes from 'prop-types'
import { PERFECT, GOOD, WARNING, BAD } from '../../setup'

import good from '../../assets/icons/good.svg'
import warning from '../../assets/icons/warning.svg'
import bad from '../../assets/icons/bad.svg'

import './Quality.scss'

const getIcon = (quality) => {
  if (quality === BAD) return bad
  if (quality === WARNING) return warning

  return good
}

const Quality = ({ quality, size }) => {
  return (
    <img
      className={classNames('quality', quality)}
      src={getIcon(quality)}
      alt={quality}
      style={{
        width: size,
        height: size,
      }}
    />
  )
}

Quality.propTypes = {
  quality: PropTypes.oneOf([PERFECT, GOOD, WARNING, BAD]).isRequired,
  size: PropTypes.number,
}

Quality.defaultProps = {
  size: 14,
}

export default Quality
