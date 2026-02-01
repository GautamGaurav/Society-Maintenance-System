import db from "../database/config.js";
import SiteQuery from "../database/site.js";
import { mapSite } from "../utils/mapper.js";
export const getSites = (request, response) => {
    try {
        const builderId = request.query?.builderId;
        if (builderId) {
            db.query(SiteQuery.SELECT_BY_BUILDER, [builderId], (err, result) => {
                if (err) {
                    console.log("err ===> ", err);
                    response.status(500).json({ message: "Error fetching sites" });
                }
                else {
                    const rows = Array.isArray(result) ? (result[0] || result) : result;
                    const mapped = (rows || []).map((r) => mapSite(r));
                    response.json(mapped);
                }
            });
        }
        else {
            db.query(SiteQuery.GET_ALL_SITES, (err, result) => {
                if (err) {
                    console.log("err ===> ", err);
                    response.status(500).json({ message: "Error fetching sites" });
                }
                else {
                    const rows = Array.isArray(result) ? (result[0] || result) : result;
                    const mapped = (rows || []).map((r) => mapSite(r));
                    response.json(mapped);
                }
            });
        }
        db.on("end", () => {
            console.log("Data received!");
        });
    }
    catch (error) {
        response.status(500).json({ message: error.message });
    }
};
export const addSite = (request, response) => {
    const siteData = request.body;
    try {
        // If id is present, perform update
        if (siteData?.id) {
            const id = siteData.id;
            const payload = { ...siteData };
            delete payload.id;
            db.query(SiteQuery.UPDATE, [payload, id], (err, result) => {
                if (err) {
                    console.log("err ===> ", err);
                    response.status(500).send({ message: "Error Updating Site" });
                }
                else {
                    response.send({ message: "Site updated successfully" });
                }
            });
        }
        else {
            db.query(SiteQuery.INSERT, siteData, (err, result) => {
                if (err) {
                    console.log("err ===> ", err);
                    response.status(500).send({ message: "Error Adding Site" });
                }
                else {
                    response.send({ message: "Site added successfully", insertId: result.insertId });
                }
            });
        }
    }
    catch (error) {
        response.status(500).json({ message: error.message });
    }
};
