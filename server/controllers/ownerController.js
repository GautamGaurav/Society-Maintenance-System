import db from '../database/config.js'

export const getOwners = (request, response) => {
  const siteId = request.body.siteId;
  const sqlSelect = "SELECT * FROM owners";

  try {
    db.query(sqlSelect, [siteId], (err, result) => {
      if (err) {
        console.log("err ===> ", err);
        return response.status(400).send({
          message: "This is an error!",
        });
      } else {
        console.log("result ===> ", result);
        response.send(result);
      }
    });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getOwnerByEmail = (request, response) => {
  const sqlSelect = "SELECT * FROM owners WHERE email = ?";

  try {
    db.query(sqlSelect, ["gaurav.gautam17@gmail.com"], (err, result) => {
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
