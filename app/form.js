var https = require('https');
var utils = require('../utils.js');

module.exports = function(req, res) {

    utils.parseBody(req, function(err, body) {
        var fixedpass = 123654;
        if (body.usrname === "rana" && body.usrpass == fixedpass) {

            res.writeHeader(302, {
                'location': 'profile'
            });
            res.end();

        } else {
            //console.log("ERRORRRRRR");


        }






    });
}
