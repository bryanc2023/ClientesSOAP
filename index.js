'use strict';

var http = require('http');
var soap = require('soap');
var server;

var myService = {
  ClientService: {
    ClientPort: {
      CalculateSalary: function(args) {
        const ratePerHour = 10; // Tarifa por hora (ejemplo: $10 por hora)
        const { clientName, hoursWorked } = args;
        
        const salary = ratePerHour * hoursWorked;
        return { clientName, salary };
      }
    }
  }
};

var xml = require('fs').readFileSync('client.wsdl', 'utf8');

server = http.createServer(function(request,response) {
  response.end('404: Not Found: ' + request.url);
});

server.listen(8000);
soap.listen(server, '/client', myService, xml);