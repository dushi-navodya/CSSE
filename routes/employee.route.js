/**
 * Created by dulakshi on 9/21/2017.
 */

'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const EmployeeModel = mongoose.model('Employee');

const Router = express.Router();

//get all the employees
Router.get('/', (req, res) => {
    EmployeeModel.find().then(function (employees) {
        res.json({
            data:employees,
            message:"Employees successfully retrieved.",
            code : 200
        });
    }).catch(function (err) {
        console.error(err);
        res.json({
            data:null,
            message : "Error occured while retrieving Employees.",
            code : 500
        });
    });
});

//get one employee
Router.post('/', (req, res) => {
    EmployeeModel.find().then(function (employee) {
        res.json({
            data: employee,
            message: "Employee successfully retrieved",
            code: 200
        });
    }).catch(function(err) {
        console.error(err);
            res.json({
                data: null,
            message: "Error Occured While retriving Employee",
            code :500
            });
    });
});

//post employee
Router.post('/', (req,res)=>{
    let employee = new EmployeeModel(req.body);
    employee.save((err, employee)=>{
        if(err){
            res.json({
                data: null,
                message : "Error occured while saving employee.",
                code : 500
            });
        }else{
            res.json({
                data:employee,
                message : "employee Successfully Created.",
                code : 200
            });
        }
    });
});

module.exports = Router;