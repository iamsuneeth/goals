/*jslint node:true */
var Diary = require('./model');

function getViews() {

    'use strict';

    var diaryList = function (req, res) {

            Diary.find(function (err, diaries) {
                if (err) {
                    console.error(err.stack);
                }
                res.json(diaries);
            });
        },
        diaryCreate = function (req, res) {
            var diary = new Diary();
            console.log(req.body);
            diary.content = req.body.content;
            diary.save(function (err, diary) {
                if (err) {
                    console.error(err.stack);
                }
                res.json({message: 'diary entry created', diary: diary});
            });
        },
        diaryDetail = function (req, res) {
            Diary.findById(req.params.id, function (err, diary) {
                if (err) {
                    console.error(err.stack);
                }
                res.json(diary);
            });
        };

    return {
        diaryList : diaryList,
        diaryCreate : diaryCreate,
        diaryDetail : diaryDetail
    };
}

module.exports = getViews();
