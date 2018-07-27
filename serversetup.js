    require('dotenv').config();                     ////// confirmed syntax for dotenv call.

const express     = require('express');
const bodyParser  = require('body-parser');
const port        = 3501;
const app         = express();
const baseUrl     = "/api/scores";
const controllers = require(__dirname + '/controllers/controllers.js')       ////   this is where we tell the server to look for the controllers



app.use    (bodyParser.json());
app.listen (port,()=>console.log("Playing Wubstep on port:"+port))
app.get    (baseUrl, controllers.read)
app.post   (baseUrl,controllers.create)
app.put    (baseUrl+"/:ID",controllers.update)
app.delete (baseUrl+"/:ID",controllers.delete)


// things to update:
//      - be sure to change "controllers" to reflect the actual controllers files. 
//      - be sure to change "port" if necessary
//      - be sure to change "baseUrl" if necessay"
//
//

//////////////////////// see down here for syntax with massive ////////////////////////

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const products_controller = require('./db/products_controller');     ///// have to declare where the contoller lives

const app=express();
app.use(bodyParser.json());              ///// tells the system we are using bodyParser (middleware)
massive(process.env.CONNECTION_STRING).then(dbInstance => {app.set('db',dbInstance)}).catch(err=>console.log(err));  /// tells us we are using massive

app.post('/api/product',products_controller.create);
app.get('/api/products',products_controller.getAll);
app.get('/api/product/:id',products_controller.getOne);
app.put('/api/product/:id',products_controller.update);
app.delete('/api/product/:id',products_controller.delete);

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Wub wub wub-wub wub Wub... on ${port}.`);});


//// "proxy:http://localhost:XXXX"