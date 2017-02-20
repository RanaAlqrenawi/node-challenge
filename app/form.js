var fs = require('fs');
var https = require('https');
var utils = require('../utils.js');
var form = fs.readFileSync(__dirname+'/../views/form.html','utf8');

module.exports = function(req, res) {

    utils.parseBody(req, function(err, body) {
        var fixedpass = 123654;
        if (body.usrname === "rana" && body.usrpass == fixedpass) {

            res.writeHeader(302, {
                'location': 'profile',
                'Set-Cookie': 'name=rana'
            });
            res.end();

        } else {

            
            res.end(form);



        }






    });
}
