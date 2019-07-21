"use strict";

const logger = require("../utils/logger");
const assessmentlistCollection = require('../models/assessmentlist-collection');

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "KB Gym Dashboard",
      assessmentlists:assessmentlistCollection.getAllAssessmentlists(),
    };
    logger.info('about to render',assessmentlistCollection.getAllAssessmentlists());
    response.render("dashboard", viewData);
  },
  
    deleteAssessmentlist(request, response) {
    const assessmentlistId = request.params.id;
    logger.debug(`Deleting Assessmentlist ${assessmentlistId}`);
    assessmentlistCollection.removeAssessmentlist(assessmentlistId);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;
