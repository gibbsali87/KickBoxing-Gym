"use strict";

const logger = require("../utils/logger");
const assessmentlistCollection = require('../models/assessmentlist-collection.js');

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "KB Gym Dashboard",
      assessmentlists:assessmentlistCollection,
    };
    logger.info('about to render',assessmentlistCollection);
    response.render("dashboard", viewData);
  }
};

module.exports = dashboard;
