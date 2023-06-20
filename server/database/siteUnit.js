const SiteUnitQuery = {
  insert: `INSERT INTO site_units SET ?`,
  //VALUES  (?,  ?,    ?,       ?,             ?,       ?,    ?,     ?)`,
  select: "SELECT * FROM site_units",
  update: "",
  delete: "",
  GET_SITE_UNITS: `CALL GET_SITE_UNITS()`,
};

export default SiteUnitQuery;
