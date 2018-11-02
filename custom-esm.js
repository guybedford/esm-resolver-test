require('esm');

var module = require('module');
var path = require('path');

module._nodeModulePaths = function () { return [] };
module._resolveFilename = (request, parent, isMain) => {
  return path.resolve(process.cwd(), 'test.js');
};