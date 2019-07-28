"use strict";

const accounts = require('./controllers/accounts.js');
const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");

<<<<<<< Updated upstream
router.get("/", dashboard.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);

=======
const assessmentlist = require('./controllers/assessmentlist.js');

router.get("/dashboard", dashboard.index);
router.get("/about", about.index);

router.get('/assessmentlist/:id', assessmentlist.index);
router.get('/assessmentlist/:id/deleteassessment/:assessmentid',assessmentlist.deleteAssessment);
router.get('/dashboard/deleteassessmentlist/:id', dashboard.deleteAssessmentlist);
router.post('/assessmentlist/:id/addassessment',assessmentlist.addAssessment);
router.post('/dashboard/addassessmentlist', dashboard.addAssessmentlist);;


router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

>>>>>>> Stashed changes
module.exports = router;
