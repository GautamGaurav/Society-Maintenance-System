import db from '../database/config.js'
import builderQuery from '../database/builder.js'

export const getBuilders = (request, response) => {
  try {
    db.query(builderQuery.select, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
      } else {
        console.log("result ===> ", result);
        response.send(result);
      }
    });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const addBuilder = (request, response) => {
  try {
    db.query(builderQuery.insert, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
      } else {
        console.log("result ===> ", result);
        response.send(result);
      }
    });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
