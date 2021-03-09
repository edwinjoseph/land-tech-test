const companyRelations = [
  {
    companyId: 'C0001',
    name: 'Company 1',
    parent: null,
  },
  {
    companyId: 'C0002',
    name: 'Company 2',
    parent: 'C0001',
  },
  {
    companyId: 'C0003',
    name: 'Company 3',
    parent: 'C0002',
  },
  {
    companyId: 'C0004',
    name: 'Company 4',
    parent: 'C0001',
  }
];

const landOwnership = [
  {
    landId: 'L0001',
    companyId: 'C0001'
  },
  {
    landId: 'L0002',
    companyId: 'C0001'
  },
  {
    landId: 'L0003',
    companyId: 'C0002'
  },
  {
    landId: 'L0004',
    companyId: 'C0003'
  }
];

module.exports = {
  getCompany: (id) => {
    return new Promise((resolve, reject) => {
      const company = companyRelations.find(c => c.companyId === id);

      if (!company) {
        reject(null);
        return;
      }

      resolve(company);
    });
  },
  getLand: (id) => {
    return new Promise((resolve, reject) => {
      const land = landOwnership.find(l => l.landId === id);

      if (!land) {
        reject(null);
        return;
      }

      resolve(land);
    });
  },
};
