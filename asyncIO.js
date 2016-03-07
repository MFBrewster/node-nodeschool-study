'use strict';

let fs = require('fs');

let filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function(err, data) {
  let answer = data.split('\n');
  console.log(answer.length - 1);
});
