import db from '../database/config.js'

export const getSites = (request, response) => {
  const sqlSelect = "SELECT * FROM sites";

  try {
    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
      } else {
        console.log("result ===> ", result);
        response.send(result);
      }
    });

    db.on("end", () => {
      console.log("Data received!");
    });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const addSite = (request, response) => {
  try {
    const siteName = request.body.siteName;
    const address = request.body.address;
    const societyPresidentName = request.body.societyPresidentName;
    const builderName = request.body.builderName;
    const city = request.body.city;
    const state = request.body.state;
    const pincode = request.body.pincode;
    const sqlInsert =
      "INSERT INTO sites (name, address, societyPresidentName, builderName, city, state, pincode) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(
      sqlInsert,
      [
        siteName,
        address,
        societyPresidentName,
        builderName,
        city,
        state,
        pincode,
      ],
      (err, result) => {
        if (err) {
          console.log("err ===> ", err);
          response.status(404).send({
            message: "Error Processing Data!",
          });
        } else {
          response.status(200).send({
            message: siteName + " inserted successfully!",
          });
          response.send(result);
        }
      }
    );
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
