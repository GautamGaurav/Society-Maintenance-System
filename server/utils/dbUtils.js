import db from "../database/config.js";

const queryPromise = (query, params = []) =>
    new Promise((resolve, reject) => {
        db.query(query, params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });

export const executeQuery = (query, params = []) => queryPromise(query, params);
export const executeQueryWithResults = (query, params = []) => queryPromise(query, params);