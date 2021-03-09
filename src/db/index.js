const getFromFile = require('./helpers/get-from-file');

const companyRelations = getFromFile('company_relations');
const landOwnership = getFromFile('land_ownership');

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
  getSubCompanies: (id) => {
    return new Promise((resolve, reject) => {
      const company = companyRelations.find(c => c.companyId === id);

      if (!company) {
        reject(null);
        return;
      }

      const companies = companyRelations.filter(c => c.parent === id);

      resolve(companies);
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
  getLandsByCompanyId: (id) => {
    return new Promise((resolve, reject) => {
      const company = companyRelations.find(c => c.companyId === id);
      
      if (!company) {
        reject(null);
        return;
      }

      const land = landOwnership.filter(l => l.companyId === id);
      resolve(land);
    });
  }
};