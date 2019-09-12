const Hobbits = require('./hobbitsModel.js');

const db = require('../data/dbConfig.js');

describe('The Hobbit Model', () => {

  beforeEach(async () => {
    await db('hobbits').truncate();
  });

  describe('the insert function', () => {
    it('should insert a new hobbit', async () => {
      //test setup
      const hobbitData = { name: 'sammy' };
      const hobbit = await Hobbits.insert(hobbitData);

      // assertion
      const hobbits = await db('hobbits');
      expect(hobbits.length).toBe(1);
      expect(hobbits[0].name).toBe('sammy');
    });

    it('should resolve to the newly created hobbit', async () => {
      //test setup
      const hobbitData = { name: 'sammy' };
      const hobbit = await Hobbits.insert(hobbitData);

      // assertion
      expect(hobbit).toEqual({id: 1, name: 'sammy' });
    });
  });
});