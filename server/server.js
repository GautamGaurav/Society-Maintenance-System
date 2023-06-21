import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import apiPath from "./routes.js";

import { login } from "./controllers/loginController.js";
import { getOwners, getOwnerByEmail } from "./controllers/ownerController.js";
import { getBuilders, addBuilder } from "./controllers/builderController.js";
import { getSites, addSite } from "./controllers/siteController.js";
import { getSocieties, addSociety } from "./controllers/societyController.js";
import { getSiteUnits, addSiteUnit } from "./controllers/siteUnitController.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ------- Users --------- */
app.post(apiPath.login, login);

/* ------- Owner --------- */
app.get(apiPath.getOwners, getOwners);
app.post(apiPath.getOwnerByEmail, getOwnerByEmail);

/* ------- Builders --------- */
app.get(apiPath.getBuilders, getBuilders);
app.post(apiPath.addBuilder, addBuilder);

/* ------- Sites --------- */
app.get(apiPath.getSites, getSites);
app.post(apiPath.addSite, addSite);

/* ------- Society --------- */
app.get(apiPath.getSocieties, getSocieties);
app.post(apiPath.addSociety, addSociety);

/* ------- Site Units --------- */
app.get(apiPath.getSiteUnits, getSiteUnits);
app.post(apiPath.addSiteUnit, addSiteUnit);

app.listen(3001, () => {
  console.log("running on port 3001");
});
