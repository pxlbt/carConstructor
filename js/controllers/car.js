import _ from 'underscore'
////model////
import {cars}  from '../model/data'
import {modelHelper} from '../model/helper'

export let carController = (
  (id) => {
    let _currentCar = _.findWhere(cars, {id});
    let setVariants = () => {
      _currentCar.variants = []
    }
    setVariants()

    return {
      getCurrentCar() {
        return _currentCar
      },
      addVariants(id) {
        if (_.isArray(id))
          id.forEach(this.addVariants);
        else
        _currentCar.variants.push({id, options: []})
      },
      removeVariant(id) {
        let cv = _currentCar.variants;
        cv.splice(_.indexOf(cv, this.getVariants(id)), 1);
      },
      getVariants(id) {
        if (id)
          return _.findWhere(_currentCar.variants, {id})
        else {
          return _currentCar.variants;
        }
      },
      setOptions(vid) {
        this.getVariants(vid).options = [];
      },
      getOptions(vid) {
        return this.getVariants(vid).options
      },
      addOption2Variant(vid, oid) {
        if (_.isArray(oid))
          oid.forEach(this.addOption2Variant.bind(this, vid));
        else
          this.getVariants(vid).options.push({id:oid})
      },
      setVariants: setVariants
    }
  }
)

export class Car {
  constructor(car_id) {
    this.car_id = car_id
    this.acceptHelper = carController(this.car_id)
  }
  addCompleteVariant(id) {
    this.acceptHelper.addVariants(id)
    this.acceptHelper.addOption2Variant(id, modelHelper.variants.getOptions(id).map(item => item.id));
  }
  getData() {
    return this.acceptHelper.getCurrentCar()
  }
  getVariants(id) {
    return this.acceptHelper.getVariants(id)
  }
}
