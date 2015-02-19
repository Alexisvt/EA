//Including projects files
var routes = require('./lib/controllers/routes.js');
var bodyParser = require('body-parser');
var express = require('express');


//Init server IIFE pattern
var server = express();

//Setting other config for the server
server.set('view engine', 'jade');
server.set('port', process.env.PORT || 3333);
server.set('view cache', true);

//Middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended : true}));

//serving static files
server.use(express.static(__dirname + "/public"));

//Implementing MVC Pattern
//Calling Controllers aka routing
if( routes.registerRoutes !== undefined){
  routes.registerRoutes(server);
}
else{
  console.log('routes are undefined');
}

//Starting Server
server.listen(server.get('port'), function () {
  console.log('Express started on http:localhost:' + server.get('port') +
             "; press Cotrl-C to terminate");
});
