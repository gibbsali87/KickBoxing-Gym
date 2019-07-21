const _ = require('lodash');

"use strict";

const assessmentlistCollection = {
  
  assessmentlistCollection: require('./assessmentlist-collection.json').assessmentlistCollection,
  
  getAllAssessmentlists(){
    return this.assessmentlistCollection;
  },
  
  getAssessmentlist(id){
    return _.find(this.assessmentlistCollection, {id:id});
  },
  
  removeAssessment(id,assessmentId){
    const assessmentlist = this.getAssessmentlist(id);
    _.remove(assessmentlist.assessments, {id:assessmentId});    
    
  },
  
  removeAssessmentlist(id){
    _.remove(this.assessmentlistCollection, {id:id});
  },
  
};

module.exports = assessmentlistCollection;