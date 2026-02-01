import db from '../database/config.js'
import OwnerQuery from "../database/owner.js";
import { mapOwner } from "../utils/mapper.js";

export const getOwners = (request, response) => {
  try {
    db.query(OwnerQuery.GET_ALL, (err, result) => {
      if (err) {
        console.log("err ===> ", err);
        return response.status(400).send({
          message: err.message,
        });
      } else {
        const rows = Array.isArray(result) ? (result[0] || result) : result;
        const mapped = (rows || []).map((r) => mapOwner(r));
        response.json(mapped);
      }
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const addOwner = (request, response) => {
  try {
    db.query(OwnerQuery.INSERT, Object.values(request.body), (err, result) => {
      if (err) {
        console.log("err ===> ", err);
        return response.status(400).send({
          message: err.message
        });
      } else {
        response.send(result);
      }
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getOwnerByEmail = (request, response) => {
  try {
    db.query(OwnerQuery.selectOwnerByEmail, request.body, (err, result) => {
      if (err) {
        return response.status(400).send({
          message: err.message
        });
      } else {
        const rows = Array.isArray(result) ? (result[0] || result) : result;
        const mapped = (rows || []).map((r) => mapOwner(r));
        response.json(mapped);
      }
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
