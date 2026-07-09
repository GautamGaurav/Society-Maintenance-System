import { mapUser } from "../utils/mapper.js";
import { executeQueryWithResults } from "../utils/dbUtils.js";

export const login = async (request, response) => {
  try {
    const sqlSelect = "SELECT * FROM users WHERE email = ? AND password = ?";
    const userName = request.body.userName;
    const password = request.body.password;
    console.log("request ===> ", request.body);
    const result = await executeQueryWithResults(sqlSelect, [userName, password]);
    if (result && result.length > 0) {
      const mapped = mapUser(result[0]);
      response.json(mapped);
    } else {
      response.status(500).send({
        message: "User not found!",
      });
    }
  } catch (error) {
    console.log("err ===> ", error);
    response.status(400).send({
      message: error.message,
    });
  }
};
