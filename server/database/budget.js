const BudgetQuery = {
  ADD: `CALL ADD_BUDGET (?, ?, ?, ?, ?, ?)`,
  UPDATE: "CALL UPDATE_BUDGET()",
  DELETE: "CALL DELETE_BUDGET()",
  GET_ALL_BUDGETS: `CALL GET_ALL_BUDGETS()`,
  GET_BUDGET_BY_SOCIETY_ID: `CALL GET_BUDGET_BY_SOCIETY_ID (?)`,
};

export default BudgetQuery;
