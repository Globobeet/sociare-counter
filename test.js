'use strict';

var sociare = require('./lib');

sociare.getCounts('https://pledgeit.org/red-land-vs-cancer?ref=12345', { omitQuery: true }).then(console.log);
