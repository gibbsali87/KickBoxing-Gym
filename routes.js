"use strict";

const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");

const assessmentlist = require('./controllers/assessmentlist.js');

router.get("/", dashboard.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);

router.get('/assessmentlist/:id', assessmentlist.index);
router.get('/assessmentlist/:id/deleteassessment/:assessmentid',assessmentlist.deleteAssessment);
router.get('/dashboard/deleteassessmentlist/:id', dashboard.deleteAssessmentlist)

module.exports = router;
