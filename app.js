//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
const router = require("./app/routes/routes")

// Setting Base directory
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
//set router 
app.use('/', router);

module.exports = app;