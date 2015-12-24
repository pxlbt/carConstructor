import _ from 'underscore'
import {cars, variants} from './data'

export let modelHelper = {
  variants: {
    getByID(id) {
       return _.findWhere(variants, {id})
    },
    getOptions(id) {
      return this.getByID(id).options
    }
  }
}
