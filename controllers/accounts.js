'use strict';

const usercollection = require('../models/user-collection');
const logger = require('../utils/logger');
const uuid = require('uuid');

const accounts = {

  index(request, response) {
    const viewData = {
      title: 'Login or Signup',
    };
    response.render('index', viewData);
  },

  login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('login', viewData);
  },

  logout(request, response) {
    response.cookie('assessmentlist', '');
    response.redirect('/');
  },

  signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('signup', viewData);
  },

  register(request, response) {
    const user = request.body;
    user.id = uuid();
    usercollection.addUser(user);
    logger.info(`registering ${user.email}`);
    response.redirect('/');
  },

  authenticate(request, response) {
    const user = usercollection.getUserByEmail(request.body.email);
    const pass = usercollection.getUserByPassword(request.body.password);
    if (user && pass) {
      response.cookie('assessmentlist', user.email, user.password);
      logger.info(`logging in ${user.email}`);
      response.redirect('/dashboard');
    } else {
      response.redirect('/login');
    }
  },

  getCurrentUser(request) {
    const userEmail = request.cookies.assessmentlist;
    return usercollection.getUserByEmail(userEmail);
  },
  
  getAllUsers(response){
    return userCollection.getAllUsers();
  },
  
  deleteUser(request, response) {
    const userid = request.params.id;
    usercollection.removeUser(userid);
    response.redirect('/trainersDash');
  },
    
};

module.exports = accounts;