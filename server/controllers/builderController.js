import db from "../database/config.js";
import BuilderQuery from "../database/builder.js";
import { mapBuilder } from "../utils/mapper.js";

export const getBuilders = (request, response) => {
  try {
    db.query(BuilderQuery.GET_ALL, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
      } else {
        const rows = Array.isArray(result) ? (result[0] || result) : result;
        const mapped = (rows || []).map((r) => mapBuilder(r));
        response.json(mapped);
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
