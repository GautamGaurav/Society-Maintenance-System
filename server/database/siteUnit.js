const SiteUnitQuery = {
  insert: `INSERT INTO site_unit SET ?`,
  select: "SELECT * FROM site_units",
  update: "",
  delete: "",
  GET_ALL_SITE_UNITS: `CALL GET_ALL_SITE_UNITS()`,
};

export default SiteUnitQuery;
