const express = require("express");

const { getAllPlanets } = require("./plantes.controller");

const planetsRouter = express.Router();

planetsRouter.get("/planets", getAllPlanets);
