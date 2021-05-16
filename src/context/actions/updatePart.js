import { PART_SUCCESS, PART_ERROR } from '../constants/actionTypes'

import { BAD, WARNING, GOOD, PERFECT } from '../../setup'

export const getQualityControl = (control, value) => {
  // Problem loading values ??
  if (value === null) return BAD

  // USEFUL ?
  if (value === control.nominal) {
    return PERFECT
  }

  if (
    control.nominal + control.normalDev > value &&
    control.nominal - control.normalDev < value
  ) {
    return GOOD
  }

  if (
    control.nominal + control.maxDev > value &&
    control.nominal - control.maxDev < value
  ) {
    return WARNING
  }

  return BAD
}

export const getQualityFeature = (controls) => {
  const someBad = controls.find((control) => control.quality === BAD)
  if (!!someBad) return BAD
  const someWarning = controls.find((control) => control.quality === WARNING)
  if (!!someWarning) return WARNING
  const someGood = controls.find((control) => control.quality === GOOD)
  if (!!someGood) return GOOD

  return PERFECT
}

export const buildPartData = ({ setup, data }) => {
  // load data, parse data ( combine and merge )
  // calculate dev out tolerance
  // create Dev out total
  // calculate feature quality

  const partId = Object.keys(data).length
    ? parseInt(Object.keys(data)[0])
    : null

  const template = setup.find((template) => template.id === partId)

  if (!template) return null

  return {
    ...template,
    features: template.features.map((feature) => {
      const controls = feature.controls.map((control) => {
        const value =
          data[partId][feature.id] && data[partId][feature.id][control.id]
            ? data[partId][feature.id][control.id]
            : null

        const quality = getQualityControl(control, value)

        const dev = value ? value - control.nominal : null

        const devTol =
          quality === BAD && value !== null
            ? value > control.nominal
              ? value - control.nominal - control.normalDev
              : value - control.nominal + control.normalDev
            : 0

        console.log('devTol', {
          devTol,
          quality,
          value,
          nom: control.nominal,
          dev: control.normalDev,
        })
        return {
          ...control,
          value,
          dev,
          devTol,
          quality,
        }
      })

      return {
        ...feature,
        controls,
        quality: getQualityFeature(controls),
      }
    }),
  }
}

const updatePart = ({ setup, data, dispatch }) => {
  const partData = buildPartData({ setup, data })
  if (partData) {
    dispatch({
      type: PART_SUCCESS,
      payload: partData,
    })
  } else {
    dispatch({
      type: PART_ERROR,
      payload: 'some error parsing data', // TODO
    })
  }
}

export default updatePart
