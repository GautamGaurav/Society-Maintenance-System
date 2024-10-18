const OwnerQuery = {
  GET_ALL: `CALL GET_OWNERS()`,
  INSERT: `CALL ADD_OWNER (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  SELECT: "SELECT * FROM owner",
  SELECT_OWNER_BY_EMAIL: "SELECT * FROM owner WHERE email = ?",
  UPDATE: "",
  DELETE: ""
};

export default OwnerQuery;