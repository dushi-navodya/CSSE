'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());

app.use('/app', express.static(__dirname + '/public'));

app.use('/', (req, res)=>{
    res.redirect('/app');
});

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});