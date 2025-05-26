const SocietyQuery = {
  ADD: `CALL ADD_SOCIETY (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  UPDATE: "CALL UPDATE_SOCIETY()",
  DELETE: "CALL DELETE_SOCIETY()",
  GET_ALL_SOCIETY: `CALL GET_ALL_SOCIETY()`,
  GET_SOCIETY_BY_ID: `CALL GET_SOCIETY_BY_ID(?)`
};

export default SocietyQuery;
