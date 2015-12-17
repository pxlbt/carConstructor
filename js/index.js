import _ from 'underscore'
////model////
let cars = [
  {
    id: _.uniqueId('car_'),
    name: 'car1'
  },
  {
    id: _.uniqueId('car_'),
    name: 'car2'
  },
  {
    id: _.uniqueId('car_'),
    name: 'car3'
  },
  {
    id: _.uniqueId('car_'),
    name: 'car4'
  }
]

let variants = [
  {
    id: _.uniqueId('variant_'),
    name: 'Цвет',
    options: [
      {
        id: _.uniqueId('o'),
        name: 'Доступные',
        value: ['red', 'blue', 'green', 'yellow'],
        _type: 'C'
      },
      {
        id: _.uniqueId('o'),
        name: 'Металик',
        _type: 'B'
      }
    ]
  },
  {
    id: _.uniqueId('variant_'),
    name: 'Диски',
    options: [
      {
        id: _.uniqueId('o'),
        name: 'Доступные',
        value: ['кованые', 'литые'],
        _type: 'C'
      },
      {
        id: _.uniqueId('o'),
        name: 'Размер',
        value: [15,16,17],
        _type: 'С'
      }
    ]
  },
  {
    id: _.uniqueId('variant_'),
    name: 'Наклеечка на лобовое',
    options: [
      {
        id: _.uniqueId('o'),
        name: 'Надпись',
        _type: 'S'
      },
      {
        id: _.uniqueId('o'),
        name: 'Цветная?',
        _type: 'B'
      }
    ]
  }
]

////controllers////
let acceptVariants = (
  () => {
    return {
      
    }
  }
)()
