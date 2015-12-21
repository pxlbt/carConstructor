import {expect, assert} from 'chai';
import {cars, variants, acceptVariants} from '../js/index';

describe('application logic', () => {

  describe('connect variants && cars', () => {
    let currCar;
    beforeEach(function() {
      acceptVariants.setCurrentCar(1);
      acceptVariants.clearVariants();
      currCar = acceptVariants.getCurrentCar();
    });

    it('check current car', () => {
      assert.strictEqual(currCar, cars[0])
    })

    it('add one variant to car', () => {
      acceptVariants.addVariant(1)
      assert.deepEqual(currCar.variantsIds, [1])
    });

    it('add many variants to car', () => {
      acceptVariants.addCollectionVariants([1,3])
      assert.deepEqual(currCar.variantsIds, [1,3])
    });
  });
});
