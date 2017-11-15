/**
 * Created by SHENJO on 11/15/2017.
 */
const fs = require('fs');

exports.exist = function(path) {
  return fs.existsSync(path);
};