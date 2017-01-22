var express = require('express'),
    morgan = require('morgan');

var port;
try {
    port = require('./package.json').serverport;
} catch (e) {
    port = 8080;
}

const ReactServer = express();

ReactServer.use(morgan('dev'));
ReactServer.use(express.static("dist"));
console.log("React Server running on port :%s", port);
ReactServer.listen(port);
