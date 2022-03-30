import db from '../database/config.js'

export const getSiteUnits = (request, response) => {
  const sqlSelect = "SELECT * FROM site_units";
  try {
    db.query(sqlSelect, (err, result) => {
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
