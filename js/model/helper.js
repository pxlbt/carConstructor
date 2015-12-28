import _ from 'underscore'
import {cars, variants} from './data'

export let modelHelper = {
  variants: {
    getAll() {
      return variants
    },
    getByID(id) {
       return _.findWhere(variants, {id})
    },
    getOptions(id) {
      return this.getByID(id).options
    },
    getOptionVariant(id) {
      let vid;
      variants.some((item) => {
        if (_.findWhere(item.options, {id}))
          vid = item.id;
        return vid;
      })
      return vid
    }
  },
  cars: {
    getAll() {
      return cars
    },
    getByID() {
      return _.findWhere(cars, {id})
    }
  }
}
