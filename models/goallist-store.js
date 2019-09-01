'use strict';
const _ = require('lodash');

const goallistStore = {

  goallistCollection: require('./goallist-store.json').goallistCollection,

  getAllGoallists() {
    return this.goallistCollection;
  },

  getGoallist(id) {
    let foundGoallist = null;
    for (let goallist of this.goallistCollection) {
      if (id == goallist.id) {
        foundGoallist = goallist;
      }
    }

    return foundGoallist;
  },
  
  addGoal(id, goal) {
    const goallist = this.getGoallist(id);
    goallist.goals.push(goal);
  },
  
  getUserGoallists(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },
  
};

module.exports = goallistStore;