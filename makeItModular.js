'use strict';

let filePath = process.argv[2];
let filter = process.argv[3];

const extensionFilter = require('./extension-filter.js');

let filteredArray = extensionFilter(filePath, filter);

filteredArray.forEach(function(curr) {
   console.log(curr);
});
