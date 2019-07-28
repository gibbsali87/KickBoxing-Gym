<<<<<<< Updated upstream
"use strict";

const assessmentlistCollection = require('./assessmentlist-collection.json').assessmentlistCollection;
=======
'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const assessmentlistCollection = {

  store: new JsonStore('./models/assessmentlist-collection.json', { assessmentlistCollection: [] }),
  collection: 'assessmentlistCollection',

  getAllAssessmentlists() {
    return this.store.findAll(this.collection);
  },

  getAssessmentlist(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addAssessmentlist(assessmentlist) {
    this.store.add(this.collection, assessmentlist);
    this.store.save();
  },

  removeAssessmentlist(id) {
    const assessmentlist = this.getAssessmentlist(id);
    this.store.remove(this.collection, assessmentlist);
    this.store.save();
  },

  removeAllAssessmentlists() {
    this.store.removeAll(this.collection);
    this.store.save();
  },

  addAssessment(id, assessment, assessmentsNumber) {
    const assessmentlist = this.getAssessmentlist(id);
    assessmentlist.assessments.push(assessment);
    
    assessmentsNumber=assessment.length;
    assessmentlist.assessmentsNumber=assessmentsNumber;
    
    this.store.save();
  },

  removeAssessment(id, assessmentId) {
    const assessmentlist = this.getAssessmentlist(id);
    const assessments = assessmentlist.assessments;
    _.remove(assessments, { id: assessmentId});
    this.store.save();
  },
  
  getUserAssessmentlists(userid){
    return this.store.findBy(this.collection, {userid: userid});
  },
  
};

>>>>>>> Stashed changes
module.exports = assessmentlistCollection;