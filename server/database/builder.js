const BuilderQuery = {
  insert: `INSERT INTO builders SET ?`,
  //VALUES  (?,  ?,    ?,       ?,             ?,       ?,    ?,     ?)`,
  select: "SELECT * FROM builders",
  update: "",
  delete: "",
};

export default BuilderQuery;
