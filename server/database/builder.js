const BuilderQuery = {
    insert: `INSERT INTO builders (id, name, emailId, contactNumber, address, city, state, pincode)
             VALUES  (?,  ?,    ?,       ?,             ?,       ?,    ?,     ?)`,
    select: "SELECT * FROM builders",
    update: "",
    delete: ""
  };
  
  export default BuilderQuery;