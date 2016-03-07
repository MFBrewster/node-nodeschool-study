'use strict';

let fs = require('fs');

let filePath = process.argv[2]
let asString = fs.readFileSync(filePath).toString();
let array = asString.split('\n');

console.log(array.length - 1);
