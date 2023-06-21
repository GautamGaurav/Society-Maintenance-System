const SocietyQuery = {
  insert: `INSERT INTO society SET ?`,
  //VALUES  (?,  ?,    ?,       ?,             ?,       ?,    ?,     ?)`,
  select: "SELECT * FROM society",
  update: "",
  delete: "",
  GET_ALL_SOCIETY: `CALL GET_ALL_SOCIETY()`,
};

export default SocietyQuery;
