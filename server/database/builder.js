const BuilderQuery = {
  INSERT: `CALL ADD_BUILDER (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  SELECT: "CALL GET_ALL_BUILDER()",
  UPDATE: "",
  DELETE: "",
  GET_ALL: "CALL GET_ALL_BUILDER()",
};

export default BuilderQuery;
