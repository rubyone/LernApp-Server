'use strict';

const service = require('feathers-mongoose');
const learnPackage = require('./learnpackage-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: learnPackage,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/learnpackage', service(options));

  // Get our initialize service to that we can bind hooks
  const learnpackagesService = app.service('/learnpackages');

  // Set up our before hooks
  // learnpackagesService.before(hooks.before);

  // Set up our after hooks
  // learnpackagesService.after(hooks.after);
};
