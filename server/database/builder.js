const BuilderQuery = {
  INSERT: `CALL ADD_BUILDER (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  SELECT: "SELECT * FROM builder",
  UPDATE: "",
  DELETE: "",
  GET_ALL: "SELECT * FROM builder",
};

export default BuilderQuery;
