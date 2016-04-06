'use strict';

// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const learnPackageSchema = new Schema({
  name: {type: String, required: true, unique: true},
  description: { type: String, required: true },

  elements: { type: Array},
  owners: {type: Array},

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const learnPackageModel = mongoose.model('learnPackage', learnPackageSchema);

module.exports = learnPackageModel;
