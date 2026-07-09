import SocietyQuery from "../database/society.js";
import { mapSociety } from "../utils/mapper.js";
import { executeQuery, executeQueryWithResults } from "../utils/dbUtils.js";

export const getSocieties = async (request, response) => {
  try {
    const result = await executeQueryWithResults(SocietyQuery.GET_ALL_SOCIETY);
    const rows = Array.isArray(result) ? (result[0] || result) : result;
    const mapped = (rows || []).map((r) => mapSociety(r));
    response.json(mapped);
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: error.message });
  }
};

export const addSociety = async (request, response) => {
  try {
    const result = await executeQuery(SocietyQuery.ADD, Object.values(request.body));
    response.json({ message: "Society added successfully", insertId: result.insertId });
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: error.message });
  }
};

export const getSocietyById = async (request, response) => {
  try {
    const result = await executeQueryWithResults(SocietyQuery.GET_SOCIETY_BY_ID, Object.values(request.body));
    const rows = Array.isArray(result) ? (result[0] || result) : result;
    const mapped = (rows || []).map((r) => mapSociety(r));
    response.json(mapped);
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).send({
      message: "Error Processing Data!",
    });
  }
};

export const getSocietyDetailsById = async (request, response) => {
  console.log("request.body ==================> ", request.params)
  try {
    const result = await executeQueryWithResults(SocietyQuery.GET_SOCIETY_DETAILS_BY_ID, Object.values(request.params));
    console.log("result ===========> ", result[0][0])
    const item = result && result[0] && result[0][0] ? mapSociety(result[0][0]) : null;
    response.json(item);
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).send({
      message: "Error Processing Data!",
    });
  }
};