var http = require('http');
var router = require('./router.js');

http.createServer(function(req,res) {
  var path = req.method + ' ' + req.url;
  console.log("path" + path);
  try {
    router[path](req,res);
  } catch(err) {
    console.log('path',path);
    console.log('err',err);
    res.end('Not found');
  }
}).listen(process.env.PORT || 8880,function() {
  console.log('Listening on 8880');
});