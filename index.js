'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

/*
 * import models
 */
require('./models/university.model');


/*
 * import routes
 */
const UniversityRouter = require('./routes/university.route');


/*
 * connect to mongodb database
 */
mongoose.connect('mongodb://localhost:27017/csse', err => {
    if (err) {
        console.log(err);
        // process.exit(1);
    }
});


/*
 * initialize app
 */
const app = express();


/*
 * configure body parser
 */
app.use(bodyParser.json());




/*
 * declare routes
 */

// route for frontend
app.use('/app', express.static(__dirname + '/public'));

// route for university
app.use('/university', UniversityRouter);



/*
 *
 *   Add new routes here
 *
 */




// route for root
app.use('/', (req, res)=>{
    res.redirect('/app');
});



/*
 * start server
 */
app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});