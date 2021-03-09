const db = require('test/fixtures/mocked-db');
const { getCompany } = require('src/controllers/company');

describe('src/controllers/company', () => {
  describe('#getCompany', () => {
    test('returns the full information for a company', async () => {
      await expect(getCompany('C0001', db)).resolves.toEqual({
        id: 'C0001',
        name: 'Company 1',
        totalLand: 2,
        companies: [
          {
            id: 'C0002',
            name: 'Company 2',
            totalLand: 1,
          },
          {
            id: 'C0004',
            name: 'Company 4',
            totalLand: 0,
          }
        ]
      })
    });
  })
});