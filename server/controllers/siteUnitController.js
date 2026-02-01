import db from "../database/config.js";
import SiteUnitQuery from "../database/siteUnit.js";
import { mapSiteUnit } from "../utils/mapper.js";

export const getAllSiteUnits = (request, response) => {
  try {
    db.query(SiteUnitQuery.GET_ALL_SITE_UNITS, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
      } else {
        const rows = Array.isArray(result) ? (result[0] || result) : result;
        const mapped = (rows || []).map((r) => mapSiteUnit(r));
        response.json(mapped);
      }
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getAllSiteUnitsBySiteId = (request, response) => {
  try {
    const siteId = request.params?.siteId;
    if (!siteId) {
      return response.status(400).json({ message: 'siteId is required' });
    }

    db.query(SiteUnitQuery.GET_SITE_UNITS_BY_SITE, [siteId], (err, result) => {
      if (err) {
        console.log("err ===> ", err);
        response.status(500).json({ message: 'Error fetching site units for site' });
      } else {
        const rows = Array.isArray(result) ? (result[0] || result) : result;
        const mapped = (rows || []).map((r) => mapSiteUnit(r));
        response.json(mapped);
      }
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const addSiteUnit = (request, response) => {
  try {
    db.query(SiteUnitQuery.INSERT, Object.values(request.body), (err, result) => {
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
