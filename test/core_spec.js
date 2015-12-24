import {expect, assert} from 'chai';
import _ from 'underscore';
import {carController, Car} from '../js/controllers/car';
import {cars, variants} from '../js/model/data';

describe('application logic', () => {
  describe('test acceptVariants', () => {
    let currCar, _acceptVariants;
    before(function() {
      _acceptVariants = carController(1);
      currCar = _acceptVariants.getCurrentCar();
    });


    describe('связка car && variants', () => {
      afterEach(function() {
        _acceptVariants.setVariants();
      });

      it('проверка текущей car', () => {
        assert.strictEqual(currCar, cars[0])
      })

      it('добавить вариант комплектации к car', () => {
        _acceptVariants.addVariants(1)
        assert.deepEqual(_acceptVariants.getVariants(), [{id: 1, options: []}])
      });

      it('добавить много вариантов к car', () => {
        _acceptVariants.addVariants([1,3])
        assert.deepEqual(_acceptVariants.getVariants(), [{id: 1, options: []}, {id: 3, options: []}])
      });

      it('удалить вариант у car', () => {
        _acceptVariants.addVariants([1,3]);
        _acceptVariants.removeVariant(3);
        assert.deepEqual(_acceptVariants.getVariants(), [{id: 1, options: []}])
      });
    });

    describe('получение данных у car', () => {
      afterEach(function() {
        _acceptVariants.setVariants();
      });
      it('получить вариант у car', () => {
        _acceptVariants.addVariants(3);
        assert.deepEqual(_acceptVariants.getVariants(3), {id: 3, options: []});
      })
    })

    describe('связка car && variant options', () => {
      before(() => {
        _acceptVariants.addVariants(3);
      })

      afterEach(function() {
        _acceptVariants.setOptions(3);
      });

      it('добавить опции к variant', () => {
        _acceptVariants.addOption2Variant(3, [31,32])
        assert.deepEqual(_acceptVariants.getOptions(3), [{id: 31},{id: 32}]);
      })
    })
  })

  describe('проверка car object', () => {
    let car;
    before(function() {
      car = new Car(2);
    });

    it('проверка new car', () => {
      assert.deepEqual(car.getData(),cars[1]);
    })

    it('добавить variant со всеми опциями', () => {
      car.addCompleteVariant(1);
      assert.deepEqual(car.getVariants(1), {id: 1, options: [{id: 11},{id: 12}]});
    })
  })
});
