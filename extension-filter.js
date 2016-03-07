'use strict';

let fs = require('fs');
let path = require('path');

module.exports = function (dir, filter, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) { return callback(err) }

    let filteredArray = [];
    list.forEach(function(curr) {
      if (path.extname(curr) === ('.' + filter)) { filteredArray.push(curr); }
    });
    callback(null, filteredArray);
  });
}
