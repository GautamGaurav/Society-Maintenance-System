import db from "../database/config.js";
import SocietyQuery from "../database/society.js";

export const getSocieties = async (request, response) => {
  try {
    db.query(SocietyQuery.GET_ALL_SOCIETY, (err, result) => {
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

export const addSociety = async (request, response) => {
  try {
    db.query(SocietyQuery.ADD, Object.values(request.body), (err, result) => {
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

export const getSocietyById = async (request, response) => {
  try {
    db.query(SocietyQuery.GET_SOCIETY_BY_ID, Object.values(request.body), (err, result) => {
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

export const getSocietyDetailsById = async (request, response) => {
  console.log("request.body ==================> ", request.params)
  try {
    db.query(SocietyQuery.GET_SOCIETY_DETAILS_BY_ID, Object.values(request.params), (err, result) => {
      if (err) {
        console.log("err ===> ", err);
        response.status(500).send({
          message: "Error Processing Data!",
        });
      } else {
        console.log("result ===========> ", result[0][0])
        response.send(result[0][0]);
      }
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};