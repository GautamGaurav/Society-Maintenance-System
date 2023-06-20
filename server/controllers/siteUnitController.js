import db from "../database/config.js";
import SiteUnitQuery from "../database/sites.js";

export const getSiteUnits = (request, response) => {
  try {
    db.query(SiteUnitQuery.GET_SITES, (err, result) => {
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
