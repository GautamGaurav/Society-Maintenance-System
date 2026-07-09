import OwnerQuery from "../database/owner.js";
import { mapOwner } from "../utils/mapper.js";
import { executeQuery, executeQueryWithResults } from "../utils/dbUtils.js";

export const getOwners = async (request, response) => {
  try {
    const result = await executeQueryWithResults(OwnerQuery.GET_ALL);
    const rows = Array.isArray(result) ? (result[0] || result) : result;
    const mapped = (rows || []).map((r) => mapOwner(r));
    response.json(mapped);
  } catch (error) {
    console.log("err ===> ", error);
    response.status(400).send({
      message: error.message,
    });
  }
};

export const addOwner = async (request, response) => {
  try {
    await executeQuery(OwnerQuery.INSERT, Object.values(request.body));
    response.json({ message: "Owner added successfully" });
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: error.message });
  }
};

export const getOwnerByEmail = async (request, response) => {
  try {
    const result = await executeQueryWithResults(OwnerQuery.selectOwnerByEmail, request.body);
    const rows = Array.isArray(result) ? (result[0] || result) : result;
    const mapped = (rows || []).map((r) => mapOwner(r));
    response.json(mapped);
  } catch (error) {
    response.status(400).send({
      message: error.message
    });
  }
};
