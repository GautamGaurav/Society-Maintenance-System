import BuilderQuery from "../database/builder.js";
import { mapBuilder } from "../utils/mapper.js";
import { executeQuery, executeQueryWithResults } from "../utils/dbUtils.js";

export const getBuilders = async (request, response) => {
  try {
    const result = await executeQueryWithResults(BuilderQuery.GET_ALL);
    const rows = Array.isArray(result) ? (result[0] || result) : result;
    const mapped = (rows || []).map((r) => mapBuilder(r));
    response.json(mapped);
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: error.message });
  }
};

export const addBuilder = async (request, response) => {
  try {
    await executeQuery(BuilderQuery.INSERT, Object.values(request.body));
    response.json({ message: "Builder added successfully" });
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: error.message });
  }
};
