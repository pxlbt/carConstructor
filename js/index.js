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
        id: 11,
        name: 'Доступные',
        value: ['red', 'blue', 'green', 'yellow'],
        _type: 'C'
      },
      {
        id: 12,
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
        id: 21,
        name: 'Доступные',
        value: ['кованые', 'литые'],
        _type: 'C'
      },
      {
        id: 22,
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
        id: 31,
        name: 'Надпись',
        _type: 'S'
      },
      {
        id: 32,
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
      setVariants() {
        _currentCar.variants = []
      },
      addVariants(id) {
        if (_.isArray(id))
          id.forEach(this.addVariants);
        else
        _currentCar.variants.push({id, options: []})
      },
      removeVariant(id) {
        let cv = _currentCar.variants;
        cv.splice(_.indexOf(cv, this.getVariant(id)), 1);
      },
      getVariant(id) {
        return _.findWhere(_currentCar.variants, {id})
      },
      getVariants() {
        return _currentCar.variants;
      },
      setOptions(vid) {
        this.getVariant(vid).options = [];
      },
      addOption2Variant(vid, oid) {
        if (_.isArray(oid))
          oid.forEach(this.addOption.bind(this, vid));
        else
          this.getVariant(vid).options.push({id:oid})
      }
    }
  }
)()
