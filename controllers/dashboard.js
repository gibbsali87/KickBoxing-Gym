"use strict";

const accounts = require ('./accounts.js');
const logger = require("../utils/logger");
<<<<<<< Updated upstream
const assessmentlistCollection = require('../models/assessmentlist-collection.js');
=======
const assessmentlistCollection = require('../models/assessmentlist-collection');
const uuid = require('uuid');
>>>>>>> Stashed changes

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: "KB Gym Dashboard",
<<<<<<< Updated upstream
      assessmentlists:assessmentlistCollection,
=======
      assessmentlists:assessmentlistCollection.getUserAssessmentlists(loggedInUser.id),
>>>>>>> Stashed changes
    };
    logger.info('about to render',assessmentlistCollection);
    response.render("dashboard", viewData);
<<<<<<< Updated upstream
  }
=======
  },
  
    deleteAssessmentlist(request, response) {
    const assessmentlistId = request.params.id;
    logger.debug(`Deleting Assessmentlist ${assessmentlistId}`);
    assessmentlistCollection.removeAssessmentlist(assessmentlistId);
    response.redirect('/dashboard');
  },
  
    addAssessmentlist(request, response) {
      const loggedInUser = accounts.getCurrentUser(request); // to see only loggedIn user assessments
      const newAssessmentList = {
        id: uuid(),
        userid: loggedInUser.id,
        title: request.body.title,
        assessments: [],
      };
      logger.debug('Creating a new Assessmentlist', newAssessmentList);
      assessmentlistCollection.addAssessmentlist(newAssessmentList);
      response.redirect('/dashboard');
  },
>>>>>>> Stashed changes
};

module.exports = dashboard;
