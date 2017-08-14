const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// connecting to db
mongoose.connect('mongodb://localhost:27017/Vehicles');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to db at localhost 27017")
});


// seeding the db
const seedDealerships = require('./seeds/dealerships');
const seedCars = require('./seeds/cars');
seedDealerships();
seedCars();

// getting models in
const Cars = require('./models/Cars').model;
const Dealerships = require('./models/Dealerships').model;


// getting the routes
const carRoute = require('./Routes/carRoute')
const dealershipRoute = require('./Routes/dealershipRoute')

// connect through middlewear
app.use('/', carRoute)
app.use('/', dealershipRoute)

// server listening on
app.listen(8080, () => {
    console.log('SERVER RUNNING ON 8080');
})







