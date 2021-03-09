const transformCompany = (data) => ({
  id: data.companyId,
  name: data.name,
});

const findCompanyData = async (data, db, level = 1) => {
  const company = transformCompany(data);
  const lands = await db.getLandsByCompanyId(company.id);

  if (level === 1) {
    company.companies = await Promise.all(
      (await db.getSubCompanies(company.id))
        .map(c => findCompanyData(c, db, level + 1))
    );
  }

  return {
    ...company,
    totalLand: lands.length,
  }
}

module.exports = {
  transformCompany,
  getCompany: async (id, db) => {
    const company = await db.getCompany(id);

    if (!company) {
      throw null;
    }

    return findCompanyData(company, db);
  },
  all: async (query, db) => {
    const companies = await db.allCompanies(query);
    return companies.map(transformCompany);
  }
};
