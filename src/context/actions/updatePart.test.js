import { BAD, WARNING, GOOD, PERFECT } from '../../setup'

import { getQualityControl, buildPartData } from './updatePart'

const createControl = () => {
  return {
    id: 'test-a',
    name: 'Feat-1 - Cont-test-a',
    nominal: 10,
    normalDev: 2,
    maxDev: 4,
  }
}

const createSetup = () => {
  return [
    {
      id: 1,
      name: 'Part Name Test A',
      features: [
        {
          id: 'feat-a',
          name: 'Feature A',
          controls: [
            {
              id: 'a',
              name: 'Feat-A - Cont-A',
              nominal: 10,
              normalDev: 2,
              maxDev: 4,
            },
            {
              id: 'b',
              name: 'Feat-A - Cont-B',
              nominal: 20,
              normalDev: 1.5,
              maxDev: 4,
            },
            {
              id: 'c',
              name: 'Feat-A - Cont-C',
              nominal: 36,
              normalDev: 3,
              maxDev: 7,
            },
          ],
        },
        {
          id: 'feat-b',
          name: 'Feature B',
          controls: [
            {
              id: 'a',
              name: 'Feat-B - Cont-A',
              nominal: 10,
              normalDev: 2,
              maxDev: 5,
            },
            {
              id: 'b',
              name: 'Feat-B - Cont-B',
              nominal: 23,
              normalDev: 1.5,
              maxDev: 4,
            },
            {
              id: 'c',
              name: 'Feat-B - Cont-C',
              nominal: 36,
              normalDev: 3,
              maxDev: 7,
            },
          ],
        },
        {
          id: 'feat-c',
          name: 'Feature C',
          controls: [
            {
              id: 'a',
              name: 'Feat-C - Cont-A',
              nominal: 10,
              normalDev: 2,
              maxDev: 5,
            },
            {
              id: 'b',
              name: 'Feat-C - Cont-B',
              nominal: 20,
              normalDev: 1.5,
              maxDev: 4,
            },
            {
              id: 'c',
              name: 'Feat-C - Cont-C',
              nominal: 32,
              normalDev: 3,
              maxDev: 7,
            },
          ],
        },
      ],
    },
  ]
}

const createData = () => {
  return {
    1: {
      'feat-a': {
        a: 10,
        b: 20,
        c: 30,
      },
      'feat-b': {
        a: 10,
        b: 20,
        c: 30,
        d: 40,
      },
      'feat-c': {
        a: 10,
        b: 20,
      },
      'feat-d': {
        a: 10,
      },
    },
  }
}

const createIncorrectData = () => {
  return {
    100: {
      'feat-II': {},
    },
  }
}

test('getQualityControl PERFECT', () => {
  const control = createControl()
  const quality = getQualityControl(control, 10)

  expect(quality).toEqual(PERFECT)
})

test('getQualityControl GOOD', () => {
  const control = createControl()
  const qualityAbove = getQualityControl(control, 11)

  expect(qualityAbove).toEqual(GOOD)

  const qualityBelow = getQualityControl(control, 9)

  expect(qualityBelow).toEqual(GOOD)
})

test('getQualityControl WARNING', () => {
  const control = createControl()
  const qualityAbove = getQualityControl(control, 13)

  expect(qualityAbove).toEqual(WARNING)

  const qualityBelow = getQualityControl(control, 7)

  expect(qualityBelow).toEqual(WARNING)
})

test('getQualityControl BAD', () => {
  const control = createControl()
  const qualityAbove = getQualityControl(control, 15)

  expect(qualityAbove).toEqual(BAD)

  const qualityBelow = getQualityControl(control, 5)

  expect(qualityBelow).toEqual(BAD)
})

test('buildPartData', () => {
  const data = createData()
  const setup = createSetup()
  const PartData = buildPartData({ setup, data })

  expect(PartData.name).toEqual('Part Name Test A')

  // first feature without problems
  expect(PartData.features[0].controls[0].value).toEqual(10)
  expect(PartData.features[0].controls[1].value).toEqual(20)
  expect(PartData.features[0].controls[2].value).toEqual(30)

  // second feature no news controls created by data
  expect(PartData.features[1].controls.length).toBe(3)

  // third last value is null if this control is not updated
  expect(PartData.features[2].controls[2].value).toEqual(null)

  // no new feature created if something wrong is loaded
  expect(PartData.features.length).toBe(3)
})

test('createIncorrectData incorrectData', () => {
  const data = createIncorrectData()
  const setup = createSetup()
  const PartData = buildPartData({ setup, data })

  expect(PartData).toBe(null)
})
