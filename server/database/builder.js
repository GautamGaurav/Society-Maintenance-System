const BuilderQuery = {
  insert: `CALL add_builder (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  select: "SELECT * FROM builder",
  update: "",
  delete: "",
};

export default BuilderQuery;
