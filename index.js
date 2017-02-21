var http = require('http');
var router = require('./router.js');

var mainHandler = function(req, res) {
    var path = req.method + ' ' + req.url;
    try {
        router[path](req, res);
    } catch (err) {
        console.log('path', path);
        console.log('err', err);
        res.end('Not Found');
    }
};

http.createServer(mainHandler).listen(process.env.PORT || 8880, function() {
    console.log('Listening on 8880');
});

module.exports = mainHandler;