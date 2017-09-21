/**
 * Created by dulakshi on 9/21/2017.
 */

'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    employeeName: {
        type: String,
        required: true
    },
    departmentName : {
        type:Schema.ObjectId,
        ref: 'Department'
    },
    category:{
        type: String
    },
    basicSalary:{
        type:Float32Array,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    grade:{
        type:String
    }


});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
