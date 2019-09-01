'use strict';
const uuid = require('uuid');

const logger = require('../utils/logger');
const goallistStore = require('../models/goallist-store');

const goallist = {
  index(request, response) {
    const goallistId = request.params.id;
    logger.debug('Goallist id = ', goallistId);
    const viewData = {
      title: 'Goallist',
      goallist: goallistStore.getGoallist(goallistId),
    };
    response.render('goallist', viewData);
  },
  
    addGoal(request, response) {
    const goallistId = request.params.id;
    const goallist = goallistStore.getGoallist(goallistId);
    const newGoal = {
        id:uuid(),
        weight: request.body.weight,
        chest: request.body.chest,
        thigh: request.body.thigh,
        upperArm: request.body.upperArm,
        waist: request.body.waist,
        hips: request.body.hips,
        dateTime: request.body.date
    };
    goallistStore.addGoal(goallistId, newGoal);
    response.redirect('/goallist/' + goallistId);
  },
};

module.exports = goallist;