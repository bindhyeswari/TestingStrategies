// npm install webpack -g

var path = require('path');

module.exports = {
    entry: path.join(__dirname, '/async.js'),
    output: {
        filename: 'bundle.js'
    }
};