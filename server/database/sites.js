const SiteQuery = {
  insert: `INSERT INTO sites SET ?`,
  //VALUES  (?,  ?,    ?,       ?,             ?,       ?,    ?,     ?)`,
  select: "SELECT * FROM sites",
  update: "",
  delete: "",
  GET_SITES: `CALL GET_SITES()`,
};

export default SiteQuery;
