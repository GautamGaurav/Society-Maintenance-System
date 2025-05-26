import db from "../database/config.js";
import SiteUnitQuery from "../database/siteUnit.js";

export const getAllSiteUnits = (request, response) => {
  try {
    db.query(SiteUnitQuery.GET_ALL_SITE_UNITS, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
      } else {
        response.send(result[0]);
      }
    });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getAllSiteUnitsBySiteId = (request, response) => {
  try {
    db.query(SiteUnitQuery.getAllSiteUnitsBySiteId, request.body, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
      } else {
        response.send(result[0]);
      }
    });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const addSiteUnit = (request, response) => {
  try {
    db.query(SiteUnitQuery.insert, request.body, (err, result) => {
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
