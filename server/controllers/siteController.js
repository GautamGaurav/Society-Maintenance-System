import db from "../database/config.js";
import SiteQuery from "../database/site.js";

export const getSites = (request, response) => {
  try {
    db.query(SiteQuery.GET_ALL_SITES, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
      } else {
        response.send(result[0]);
      }
    });

    db.on("end", () => {
      console.log("Data received!");
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const addSite = (request, response) => {
  const siteData = request.body;
  try {
    db.query(SiteQuery.insert, siteData, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
        response.status(500).send({
          message: "Error Processing Data!",
        });
      } else {
        response.send(result);
      }
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
