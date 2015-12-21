import _ from 'underscore'
////model////
export let cars = [
  {
    id: 1,
    name: 'car1'
  },
  {
    id: 2,
    name: 'car2'
  },
  {
    id: 3,
    name: 'car3'
  },
  {
    id: 4,
    name: 'car4'
  }
]

export let variants = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
export let acceptVariants = (
  () => {
    let _currentCar = null;
    return {
      setCurrentCar(id) {
        _currentCar = _.findWhere(cars, {id})
      },
      getCurrentCar() {
        return _currentCar
      },
      clearVariants() {
        if (_currentCar.variantsIds) {
          _currentCar.variantsIds = []
        }
      },
      addVariant(id) {
        if (_currentCar.variantsIds === undefined)
          _currentCar.variantsIds = [];
        _currentCar.variantsIds.push(id)
      },
      addCollectionVariants(ids) {
        ids.forEach(this.addVariant);
      }
    }
  }
)()
