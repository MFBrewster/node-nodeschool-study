'use strict';

let fs = require('fs');
let path = require('path');

let filePath = process.argv[2];
let filter = process.argv[3];

fs.readdir(filePath, function(err, list) {
  let filteredArray = [];
  list.forEach(function(curr) {
    if (path.extname(curr) === ('.' + filter)) { filteredArray.push(curr); }
  });
  filteredArray.forEach(function(curr) {
     console.log(curr); 
  });
});
