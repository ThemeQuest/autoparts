const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')


/**
 * MIDDLEWARE
 */
app.use(cors());
app.use(bodyParser.json());


/**
 * IMPORT ROUTES
 */
const carsRoute = require('./routes/cars');


/** 
 * USE ROUTES
 */
app.use('/cars', carsRoute);


//HOME PAGE
app.get('/', (req, res) => res.send("We Are On Home"));


//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log('Connected!'));


//LISTENING
app.listen(process.env.PORT || 3000);