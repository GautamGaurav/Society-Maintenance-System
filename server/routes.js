const apiPath = {
  login: "/api/login",

  getOwners: "/api/owners",
  getOwnerByEmail: "/api/owner",
  addOwner: "/api/owner",

  getBuilders: "/api/builders",
  addBuilder: "/api/builder",

  getSites: "/api/sites",
  addSite: "/api/site",

  getSocieties: "/api/societies",
  addSociety: "/api/society",
  getSocietyById: "/api/society/:id",
  getSocietyDetailsById: "/api/society/:id",

  getAllSiteUnits: "/api/siteUnits",
  getAllSiteUnitsBySiteId: "/api/siteUnits/:siteId",
  addSiteUnit: "/api/siteUnit",

  getAllBudget: "/api/budgets",
  getBudgetById: "/api/budget/:id",
  getBudgetBySocietyId: "/api/budget/:societyId",
  addBudget: "/api/budget",
};

export default apiPath;
