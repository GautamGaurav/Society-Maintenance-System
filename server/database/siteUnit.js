const SiteUnitQuery = {
  INSERT: `INSERT INTO site_unit SET ?`,
  SELECT: "SELECT * FROM site_units",
  UPDATE: "",
  DELETE: "",
  GET_ALL_SITE_UNITS: `CALL GET_ALL_SITE_UNITS()`,
  GET_SITE_UNITS_BY_SITE: `CALL GET_SITE_UNITS_BY_SITE (?)`,

};

export default SiteUnitQuery;
