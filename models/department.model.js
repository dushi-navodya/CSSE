/**
 * Created by dulakshi on 9/21/2017.
 */
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    departmentName : {
        type: String,
        required: true
    },
    departmentHeadName : {
        type : String
    },
    university:{
        type:Schema.ObjectId,
        ref:'University'
    },
    contactNumber : {
        type : String
    }

});

const Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;