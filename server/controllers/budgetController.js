import db from "../database/config.js";
import BudgetQuery from "../database/budget.js";

export const getAllBudget = async (request, response) => {
  try {
    db.query(BudgetQuery.GET_ALL_BUDGETS, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
      } else {
        response.send(result[0]);
      }
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const addBudget = async (request, response) => {
  console.log("addBudget request.body ===========>", request.body);
  try {
    db.query(BudgetQuery.ADD, Object.values(request.body), (err, result) => {
      if (err) {
        console.log("err ===> ", err);
        response.status(500).send({
          message: err.message,
        });
      } else {
        response.send(result);
      }
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getBudgetBySocietyId = async (request, response) => {
  try {
    db.query(BudgetQuery.GET_Budget_BY_ID, Object.values(request.body), (err, result) => {
      if (err) {
        console.log("err ===> ", err);
        response.status(500).send({
          message: err.message,
        });
      } else {
        response.send(result);
      }
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
