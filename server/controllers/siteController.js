import SiteQuery from "../database/site.js";
import { mapSite } from "../utils/mapper.js";
import { executeQuery, executeQueryWithResults } from "../utils/dbUtils.js";

export const getSites = async (request, response) => {
  try {
    const builderId = request.query?.builderId;
    const query = builderId ? SiteQuery.GET_ALL_SITES_BY_BUILDER : SiteQuery.GET_ALL_SITES;
    const params = builderId ? [builderId] : [];
    const result = await executeQueryWithResults(query, params);
    const rows = Array.isArray(result) ? (result[0] || result) : result;
    const mapped = (rows || []).map((row) => mapSite(row));
    response.json(mapped);
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: "Error fetching sites" });
  }
};

export const addSite = async (request, response) => {
  const siteData = request.body;
  try {
    if (siteData?.id) {
      const id = siteData.id;
      const payload = { ...siteData };
      delete payload.id;
      await executeQuery(SiteQuery.UPDATE, [payload, id]);
      response.json({ message: "Site updated successfully" });
    } else {
      const result = await executeQuery(SiteQuery.INSERT, siteData);
      response.json({ message: "Site added successfully", insertId: result.insertId });
    }
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: error.message });
  }
};
