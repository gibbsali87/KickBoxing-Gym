'use strict';

const logger=require('../utils/logger');
const assessmentlistCollection = require('../models/assessmentlist-collection.js');

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
};

module.exports = assessmentlist;