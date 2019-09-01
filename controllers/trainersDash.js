"use strict";

const logger = require("../utils/logger");
const trainers = require('../models/trainerslist-store');
const usercollection = require('../models/trainer-store.js');

const trainersDash = {
  index(request, response) {
    logger.info("trainersDash rendering");
     const viewData = {
       title: 'Trainerslist 1 TrainersDash',
       trainerslists: trainers
    };
    response.render("trainersDash", viewData);
  },
  
  deleteTrainer(request, response) {
    const trainerId = request.params.trainerid;
    logger.debug(`Deleting Trainer ${trainerId}`);
    trainers.removeTrainers(trainerId);
    response.redirect("/trainersDash/");
  },

  addTrainer(request, response) {
    const newTrainer = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
    };
    trainers.addTrainer(newTrainer);
    response.redirect('/trainersDash/');
  },
  
      login(request, response) {
      const viewData = {
      title: 'Login to the Service',
    };
    response.render('Tlogin', viewData);
  },
    authenticate(request, response) {
    const user = usercollection.getUserByEmail(request.body.email);
    const pass = usercollection.getUserByPassword(request.body.password);
    if (user && pass) {
      response.cookie('assessmentlist', user.email, user.password);
      logger.info(`logging in ${user.email}`);
      response.redirect('/trainersDash');
    } else {
      response.redirect('/trainersDash');
    }
  },
};

module.exports = trainersDash;
