const setupPartC = {
  id: 3,
  name: 'Part Name C',
  layout: [
    {
      id: 1,
      size: 4,
      column: ['feat-a', 'feat-b', 'feat-c', 'feat-d'],
    },
    {
      id: 2,
      size: 1,
      column: ['feat-e', 'feat-f'],
    },
  ],
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
          maxDev: 2.5,
        },
        {
          id: 'b',
          name: 'Feat-A - Cont-B',
          nominal: 30,
          normalDev: 4,
          maxDev: 4.5,
        },
        {
          id: 'c',
          name: 'Feat-A - Cont-C',
          nominal: 36,
          normalDev: 3,
          maxDev: 3.5,
        },
        {
          id: 'd',
          name: 'Feat-A - Cont-D',
          nominal: 26,
          normalDev: 3,
          maxDev: 3.6,
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
          maxDev: 2.5,
        },
        {
          id: 'b',
          name: 'Feat-B - Cont-B',
          nominal: 30,
          normalDev: 1.5,
          maxDev: 1.9,
        },
        {
          id: 'c',
          name: 'Feat-B - Cont-C',
          nominal: 16,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'd',
          name: 'Feat-B - Cont-D',
          nominal: 26,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'e',
          name: 'Feat-B - Cont-E',
          nominal: 36,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'f',
          name: 'Feat-B - Cont-F',
          nominal: 46,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'g',
          name: 'Feat-B - Cont-G',
          nominal: 55,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'h',
          name: 'Feat-B - Cont-H',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
        },
        {
          id: 'i',
          name: 'Feat-B - Cont-I',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
        },
        {
          id: 'j',
          name: 'Feat-B - Cont-J',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
        },
        {
          id: 'k',
          name: 'Feat-B - Cont-K',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
        },
        {
          id: 'l',
          name: 'Feat-B - Cont-L',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
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
          maxDev: 2.5,
        },
        {
          id: 'b',
          name: 'Feat-C - Cont-B',
          nominal: 30,
          normalDev: 1.5,
          maxDev: 2,
        },
        {
          id: 'c',
          name: 'Feat-C - Cont-C',
          nominal: 16,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'd',
          name: 'Feat-C - Cont-D',
          nominal: 26,
          normalDev: 3,
          maxDev: 3.7,
        },
      ],
    },
    {
      id: 'feat-d',
      name: 'Feature D',
      controls: [
        {
          id: 'a',
          name: 'Feat-D - Cont-A',
          nominal: 10,
          normalDev: 2,
          maxDev: 2.5,
        },
        {
          id: 'b',
          name: 'Feat-D - Cont-B',
          nominal: 30,
          normalDev: 1.5,
          maxDev: 1.9,
        },
        {
          id: 'c',
          name: 'Feat-D - Cont-C',
          nominal: 16,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'd',
          name: 'Feat-D - Cont-D',
          nominal: 26,
          normalDev: 3,
          maxDev: 3.7,
        },
      ],
    },
    {
      id: 'feat-e',
      name: 'Feature E',
      controls: [
        {
          id: 'a',
          name: 'Feat-E - Cont-A',
          nominal: 10,
          normalDev: 2,
          maxDev: 2.5,
        },
        {
          id: 'b',
          name: 'Feat-E - Cont-B',
          nominal: 30,
          normalDev: 1.5,
          maxDev: 1.8,
        },
        {
          id: 'c',
          name: 'Feat-E - Cont-C',
          nominal: 16,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'd',
          name: 'Feat-E - Cont-D',
          nominal: 26,
          normalDev: 3,
          maxDev: 3.7,
        },
      ],
    },
    {
      id: 'feat-f',
      name: 'Feature F',
      controls: [
        {
          id: 'a',
          name: 'Feat-F - Cont-A',
          nominal: 10,
          normalDev: 2,
          maxDev: 2.4,
        },
        {
          id: 'b',
          name: 'Feat-F - Cont-B',
          nominal: 30,
          normalDev: 1.5,
          maxDev: 2,
        },
        {
          id: 'c',
          name: 'Feat-F - Cont-C',
          nominal: 16,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'd',
          name: 'Feat-F - Cont-D',
          nominal: 26,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'e',
          name: 'Feat-F - Cont-E',
          nominal: 36,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'f',
          name: 'Feat-F - Cont-F',
          nominal: 46,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'g',
          name: 'Feat-F - Cont-G',
          nominal: 55,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'h',
          name: 'Feat-F - Cont-H',
          nominal: 50,
          normalDev: 5,
          maxDev: 3.9,
        },
        {
          id: 'i',
          name: 'Feat-F - Cont-I',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
        },
        {
          id: 'j',
          name: 'Feat-F - Cont-J',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
        },
        {
          id: 'k',
          name: 'Feat-F - Cont-K',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
        },
        {
          id: 'l',
          name: 'Feat-F - Cont-L',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
        },
        {
          id: 'm',
          name: 'Feat-F - Cont-M',
          nominal: 46,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'n',
          name: 'Feat-F - Cont-N',
          nominal: 55,
          normalDev: 3,
          maxDev: 3.7,
        },
        {
          id: 'o',
          name: 'Feat-F - Cont-O',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
        },
        {
          id: 'p',
          name: 'Feat-F - Cont-P',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
        },
        {
          id: 'q',
          name: 'Feat-F - Cont-Q',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
        },
        {
          id: 'r',
          name: 'Feat-F - Cont-R',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
        },
        {
          id: 's',
          name: 'Feat-F - Cont-S',
          nominal: 50,
          normalDev: 5,
          maxDev: 5.9,
        },
      ],
    },
  ],
}

export default setupPartC
