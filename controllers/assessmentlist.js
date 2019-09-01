'use strict';

const logger=require('../utils/logger');
const assessmentlistCollection = require('../models/assessmentlist-collection.js');
const uuid = require('uuid');

const assessmentlist = {   
  index(request, response){
    const assessmentlistId = request.params.id;
    logger.info('Assessmentlist id =' + assessmentlistId);
    const viewData = {
      title:'AssessmentList',
      assessmentlist:assessmentlistCollection.getAssessmentlist(assessmentlistId),
      };
      response.render('assessmentlist', viewData);
    },
    
    deleteAssessment(request, response) {
    const assessmentlistId = request.params.id;
    const assessmentId = request.params.assessmentid;
    logger.debug(`Deleting Assessment ${assessmentId} from Assessmentlist ${assessmentlistId}`);
    assessmentlistCollection.removeAssessment(assessmentlistId, assessmentId);
    response.redirect('/assessmentlist/' + assessmentlistId);
    },
    
    deleteAssessmentlist(request, response){
      const assessmentlistId = request.params.id;
      logger.debug(`Deleting Assessmentlist ${assessmentlistId} from Assessmentlist`)
      assessmentlistCollection.removeAssessmentlist(assessmentlistId);
      response.redirect('/dashboard');
    },
  
    addAssessment(request, response) {
      const assessmentlistId = request.params.id;
      const assessmentlist = assessmentlistCollection.getAssessmentlist(assessmentlistId);
      const newAssessment = {
        id:uuid(),
        weight: request.body.weight,
        chest: request.body.chest,
        thigh: request.body.thigh,
        upperArm: request.body.upperArm,
        waist: request.body.waist,
        hips: request.body.hips,
        dateTime: new Date().toLocaleString(),
        comment:request.body.comment,
      };
      assessmentlistCollection.addAssessment(assessmentlistId, newAssessment);
      logger.debug('New Assessment = ', newAssessment);
      response.redirect('/assessmentlist/' + assessmentlistId);
    },
  
};

module.exports = assessmentlist;