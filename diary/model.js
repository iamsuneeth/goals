/*jslint node:true */
var mongoose = require('mongoose');
var Schma = mongoose.Schema;


var diarySchema = new Schma({
    timestamp: {type: Date, default: Date.now },
    content: {type: String, required: true}

});

module.exports = mongoose.model('diaries', diarySchema);
