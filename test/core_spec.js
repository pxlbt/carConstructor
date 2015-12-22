import {expect, assert} from 'chai';
import {cars, variants, acceptVariants} from '../js/index';

describe('application logic', () => {
  let currCar;

  before(function() {
      acceptVariants.setCurrentCar(1);
      currCar = acceptVariants.getCurrentCar();
  });


  describe('связка car && variants', () => {
    afterEach(function() {
      acceptVariants.setVariants();
    });
    it('проверка текущей car', () => {
      assert.strictEqual(currCar, cars[0])
    })

    it('добавить вариант комплектации к car', () => {
      acceptVariants.addVariants(1)
      assert.deepEqual(acceptVariants.getVariants(), [{id: 1, options: []}])
    });

    it('добавить много вариантов к car', () => {
      acceptVariants.addVariants([1,3])
      assert.deepEqual(acceptVariants.getVariants(), [{id: 1, options: []}, {id: 3, options: []}])
    });

    it('удалить вариант у car', () => {
      acceptVariants.addVariants([1,3]);
      acceptVariants.removeVariant(3);
      assert.deepEqual(acceptVariants.getVariants(), [{id: 1, options: []}])
    });
  });

  describe('получение данных у car', () => {
    afterEach(function() {
      acceptVariants.setVariants();
    });
    it('получить вариант у car', () => {
      acceptVariants.addVariants(3);
      assert.deepEqual(acceptVariants.getVariant(3), {id: 3, options: []});
    })
  })

  describe('связка car && variant options', () => {
    before(() => {
      acceptVariants.addVariants(3);
    })

    afterEach(function() {
      acceptVariants.setOptions(3);
    });

    it('добавить опцию к variant', () => {
      acceptVariants.addOption2Variant(3, 31)
      assert.deepEqual(acceptVariants.getVariant(3), {id: 3, options: [{id: 31}]});
    })

    it('добавить опции к variant', () => {
      acceptVariants.addOption2Variant(3, [31,32])
      assert.deepEqual(acceptVariants.getVariant(3), {id: 3, options: [{id: 31},{id: 32}]});
    })
  })
});
