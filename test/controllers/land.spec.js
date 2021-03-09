const db = require('test/fixtures/mocked-db');
const { getLand } = require('src/controllers/land');

describe('src/controllers/land', () => {
  describe('#getLand', () => {
    test('returns the full information for a land', async () => {
      await expect(getLand('L0001', db)).resolves.toEqual({
        id: 'L0001',
        owner: {
          id: 'C0001',
          name: 'Company 1',
        },
      });
      await expect(getLand('L0003', db)).resolves.toEqual({
        id: 'L0003',
        owner: {
          id: 'C0002',
          name: 'Company 2',
          parent: {
            id: 'C0001',
            name: 'Company 1',
          }
        },
      });
    });
  })
});
