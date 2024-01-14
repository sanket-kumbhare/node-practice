const planets = require("../../models/planets.model");

function getAllPlanets(res, req) {
  return res.status(200).json();
}

module.exports = {
  getAllPlanets,
};