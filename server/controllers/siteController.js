import db from "../database/config.js";
import SiteQuery from "../database/sites.js";

export const getSites = (request, response) => {
  try {
    db.query(SiteQuery.GET_SITES, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
      } else {
        console.log("result ===> ", result);
        response.send(result[0]);
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
  const siteData = request.body;
  try {
    db.query(SiteQuery.insert, siteData, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
        response.status(404).send({
          message: "Error Processing Data!",
        });
      } else {
        response.send(result);
      }
    });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
