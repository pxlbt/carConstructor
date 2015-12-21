import {expect} from 'chai';

describe('application logic', () => {

  describe('setEntries', () => {

    it('adds the entries to the state', () => {

      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    });
  });
});
