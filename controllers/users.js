"use strict";

const logger = require("../utils/logger");
const trainers = require('../models/trainerslist-store');
const accounts = require ('./accounts.js');

const userDash = {
  index(request, response) {
    logger.info("trainersDash rendering");
    const loggedInUser = accounts.getCurrentUser(request);
     const viewData = {
       title: 'Trainerslist 1 TrainersDash',
       trainerslists: trainers,
    };
    response.render("users", viewData);
  },
};

module.exports = userDash;