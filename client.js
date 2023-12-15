'use strict';

const soap = require('soap');
var url = 'http://127.0.0.1:8000/client?wsdl';
var endpoint_url = 'http://127.0.0.1:8000/client';

const args = {
  clientName: 'Bryan',
  hoursWorked: 40 // Horas trabajadas (ejemplo: 40 horas)
};


soap.createClient(url, function(err, client) {
  client.CalculateSalary(args, function(err, result) {
    if (err) {
      console.error(err);
    } else {
      console.log(`Salary for ${result.clientName}: $${result.salary}`);
    }
  });
}, endpoint_url);