import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import apiPath from "./routes.js";

import { login } from "./controllers/loginController.js";
import { getOwners, addOwner } from "./controllers/ownerController.js";
import { getBuilders, addBuilder } from "./controllers/builderController.js";
import { getSites, addSite } from "./controllers/siteController.js";
import { getSocieties, addSociety, getSocietyDetailsById } from "./controllers/societyController.js";
import { getAllSiteUnits, addSiteUnit, getAllSiteUnitsBySiteId } from "./controllers/siteUnitController.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ------- Users --------- */
app.post(apiPath.login, login);

/* ------- Owner --------- */
app.get(apiPath.getOwners, getOwners);
app.post(apiPath.addOwner, addOwner);

/* ------- Builders --------- */
app.get(apiPath.getBuilders, getBuilders);
app.post(apiPath.addBuilder, addBuilder);

/* ------- Sites --------- */
app.get(apiPath.getSites, getSites);
app.post(apiPath.addSite, addSite);

/* ------- Society --------- */
app.get(apiPath.getSocieties, getSocieties);
app.post(apiPath.addSociety, addSociety);
app.get(apiPath.getSocietyDetailsById, getSocietyDetailsById);

/* ------- Site Units --------- */
app.get(apiPath.getAllSiteUnits, getAllSiteUnits);
app.post(apiPath.addSiteUnit, addSiteUnit);
app.get(apiPath.getAllSiteUnitsBySiteId, getAllSiteUnitsBySiteId);


app.listen(3001, () => {
  console.log("running on port 3001");
});
