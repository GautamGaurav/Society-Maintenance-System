import SiteUnitQuery from "../database/siteUnit.js";
import { mapSiteUnit } from "../utils/mapper.js";
import { executeQuery, executeQueryWithResults } from "../utils/dbUtils.js";

export const getAllSiteUnits = async (request, response) => {
  try {
    const result = await executeQueryWithResults(SiteUnitQuery.GET_ALL_SITE_UNITS);
    const rows = Array.isArray(result) ? (result[0] || result) : result;
    const mapped = (rows || []).map((row) => mapSiteUnit(row));
    response.json(mapped);
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: error.message });
  }
};

export const getAllSiteUnitsBySiteId = async (request, response) => {
  try {
    const siteId = request.params?.siteId;
    if (!siteId) {
      return response.status(400).json({ message: 'siteId is required' });
    }

    const result = await executeQueryWithResults(SiteUnitQuery.GET_SITE_UNITS_BY_SITE, [siteId]);
    const rows = Array.isArray(result) ? (result[0] || result) : result;
    const mapped = (rows || []).map((row) => mapSiteUnit(row));
    response.json(mapped);
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: 'Error fetching site units for site' });
  }
};

export const addSiteUnit = async (request, response) => {
  try {
    const siteUnitData = request.body;
    const result = await executeQuery(SiteUnitQuery.INSERT, Object.values(siteUnitData));
    response.json({ message: "Site unit added successfully", insertId: result.insertId });
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: error.message });
  }
};
