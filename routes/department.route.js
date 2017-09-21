/**
 * Created by dulakshi on 9/21/2017.
 */
/**
 * Created by dulakshi on 9/21/2017.
 */

'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const DepartmentModel = mongoose.model('Department');

const Router = express.Router();

//get all the Departments
Router.get('/', (req, res) => {
    DepartmentModel.find().then(function (Departments) {
        res.json({
            data:Departments,
            message:"Departments successfully retrieved.",
            code : 200
        });
    }).catch(function (err) {
        console.error(err);
        res.json({
            data:null,
            message : "Error occured while retrieving Departments.",
            code : 500
        });
    });
});

//get one Department
Router.post('/', (req, res) => {
    DepartmentModel.find().then(function (Department) {
        res.json({
            data: Department,
            message: "Department successfully retrieved",
            code: 200
        });
    }).catch(function(err) {
        console.error(err);
        res.json({
            data: null,
            message: "Error Occured While retriving Department",
            code :500
        });
    });
});

//post Department
Router.post('/', (req,res)=>{
    let Department = new DepartmentModel(req.body);
    Department.save((err, Department)=>{
        if(err){
            res.json({
                data: null,
                message : "Error occured while saving Department.",
                code : 500
            });
        }else{
            res.json({
                data:Department,
                message : "Department Successfully Created.",
                code : 200
            });
        }
    });
});

module.exports = Router;