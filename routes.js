"use strict";

const accounts = require('./controllers/accounts.js');
const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
const goalDash = require("./controllers/goalDash.js");
const trainersDash = require("./controllers/trainersDash.js");
const users = require("./controllers/users.js");

const assessmentlist = require('./controllers/assessmentlist.js');
const goallist = require('./controllers/goallist.js');

router.get("/dashboard", dashboard.index);
router.get("/goalDash", goalDash.index);
router.get("/trainersDash", trainersDash.index);
router.get("/users", users.index);

router.get("/about", about.index);

router.get('/assessmentlist/:id', assessmentlist.index);
router.get('/assessmentlist/:id/deleteassessment/:assessmentid',assessmentlist.deleteAssessment);
router.get('/dashboard/deleteassessmentlist/:id', dashboard.deleteAssessmentlist);
router.post('/assessmentlist/:id/addassessment',assessmentlist.addAssessment);
router.post('/dashboard/addassessmentlist', dashboard.addAssessmentlist);

router.get('/goallist/:id', goallist.index);
router.post('/goallist/:id/addgoal', goallist.addGoal);

//router.post('/trainersDash/addTrainer', trainerslist.addTrainer);

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get('/users', accounts.getCurrentUser);
router.get('/accounts/deleteUser/:id', accounts.deleteUser);
router.get('/Tlogin', trainersDash.login);
router.post('/Tauthenticate', trainersDash.authenticate);


router.get("/listgoals", goalDash.index);
module.exports = router;
