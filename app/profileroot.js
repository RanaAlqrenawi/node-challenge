var fs = require('fs');
var profile = fs.readFileSync(__dirname+'/../views/profile.html','utf8');
module.exports = function(req,res) {
  res.end(profile);
};