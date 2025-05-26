const SiteQuery = {
  INSERT: `INSERT INTO site SET ?`,
  SELECT: `SELECT * FROM site`,
  UPDATE: "",
  DELETE: "",
  GET_ALL_SITES: `CALL GET_ALL_SITES()`,
};

export default SiteQuery;
