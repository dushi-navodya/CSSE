/*
 *  Author : Nadun Chamikara
 */

'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
    universityName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});

const University = mongoose.model('University', UniversitySchema);

module.exports = University;