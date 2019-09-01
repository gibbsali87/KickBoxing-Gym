"use strict";
const logger = require("../utils/logger");

const users = {
  users: [
    {
      firstname: 'Piano Sonata No. 3',
      lastname: 'Beethoven',
      email: 'myemail@what.ie',
    },
    {
      firstname: 'Piano Sonata No. 7',
      lastname: 'Beethoven',
    },
    {
      firstname: 'Piano Sonata No. 10',
      lastname: 'Beethoven',
      email: 'mysecond@email.ie',
    },
  ],
};


const userlist = {
  index(request, response) {
    logger.info("user rendering");
     const viewData = {
       title: 'User',
       userlist: users,
    };
    logger.info('about to render users', users)
    response.render("user", viewData);
  }
};

module.exports = userlist;
