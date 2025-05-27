import db from "../database/config.js";
import BuilderQuery from "../database/builder.js";

export const getBuilders = (request, response) => {
  try {
    db.query(BuilderQuery.GET_ALL, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
      } else {
        response.send(result);
      }
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const addBuilder = (request, response) => {
  try {
    db.query(BuilderQuery.INSERT, Object.values(request.body), (err, result) => {
      if (err) {
        console.log("err ===> ", err);
      } else {
        response.send(result);
      }
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
