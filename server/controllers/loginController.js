import db from "../database/config.js";
import { mapUser } from "../utils/mapper.js";

export const login = (request, response) => {
  try {
    const sqlSelect = "SELECT * FROM users WHERE email = ? AND password = ?";
    const userName = request.body.userName;
    const password = request.body.password;
    console.log("request ===> ", request.body);
    db.query(sqlSelect, [userName, password], (err, result) => {
      if (err) {
        console.log("err ===> ", err);
        response.status(400).send({
          message: "This is an error!",
        });
      } else if (result && result.length > 0) {
        const mapped = mapUser(result[0]);
        response.json(mapped);
      } else {
        response.status(500).send({
          message: "User not found!",
        });
      }
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
