import BudgetQuery from "../database/budget.js";
import { mapObjectKeysToCamel } from "../utils/mapper.js";
import { executeQuery, executeQueryWithResults } from "../utils/dbUtils.js";

export const getAllBudget = async (request, response) => {
  try {
    const result = await executeQueryWithResults(BudgetQuery.GET_ALL_BUDGETS);
    const rows = Array.isArray(result) ? (result[0] || result) : result;
    const mapped = (rows || []).map((r) => mapObjectKeysToCamel(r));
    response.json(mapped);
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: error.message });
  }
};

export const addBudget = async (request, response) => {
  console.log("addBudget request.body ===========>", request.body);
  try {
    await executeQuery(BudgetQuery.ADD, Object.values(request.body));
    response.json({ message: "Budget added successfully" });
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: error.message });
  }
};

export const getBudgetById = async (request, response) => {
  try {
    const result = await executeQueryWithResults(BudgetQuery.GET_BUDGET_BY_ID, Object.values(request.params));
    const rows = Array.isArray(result) ? (result[0] || result) : result;
    const mapped = (rows || []).map((r) => mapObjectKeysToCamel(r));
    response.json(mapped);
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: error.message });
  }
};


export const getBudgetBySocietyId = async (request, response) => {
  try {
    const result = await executeQueryWithResults(BudgetQuery.GET_BUDGET_BY_SOCIETY_ID, Object.values(request.params));
    const rows = Array.isArray(result) ? (result[0] || result) : result;
    const mapped = (rows || []).map((r) => mapObjectKeysToCamel(r));
    response.json(mapped);
  } catch (error) {
    console.log("err ===> ", error);
    response.status(500).json({ message: error.message });
  }
};
