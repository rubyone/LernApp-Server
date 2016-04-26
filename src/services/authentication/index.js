'use strict';

const authentication = require('feathers-authentication');


module.exports = function() {
  const app = this;

  console.log('Set up authentication');

  let config = app.get('auth');



  app.configure(authentication(config));
};
