//Including projects files
var routes = require('./lib/controllers/routes.js');
var bodyParser = require('body-parser');


//Init server IIFE pattern
var server = (require('express')());

//Setting other config for the server
server.set('view engine', 'jade');
server.set('port', process.env.PORT || 3000);
server.set('view cache', true);

//Middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded(extended : true));

//Implementing MVC Pattern
//Calling Controllers aka routing
