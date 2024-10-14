const SiteQuery = {
  insert: `INSERT INTO site SET ?`,
  //VALUES  (?,  ?,    ?,       ?,             ?,       ?,    ?,     ?)`,
  select: "SELECT * FROM site",
  update: "",
  delete: "",
  GET_ALL_SITES: `CALL GET_ALL_SITES()`,
};

export default SiteQuery;
