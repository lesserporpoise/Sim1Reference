const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const products_controller = require('./db/products_controller');     ///// have to declare where the contoller lives

const app=express();
app.use(bodyParser.json());              ///// tells the system we are using bodyParser (middleware)
massive(process.env.CONNECTION_STRING).then(dbInstance => {app.set('db',dbInstance)}).catch(err=>console.log(err));  /// tells us we are using massive

///////////////////// OR ////////////////////

const express     = require('express');
const bodyParser  = require('body-parser');
const port        = 3501;
const app         = express();
const baseUrl     = "/api/scores";
const controllers = require(__dirname + '/controllers/controllers.js')


