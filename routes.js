/*jslint node:true */
var express = require('express');
var apiRouter = express.Router();
var diaryRouter = require('./diary/routes');

module.exports = function (app) {

    'use strict';

    app.use('/api', apiRouter);

    apiRouter.use('/diary', diaryRouter);
};



