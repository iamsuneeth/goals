/*jslint node:true */
var express = require('express');
var diaryRouter = express.Router();
var views = require('./views');
function getDiaryRouter() {

    'use strict';
    console.log('reached');
    diaryRouter.route('/')
                .get(views.diaryList)
                .post(views.diaryCreate);
    diaryRouter.route('/:id')
                .get(views.diaryDetail);
    return diaryRouter;
}

module.exports = getDiaryRouter();
