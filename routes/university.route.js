/*
 *  Author : Nadun Chamikara
 */

'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const UniversityModel = mongoose.model('University');

const Router = express.Router();

/*
 * Get all universities
 * returns array
 */
Router.get('/', (req, res) => {
    UniversityModel.find().then(function (universities) {
        res.json({
            data:universities,
            message:"Universities successfully retrieved.",
            code : 200
        });
    }).catch(function (err) {
        console.error(err);
        res.json({
            data:null,
            message : "Error occured while retrieving universities.",
            code : 500
        });
    });
});


/*
 * Create university
 * input json object
 */
Router.post('/', (req,res)=>{
    let university = new UniversityModel(req.body);
    university.save((err, university)=>{
        if(err){
            res.json({
                data: null,
                message : "Error occured while saving university.",
                code : 500
            });
        }else{
            res.json({
                data:university,
                message : "University Successfully Added.",
                code : 200
            });
        }
    });
});

module.exports = Router;