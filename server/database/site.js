const SiteQuery = {
  INSERT: `INSERT INTO site SET ?`,
  SELECT: `SELECT * FROM site`,
  SELECT_BY_BUILDER: `SELECT * FROM site WHERE builder = ?`,
  UPDATE: `UPDATE site SET ? WHERE id = ?`,
  DELETE: "",
  GET_ALL_SITES: `CALL GET_ALL_SITES()`,
  GET_ALL_SITES_BY_BUILDER: `CALL GET_ALL_SITES_BY_BUILDER(?)`,
};

export default SiteQuery; 
