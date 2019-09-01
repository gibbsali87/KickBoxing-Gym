"use strict";

const logger = require("../utils/logger");
const goallistStore  = require('../models/goallist-store')
const accounts = require ('./accounts.js');

const goalDash = {
  index(request, response) {
    logger.info("goalDash rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
       title: 'Goal List Dashboard',
       goallists: goallistStore.getAllGoallists(),
    };
    logger.info('about to render', goallistStore.getAllGoallists());
    response.render("goalDash", viewData);
  },
  
    addGoallist(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newGoalList = {
      id: uuid(),
      userid: loggedInUser.id,
      title: request.body.title,
      goals: [],
    };
    logger.debug('Creating a new Goallist', newGoalList);
    goallistStore.addGoallist(newGoalList);
    response.redirect('/goalDash');
  }
};

module.exports = goalDash;