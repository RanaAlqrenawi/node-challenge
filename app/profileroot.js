var fs = require('fs');
var profile = fs.readFileSync(__dirname+'/../views/profile.html','utf8');
// module.exports = function(req,res) {
//   res.end(profile);
// };
var fs = require('fs');
var form = fs.readFileSync(__dirname+'/../views/form.html','utf8');
var profile = fs.readFileSync(__dirname + '/../views/profile.html', 'utf8');

module.exports = function(req,res) {
if(typeof req.headers.cookie=="undefined"){
  res.end(form);
}else{

       var c = req.headers.cookie;
        var name = c.split("=");
        if (name[1] == "rana") {
            res.end(profile);
        }

        else{
 res.end(form);

        }

}};