const { transformCompany } = require('./company');

const transformLand = (data) => ({
  id: data.landId,
})

module.exports = {
  getLand: async (id, db) => {
    const land = await db.getLand(id);

    if (!land) {
      throw null;
    }

    const company = await db.getCompany(land.companyId);
    const owner = transformCompany(company);

    try {
      const parentCompany = await db.getCompany(company.parent);
      owner.parent = transformCompany(parentCompany);
    } catch (err) {
      // its okay if this errors as we dont need to do anything.
    }

    return {
      ...transformLand(land),
      owner,
    }
  },
}
